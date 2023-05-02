import styles from "./Pricing.module.scss";

type Props = {
	price: number;
	period: "monthly" | "yearly";
	active?: boolean;
	className?: string;
}

export const Pricing = ({ period, price, active = false, className }: Props) => {
	const periodString = period === "monthly" ? "mo" : "yr";
	const priceString = `$${price}/${periodString}`;
	const classNames = [
		styles.cardPricing,
		active ? styles.active : undefined,
		className
	].filter(Boolean).join(" ");

	return <p className={classNames}>{priceString}</p>;
};
