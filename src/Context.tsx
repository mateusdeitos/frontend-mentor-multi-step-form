import { createContext, PropsWithChildren, useContext, useReducer } from "react";

type FormType = {
	name: string;
	email: string;
	phone: string;
}

export type ContextState = {
	step: number;
	form: FormType
}

type Action = {
	type: "CHANGE_STEP";
	payload: number;
	formData?: FormType
} | {
	type: "GO_BACK";
}

const reducer = (state: ContextState, action: Action): ContextState => {
	switch (action.type) {
		case "CHANGE_STEP":
			return {
				...state,
				step: 1,
				form: {
					...state.form,
					...action.formData ?? state.form
				}
			}
		case "GO_BACK":
			return {
				...state,
				step: state.step > 0 ? state.step - 1 : 0,
			}
		default:
			return state
	}
}

const context = createContext<[ContextState, React.Dispatch<Action>] | undefined>(undefined);

export const StepContextProvider = ({children}: PropsWithChildren<object>) => {
	const value = useReducer(reducer, {
		step: 0,
		form: {
			name: "",
			email: "",
			phone: "",
		}
	})

	return <context.Provider value={value}>
		{children}
	</context.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useStepContext = () => {
	const _context =  useContext(context);

	if (!_context) {
		throw new Error("useStepContext must be used inside StepContextProvider");
	}

	return _context;
}
