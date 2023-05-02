import { ContextState } from "../Context";

export type TAddon = {
	title: string;
	info: string;
	price: Record<ContextState["form"]["billing"], number>
}

export const addons = {
	"online_service": {
		title: "Online Service",
		info: "Access to multiplayer games",
		price: {
			"monthly": 1,
			"yearly": 10
		}
	},
	"larger_storage": {
		title: "Larger Storage",
		info: "Extra 1TB of cloud save",
		price: {
			"monthly": 2, 
			"yearly": 20
		}
	},
	"customizable_profile": {
		title: "Customizable Profile",
		info: "Cusom theme on your profile",
		price: {
			"monthly": 2, 
			"yearly": 20
		}
	}
}