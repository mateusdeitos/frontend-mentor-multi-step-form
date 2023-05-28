import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {App} from './App'
import { StepContextProvider } from './Context'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <StepContextProvider>
		<App />
	</StepContextProvider>
  </StrictMode>,
)
