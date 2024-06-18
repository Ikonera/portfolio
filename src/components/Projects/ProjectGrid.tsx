import { useAtomValue } from "jotai";
import { FunctionComponent } from "preact";
import { themeAtom } from "../../store/store";

type Project = {
	title: string;
	description: string;
	img: string;
	link: string;
};

const ProjectGrid: FunctionComponent<Project> = ({
	title,
	description,
	link,
}) => {
	const themeValue = useAtomValue(themeAtom);
	return (
		<div
			class={`flex flex-col border border-gray-300 w-2/3 mx-auto md:w-48 lg:w-64 p-4 rounded ${themeValue == "light" ? "shadow-blue-300 shadow-md bg-slate-50" : "shadow-green-300 shadow-md bg-[#252736]"}`}
		>
			<a
				class={`font-display underline font-bold text-xl md:text-sm lg:text-lg mt-1 w-full h-max ${themeValue == "light" ? "text-black" : "text-slate-200"}`}
				href={link}
				target="_blank"
			>
				{title}
			</a>
			<p
				class={`font-body select-none py-4 md:text-sm lg:text-base ${themeValue == "light" ? "text-slate-500" : "text-slate-300"}`}
			>
				{description}
			</p>
			<img class="aspect-video rounded-lg" src="/devops-illustration.svg" />
		</div>
	);
};

export { ProjectGrid, type Project };
