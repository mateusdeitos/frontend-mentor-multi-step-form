import { FormProvider, useForm } from "react-hook-form";
import { useStepContext } from "../../../Context";
import { LinkButton, SecondaryButton } from "../../Button";
import { Form } from "../Form";
import styles from "./Addons.module.scss";
import { addons } from "../../../data/addons";
import { Addon } from "./Addon";
import { StepEnum } from "../../../enums/StepEnum";
import commomStyles from "../Commom.module.scss"

export const Addons = () => {
	const [{ form }, dispatch] = useStepContext();
	const formControl = useForm<typeof form>({
		defaultValues: {
			addons: form.addons,
		}
	});

	const onSubmit = (formData: typeof form) => {
		dispatch({
			type: "CHANGE_STEP",
			payload: StepEnum.SUMMARY,
			formData
		});
	}

	return <FormProvider {...formControl}>
			<Form
				onSubmit={formControl.handleSubmit(onSubmit)}
				title="Pick add-ons"
				subTitle="Add-ons help enhance your gaming experience."
			>
				<section className={styles.sectionInputs}>			
					<section className={styles.sectionAddons}>
						{Object.entries(addons).map(([key, addon]) => <Addon key={key} name={key} {...addon} />)}
					</section>

				</section>
				<section className={commomStyles.sectionFooter} style={{justifyContent: "space-between"}}>
					<LinkButton onClick={() => dispatch({ type: "CHANGE_STEP", payload: StepEnum.SELECT_PLAN })}>go back</LinkButton>
					<SecondaryButton type="submit">Next Step</SecondaryButton>
				</section>
		</Form>
	</FormProvider>
};


