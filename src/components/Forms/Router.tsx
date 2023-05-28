import { useStepContext } from "../../Context"
import { StepEnum } from "../../enums/StepEnum";
import { Addons } from "./Addons";
import styles from "./Form.module.scss"
import { SelectPlan } from "./SelectPlan";
import { Summary } from "./Summary";
import { Finish } from "./Finish";
import { YourInfo } from "./YourInfo";


export const Router = () => {
	const [{ step, progress }] = useStepContext();
	
	return <div className={styles.container}>
		{(() => {
			if (step === StepEnum.YOUR_INFO) {
				return <YourInfo />
			}

			if (step === StepEnum.SELECT_PLAN) {
				return <SelectPlan />
			}

			if (step === StepEnum.ADDONS) {
				return <Addons />
			}

			if (step === StepEnum.SUMMARY) {
				if (progress === "editing") {
					return <Summary />
				}

				return <Finish />
			}

		})()}
	</div>
}

