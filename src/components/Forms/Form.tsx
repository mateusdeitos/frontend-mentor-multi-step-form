
import { FormEventHandler, PropsWithChildren } from "react";
import commomStyles from "./Commom.module.scss"

type Props = PropsWithChildren<{
	title: string;
	subTitle: string;
	onSubmit: FormEventHandler<HTMLFormElement>;
}>;

export const Form = ({children, title, onSubmit, subTitle}: Props) => {
	return <form className={commomStyles.form} onSubmit={onSubmit}>
		<section className={commomStyles.sectionTitle}>
			<h1 className={commomStyles.title}>{title}</h1>
			<p className={commomStyles.subTitle}>{subTitle}</p>
		</section>
		{children}
	</form>;
}