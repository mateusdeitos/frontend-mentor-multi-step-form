import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { StepContextProvider } from './Context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StepContextProvider>
		<App />
	</StepContextProvider>
  </React.StrictMode>,
)
