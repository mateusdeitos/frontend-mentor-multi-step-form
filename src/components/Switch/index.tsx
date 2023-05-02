import { forwardRef, HTMLProps } from "react";
import styles from "./Switch.module.scss"

type Props = HTMLProps<HTMLInputElement>

export const Switch = forwardRef<HTMLInputElement, Props>((props, ref) => {
	return <label className={styles.switch}>
		<input type="checkbox" {...props} className={styles.checkbox} ref={ref} />
		<span className={styles.slider}></span>
	</label>
});