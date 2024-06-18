import { FunctionComponent } from "preact";
import { ContactLink } from "../ContactLink";
import { useAtomValue } from "jotai";
import { themeAtom } from "../../store/store";

const ContactLine: FunctionComponent = () => {
	const themeValue = useAtomValue(themeAtom);
	return (
		<>
			<div
				id="contacts"
				class={`w-full flex flex-col items-center md:flex-row justify-center py-12 ${themeValue == "light" ? "bg-slate-50" : "bg-[#1A1B26]"}`}
			>
				<ContactLink
					text="Gabriel Millet"
					link="https://linkedin.com/in/gabriel-millet"
					imageSrc="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg"
					color="sky"
				/>
				<ContactLink
					text="Ikonera"
					link="https://github.com/ikonera"
					imageSrc="https://www.vectorlogo.zone/logos/github/github-icon.svg"
					color="red"
				/>
				<ContactLink
					text="gabrielmlt"
					link="mailto:gabrielmlt+portfolio@protonmail.ch"
					imageSrc="https://www.vectorlogo.zone/logos/protonmail/protonmail-icon.svg"
					color="purple"
				/>
			</div>
		</>
	);
};

export { ContactLine };
