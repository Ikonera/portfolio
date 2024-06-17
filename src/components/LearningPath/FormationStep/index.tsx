import { useAtomValue } from "jotai";
import { FunctionComponent } from "preact";
import { themeAtom } from "../../../store/store";

const FormationStep: FunctionComponent<{
	title: string;
	description: string;
	duration: string;
	selected: boolean;
	onClick: Function;
}> = ({ title, description, duration, selected, onClick }) => {
	const themeValue = useAtomValue(themeAtom);
	return (
		<div
			onClick={() => onClick()}
			class={`group rounded ${selected && "shadow-md"} ${themeValue == "light" ? "bg-slate-200 shadow-blue-300 hover:shadow-blue-300 border-blue-300" : "bg-[#252736] shadow-green-300 hover:shadow-green-300 border-green-300"} hover:shadow-md cursor-pointer border mb-6 mr-4 p-2 select-none`}
		>
			<p
				class={`font-display font-bold md:text-lg lg:text-2xl ${themeValue == "light" ? "text-black" : "text-slate-200"} ${selected && "translate-x-4"} transition-transform group-hover:transform group-hover:translate-x-4`}
			>
				{title}
			</p>
			<p
				class={`font-body md:text-sm ${themeValue == "light" ? "text-slate-500" : "text-slate-300"} italic`}
			>
				{description}
			</p>
			<p
				class={`font-body md:text-sm ${themeValue == "light" ? "text-black" : "text-slate-200"}`}
			>
				{duration}
			</p>
		</div>
	);
};

export { FormationStep };
