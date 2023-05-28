import { createContext, PropsWithChildren, useContext, useReducer } from "react";
import { StepEnum } from "./enums/StepEnum";

type FormType = {
	name: string;
	email: string;
	phone: string;
	plan: "arcade" | "advanced" | "pro";
	billing: "monthly" | "yearly";
	addons: Record<string, boolean>
}

export type ContextState = {
	step: typeof StepEnum[keyof typeof StepEnum];
	form: FormType
	progress: "editing" | "finished"
}

type Action = {
	type: "CHANGE_STEP";
	payload: ContextState["step"];
	formData?: FormType
} | {
	type: "GO_BACK";
} | {
	type: "FINISH"
}

const reducer = (state: ContextState, action: Action): ContextState => {
	switch (action.type) {
		case "CHANGE_STEP":
			return {
				...state,
				step: action.payload,
				form: {
					...state.form,
					...action.formData ?? state.form
				}
			}
		case "GO_BACK":
			return {
				...state,
				step: state.step > 0 ? state.step - 1 as ContextState["step"] : StepEnum.YOUR_INFO,
			}
		case "FINISH":
			return {
				...state,
				progress: "finished"
			}
		default:
			return state
	}
}

const context = createContext<[ContextState, React.Dispatch<Action>] | undefined>(undefined);

const initialState: ContextState = {
	progress: "editing",
	step: StepEnum.YOUR_INFO,
	form: {
		addons: {},
		name: "",
		email: "",
		phone: "",
		plan: "arcade",
		billing: "monthly",
	}
}

export const StepContextProvider = ({children}: PropsWithChildren<object>) => {
	const value = useReducer(reducer, initialState)

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
