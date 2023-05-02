import { useForm } from "react-hook-form";
import { useStepContext } from "../../../Context";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from "../../TextInput";
import * as z from "zod"
import styles from "./YourInfo.module.scss"
import { PrimaryButton } from "../../Button";
import { StepEnum } from "../../../enums/StepEnum";

const schema = z.object({
	name: z.string().min(3).max(50),
	email: z.string().email(),
	phone: z.string().min(10).max(15),
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

	return <form className={styles.form} onSubmit={formControl.handleSubmit(onSubmit)}>
		<section className={styles.sectionTitle}>
			<h1 className={styles.title}>Personal info</h1>
			<p className={styles.subTitle}>Please provide your name, email address and phone number.</p>
		</section>

		<section className={styles.sectionInputs}>
			<TextInput label="name" placeholder="e.g. Stephen King" {...formControl.register("name")} />
			<TextInput label="email" placeholder="e.g. stephenking@lorem.com" {...formControl.register("email")} />
			<TextInput label="phone number" placeholder="e.g. +1 234 567 890" {...formControl.register("phone")} />
		</section>

		<section className={styles.sectionFooter}>
			<PrimaryButton type="submit">Next Step</PrimaryButton>
		</section>
	</form>;

};
