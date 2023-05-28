import './global.scss'
import { Sidebar } from './components/Sidebar/Sidebar'
import styles from "./App.module.scss"
import { Router } from './components/Forms/Router';
import { steps } from './data/steps';

export function App() {
	return (
		<main className={styles.app}>
			<Sidebar steps={steps} />
			<Router />
		</main>
	)
}
