import { useStepContext } from "../../Context"
import styles from "./Form.module.scss"
import { YourInfo } from "./YourInfo";


export const Router = () => {
	const [{ step }, dispatch] = useStepContext();
	
	return <div className={styles.container}>
		{(() => {
			if (step === 0) {
				return <YourInfo />
			}
		})()}
	</div>
}

