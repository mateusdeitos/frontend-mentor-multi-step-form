import { forwardRef, HTMLProps } from "react";
import styles from "./TextInput.module.scss"

type Props = HTMLProps<HTMLInputElement> & {
	label: string
	error?: string
}

export const TextInput = forwardRef<HTMLInputElement, Props>(({error, ...props}, ref) => {
	return <div className={styles.inputGroup}>
		<label className={styles.label} htmlFor={props.id}>
			{props.label}
			{!!error && <p className={styles.error}>{error}</p>}
		</label>
		<input type="text" {...props} className={styles.input} ref={ref} />
	</div>
});