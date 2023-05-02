import { useFormContext } from "react-hook-form";
import { ContextState, useStepContext } from "../../../Context";
import { Checkbox } from "../../Checkbox";
import { Pricing } from "../../Pricing";
import styles from "./Addons.module.scss";
import { TAddon } from "../../../data/addons";

export const Addon = ({
	info, name, price, title
}: TAddonProps) => {
	const [{ form }] = useStepContext();
	const formControl = useFormContext<ContextState["form"]>();

	const toggle = () => {
		const current = formControl.getValues("addons");
		formControl.setValue("addons", {
			...current,
			[name]: !current?.[name]
		});
	};

	const addons = formControl.watch("addons");
	const checked = !!addons?.[name];
	const containerClasses = [
		styles.addonContainer,
		checked ? styles.active : undefined
	].filter(Boolean).join(" ");

	return <div className={containerClasses} onClick={() => toggle()}>
		<Checkbox {...formControl.register(`addons.${name}`)} />
		<div className={styles.addonDataContainer}>
			<div className={styles.addonInfoContainer}>
				<h3 className={styles.addonTitle}>{title}</h3>
				<p className={styles.addonInfo}>{info}</p>
			</div>
			<Pricing active price={price[form.billing]} period={form.billing} />
		</div>
	</div>;
};
type TAddonProps = TAddon & {
	name: string;
};
