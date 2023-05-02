import { FormEvent, forwardRef, HTMLProps } from "react";
import styles from "./Checkbox.module.scss"

export const Checkbox = forwardRef<HTMLInputElement, HTMLProps<HTMLInputElement>>((props, ref) => {
	return <label className={styles.container}
		onClick={(e) => {
			if (props.onChange) {
				props?.onChange?.(e as unknown as FormEvent<HTMLInputElement>);
			}
		}}
	>
		<input type="checkbox" {...props} className={styles.checkbox} ref={ref} />
		<span className={styles.checkmark}></span>
	</label>
})