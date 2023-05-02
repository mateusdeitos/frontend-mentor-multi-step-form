import { ContextState } from "../Context";

export type TPlan = {
	name: string;
	price: Record<ContextState["form"]["billing"], number>
}

export const plans: Record<ContextState["form"]["plan"], TPlan> = {
	arcade: {
		name: 'Arcade',
		price: {
			monthly: 9,
			yearly: 90,
		}
	},
	advanced: {
		name: 'Advanced',
		price: {
			monthly: 12,
			yearly: 120,
		}
	},
	pro: {
		name: 'Pro',
		price: {
			monthly: 15,
			yearly: 150,
		}
	}
}