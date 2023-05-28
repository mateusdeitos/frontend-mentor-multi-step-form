import { addons } from "../../../data/addons";
import { useStepContext } from "../../../Context";
import { plans } from "../../../data/plans";
import { LinkButton, PrimaryButton } from "../../Button";
import { Pricing } from "../../Pricing";
import { Form } from "../Form";
import styles from "./Summary.module.scss";
import { StepEnum } from "../../../enums/StepEnum";
import commomStyles from "../Commom.module.scss"

export const Summary = () => {
	const [{ form }, dispatch] = useStepContext();
	const onSubmit = () => {
		dispatch({
			type: "FINISH",
		});
	}

	const hasAddons = Object.values(form.addons).some(Boolean);
	const pricePlan = plans[form.plan].price[form.billing];
	const total = pricePlan + Object.entries(form.addons).reduce((acc, [addon, active]) => {
		if (active) {
			return acc + addons[addon as keyof typeof addons].price[form.billing];
		}

		return acc;
	}, 0)

	return <Form
				onSubmit={onSubmit}
				title="Finishing up"
				subTitle="Double-check everything looks OK before confirming."
			>
				<section className={styles.container}>			
					<section className={styles.planContainer}>
						<div className={styles.plan}>
							<div className={styles.descriptionContainer}>
								<h3 className={styles.planTitle}>{form.plan} ({form.billing})</h3>
								<LinkButton className={styles.planChangeLink} onClick={() => dispatch({ type: "CHANGE_STEP", payload: 1 })}>Change</LinkButton>
							</div>
							<Pricing 
								period={form.billing} 
								price={plans[form.plan].price[form.billing]}
								className={styles.planPrice}
							/>
						</div>
						
						{hasAddons && (
							<div className={styles.addonsContainer}>
								{Object.entries(form.addons).map(([addon, enabled]) => {
									if (!enabled) return null;
									return <div key={addon} className={styles.addon}>
										<div key={addon} className={styles.descriptionContainer}>
											<p className={styles.addonTitle}>
												{addons[addon as keyof typeof addons].title}
											</p>
										</div>
										<Pricing 
											period={form.billing} 
											price={addons[addon as keyof typeof addons].price[form.billing]} 
											className={styles.addonPrice}
										/>
									</div>
								})}
							</div>
						)}
					</section>
					<section className={styles.totalContainer}>
						<p className={styles.totalTitle}>Total ({form.billing === "monthly" ? "per month": "per year"})</p>
						<Pricing 
							period={form.billing} 
							price={total} 
							className={styles.totalPrice}
						/>
					</section>
				</section>
				<section className={commomStyles.sectionFooter} style={{justifyContent: "space-between"}}>
					<LinkButton type="button" onClick={() => dispatch({ type: "CHANGE_STEP", payload: StepEnum.ADDONS })}>go back</LinkButton>
					<PrimaryButton type="submit">Confirm</PrimaryButton>
				</section>
		</Form>
};

