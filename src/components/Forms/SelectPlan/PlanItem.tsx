import planItemStyles from "./PlanItem.module.scss";
import iconArcade from "../../../../assets/images/icon-arcade.svg";
import iconAdvanced from "../../../../assets/images/icon-advanced.svg";
import iconPro from "../../../../assets/images/icon-pro.svg";
import { Pricing } from "../../Pricing";
import { plans } from "../../../data/plans";

export type PlanItemProps = {
	type: keyof typeof plans;
	title: string;
	additionalInfo?: string;
	price: number;
	period: "monthly" | "yearly";
	isActive: boolean;
	onClick: () => void;
};

const iconMap: Record<PlanItemProps["type"], string> = {
	arcade: iconArcade,
	advanced: iconAdvanced,
	pro: iconPro,
};

export const PlanItem = ({ title, additionalInfo, type, price, period, isActive, onClick }: PlanItemProps) => {
	const containerClasses = [planItemStyles.card];
	if (isActive)
		containerClasses.push(planItemStyles.active);

	return <div className={containerClasses.join(" ")} onClick={onClick}>
		<img className={planItemStyles.cardIcon} src={iconMap[type]} alt={title} />
		<div className={planItemStyles.cardBody}>
			<h3 className={planItemStyles.cardTitle}>{title}</h3>
			<Pricing price={price} period={period} />
			{additionalInfo && <p className={planItemStyles.cardAdditionalInfo}>{additionalInfo}</p>}
		</div>
	</div>;
};


