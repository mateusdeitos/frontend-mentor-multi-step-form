import styles from "./Button.module.scss"

export const PrimaryButton = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	return <button 
		className={styles.primary}
		{...props}
	>
		{children}
	</button>
}

export const SecondaryButton = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	return <button 
		className={styles.secondary}
		{...props}
	>
		{children}
	</button>
}

export const LinkButton = ({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
	const classes = [styles.link];
	if (props.className) {
		classes.push(props.className);
	}
	return <a 
		{...props}
		className={classes.join(" ")}
	>
		{children}
	</a>
}