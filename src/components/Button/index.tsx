import styles from "./Button.module.scss"

export const PrimaryButton = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	return <button 
		className={styles.primary}
		{...props}
	>
		{children}
	</button>
}