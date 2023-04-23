import './global.scss'
import { Sidebar } from './components/Sidebar/Sidebar'
import styles from "./App.module.scss"
import { Router } from './components/Forms/Form';

const steps = [
	"Your info",
	"Select plan",
	"Add-ons",
	"Summary",
];

function App() {
	return (
		<main className={styles.app}>
			<Sidebar steps={steps} />
			<Router />
		</main>
	)
}

export default App
