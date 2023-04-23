import { forwardRef, HTMLProps } from "react";
import styles from "./TextInput.module.scss"

type Props = HTMLProps<HTMLInputElement> & {
	label: string;
}

export const TextInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
	return <div className={styles.inputGroup}>
		<label className={styles.label} htmlFor={props.id}>{props.label}</label>
		<input type="text" {...props} className={styles.input} ref={ref} />
	</div>
});