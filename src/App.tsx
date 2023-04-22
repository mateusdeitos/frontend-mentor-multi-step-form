import './global.scss'
import { Sidebar } from './components/Sidebar/Sidebar'
import styles from "./App.module.scss"
import { useState } from 'react';

const steps = [
	"Your info",
	"Select plan",
	"Add-ons",
	"Summary",
];

function App() {
	const [activeStepIndex, setActiveStepIndex] = useState(0);
  return (
    <div className={styles.app}>
		<Sidebar
		steps={steps}
		activeStepIndex={activeStepIndex} 
		onChangeStep={setActiveStepIndex}
		/>
	</div>
  )
}

export default App
