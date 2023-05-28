import { FormProvider, useForm } from "react-hook-form";
import { useStepContext } from "../../../Context";
import { plans } from "../../../data/plans";
import { StepEnum } from "../../../enums/StepEnum";
import { LinkButton, SecondaryButton } from "../../Button";
import { Form } from "../Form";
import { Billing } from "./Billing";
import { PlanItem } from "./PlanItem";
import styles from "./SelectPlan.module.scss";
import commomStyles from "../Commom.module.scss"

export const SelectPlan = () => {
	const [{ form }, dispatch] = useStepContext();
	const formControl = useForm<typeof form>({
		defaultValues: {
			plan: form.plan,
			billing: form.billing,
		}
	});

	const billing = formControl.watch("billing");
	const plan = formControl.watch("plan");

	const onSubmit = (formData: typeof form) => {
		dispatch({
			type: "CHANGE_STEP",
			payload: StepEnum.ADDONS,
			formData
		});
	}

	return <FormProvider {...formControl}>
			<Form
				onSubmit={formControl.handleSubmit(onSubmit)}
				title="Select your plan"
				subTitle="You have the option of monthly or yearly billing."
			>
				<section className={styles.sectionInputs}>			
					<section className={styles.sectionPlans}>
						{Object.entries(plans).map(([planType, {name, price}]) => {
							return <PlanItem 
								key={planType}
								type={planType as keyof typeof plans}
								title={name}
								price={price[billing]}
								period={billing}
								additionalInfo={billing === "yearly" ? "2 months free" : ""}
								isActive={plan === planType}
								onClick={() => formControl.setValue("plan", planType  as keyof typeof plans)}
							/>
						})}
					</section>

					<Billing />
				</section>
				<section className={commomStyles.sectionFooter} style={{justifyContent: "space-between"}}>
					<LinkButton type="button" onClick={() => dispatch({ type: "CHANGE_STEP", payload: StepEnum.YOUR_INFO })}>go back</LinkButton>
					<SecondaryButton type="submit">Next Step</SecondaryButton>
				</section>
		</Form>
	</FormProvider>
};

