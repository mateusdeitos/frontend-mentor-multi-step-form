import { useFormContext } from "react-hook-form";
import { ContextState } from "../../../Context";
import { Switch } from "../../Switch";
import styles from "./Billing.module.scss";

export const Billing = () => {
	const formControl = useFormContext<ContextState["form"]>();
	const billing = formControl.watch("billing");
	return <section className={styles.sectionBilling}>
		<p className={styles.label}>Monthly</p>
		<Switch 
			checked={billing === "yearly"}
			onChange={(e) => formControl.setValue("billing", e.currentTarget.checked ? "yearly" : "monthly")}
		/>
		<p className={styles.label}>Yearly</p>
	</section>
}