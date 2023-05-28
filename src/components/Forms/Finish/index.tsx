import styles from "./Finish.module.scss";
import iconThankYou from "../../../../assets/images/icon-thank-you.svg";

export const Finish = () => {
	return <section className={styles.container}>
		<img className={styles.icon} src={iconThankYou} alt="Thank you" />
		<h3 className={styles.title}>Thank You!</h3>
		<p className={styles.paragraph}>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at <a href="mailto:support@loremgaming.com">support@loremgaming.com</a></p>
	</section>
};

