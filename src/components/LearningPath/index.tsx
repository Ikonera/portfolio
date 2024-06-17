import { FunctionComponent } from "preact";
import { FormationStep } from "./FormationStep";
import { useState } from "preact/hooks";
import { useAtomValue } from "jotai";
import { themeAtom } from "../../store/store";

type LearningPath = {
	title: string;
	description: string;
	text: string;
	duration: string;
};

const learningPaths: LearningPath[] = [
	{
		title: "Autodidacte",
		description: "Mes débuts avec l'informatique.",
		text: "Je suis un développeur autodidacte depuis maintenant 9 ans. Cette passion a entrainé une soif de connaissances qui fait de moi quelqu'un de très polyvalent, manipulant à la fois le développement, la partie système et les pratiques DevSecOps.",
		duration: "5 ans",
	},
	{
		title: "Etudes",
		description: "Mon cursus en études supérieures.",
		text: "In tincidunt enim gravida enim molestie rutrum. Curabitur eu sapien vel lacus commodo ullamcorper non non eros. Sed tincidunt tincidunt libero, eget condimentum odio auctor id. Donec dignissim orci et arcu mollis finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus convallis dui non rhoncus iaculis. Proin nec est purus. Etiam interdum nisi libero, a sollicitudin purus tempus a. Nullam a dolor quis nibh blandit pharetra. Curabitur gravida volutpat dui eu placerat. Pellentesque dignissim ligula eu nunc malesuada, id eleifend libero finibus. Donec iaculis condimentum erat. Aliquam feugiat commodo massa, in vulputate purus pharetra vel. Fusce quam felis, sodales mattis risus sagittis, fermentum pharetra nunc. Nunc pellentesque elit at lorem accumsan cursus. Praesent quis lacus lobortis, pharetra erat non, dapibus sem.",
		duration: "4 ans",
	},
	{
		title: "Alternance",
		description: "Mon alternance au sein de 42c.",
		text: "In tincidunt enim gravida enim molestie rutrum. Curabitur eu sapien vel lacus commodo ullamcorper non non eros. Sed tincidunt tincidunt libero, eget condimentum odio auctor id. Donec dignissim orci et arcu mollis finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus convallis dui non rhoncus iaculis. Proin nec est purus. Etiam interdum nisi libero, a sollicitudin purus tempus a. Nullam a dolor quis nibh blandit pharetra. Curabitur gravida volutpat dui eu placerat. Pellentesque dignissim ligula eu nunc malesuada, id eleifend libero finibus. Donec iaculis condimentum erat. Aliquam feugiat commodo massa, in vulputate purus pharetra vel. Fusce quam felis, sodales mattis risus sagittis, fermentum pharetra nunc. Nunc pellentesque elit at lorem accumsan cursus. Praesent quis lacus lobortis, pharetra erat non, dapibus sem.",
		duration: "3 ans",
	},
	{
		title: "Formation EQL DevOps",
		description: "Trois mois intense au sein de l'Ecole de Qualité Logicielle.",
		text: "In tincidunt enim gravida enim molestie rutrum. Curabitur eu sapien vel lacus commodo ullamcorper non non eros. Sed tincidunt tincidunt libero, eget condimentum odio auctor id. Donec dignissim orci et arcu mollis finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus convallis dui non rhoncus iaculis. Proin nec est purus. Etiam interdum nisi libero, a sollicitudin purus tempus a. Nullam a dolor quis nibh blandit pharetra. Curabitur gravida volutpat dui eu placerat. Pellentesque dignissim ligula eu nunc malesuada, id eleifend libero finibus. Donec iaculis condimentum erat. Aliquam feugiat commodo massa, in vulputate purus pharetra vel. Fusce quam felis, sodales mattis risus sagittis, fermentum pharetra nunc. Nunc pellentesque elit at lorem accumsan cursus. Praesent quis lacus lobortis, pharetra erat non, dapibus sem.",
		duration: "3 mois",
	},
];

const LearningPath: FunctionComponent = () => {
	const [selected, setSelected] = useState(0);
	const themeValue = useAtomValue(themeAtom);

	return (
		<div
			id="learning-path"
			class={`grid grid-cols-2 py-12 px-4 ${themeValue == "light" ? "bg-slate-50" : "bg-[#1A1B26]"}`}
		>
			<div>
				{learningPaths.map((path: LearningPath, idx: number) => (
					<FormationStep
						title={path.title}
						description={path.description}
						duration={path.duration}
						selected={selected == idx}
						key={idx}
						onClick={() => setSelected(idx)}
					/>
				))}
			</div>
			<div
				class={`border rounded p-4 select-none shadow-md ${themeValue == "light" ? "bg-slate-200" : "bg-[#252736]"}`}
			>
				<p
					class={`md:text-sm lg:text-lg ${themeValue == "light" ? "text-black" : "text-slate-200"}`}
				>
					{learningPaths[selected].text}
				</p>
			</div>
		</div>
	);
};

export { LearningPath };
