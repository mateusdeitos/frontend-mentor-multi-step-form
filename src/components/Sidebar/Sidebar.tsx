import { useStepContext } from "../../Context"
import styles from "./Sidebar.module.scss"

interface Props {
	steps: string[]
}

export const Sidebar = ({
	steps,
}: Props) => {
	const [{ step: activeStep }] = useStepContext();

	return <nav className={styles.container}>
		<div className={styles.steps}>
			{steps.map((step, index) => {
				const indexClassName = [
					styles.index,
					index === activeStep ? styles.active : ""
				].join(" ");

				return <div className={styles.step} key={index}>
					<span className={indexClassName}>
						{index + 1}
					</span>
					<div className={styles.description}>
						<span className={styles.title}>Step {index + 1}</span>
						<span className={styles.text}>{step}</span>
					</div>
				</div>
			})}
		</div>
	</nav>
}