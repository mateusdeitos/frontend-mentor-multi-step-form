import { useForm } from "react-hook-form";
import { useStepContext } from "../../../Context";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from "../../TextInput";
import * as z from "zod"
import styles from "./YourInfo.module.scss"
import commomStyles from "../Commom.module.scss"
import { PrimaryButton } from "../../Button";
import { StepEnum } from "../../../enums/StepEnum";
import { Form } from "../Form";

const schema = z.object({
	name: z.string().nonempty("this field is required").min(3, "the name must have at least 3 characters").max(50, "the name must be less than 50 characters"),
	email: z.string().nonempty("this field is required").email("invalid email"),
	phone: z.string().nonempty("this field is required").min(10, "the phone number must have at least 10 characters").max(20, "the phone number must be less than 20 characters"),
});

export const YourInfo = () => {
	const [{ form }, dispatch] = useStepContext();
	const formControl = useForm<typeof form>({
		resolver: zodResolver(schema),
		defaultValues: {
			name: form.name,
			email: form.email,
			phone: form.phone,
		}
	});

	const onSubmit = (formData: typeof form) => {
		dispatch({
			type: "CHANGE_STEP",
			payload: StepEnum.SELECT_PLAN,
			formData
		});
	}

	return <Form 
		onSubmit={formControl.handleSubmit(onSubmit)}
		title="Personal info"
		subTitle="Please provide your name, email address and phone number."
	>
		<section className={styles.sectionInputs}>
			<TextInput
				label="name"
				placeholder="e.g. Stephen King"
				{...formControl.register("name")}
				error={formControl.formState.errors?.name?.message}
			/>
			<TextInput
				label="email"
				placeholder="e.g. stephenking@lorem.com"
				{...formControl.register("email")}
				error={formControl.formState.errors?.email?.message}
			/>
			<TextInput
				label="phone number"
				placeholder="e.g. +1 234 567 890"
				{...formControl.register("phone")}
				error={formControl.formState.errors?.phone?.message}
			/>
		</section>

		<section className={commomStyles.sectionFooter}>
			<PrimaryButton type="submit">Next Step</PrimaryButton>
		</section>
	</Form>;

};
