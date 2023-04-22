import styles from "./Sidebar.module.scss"

interface Props {
	steps: string[]
	activeStepIndex: number
	onChangeStep: (index: number) => void
}

export const Sidebar = ({
	steps,
	activeStepIndex,
	onChangeStep,
}: Props) => {
	return <nav className={styles.container}>
		<div className={styles.steps}>
			{steps.map((step, index) => {
				const indexClassName = [
					styles.index,
					index === activeStepIndex ? styles.active : ""
				].join(" ");

				return <div className={styles.step} key={index}>
					<span 
						className={indexClassName}
						onClick={() => onChangeStep(index)}
					>
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