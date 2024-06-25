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
		text: "J'ai débuté mon parcours à l'ESTIAM en Octobre 2019. Durant ces quatre années d'études j'ai pu renforcer mes compétences en développement web et mobile, architecture logicielle et pratiques en entreprise au travers de différents projets, ce qui m'a énormément apporté pour mon alternance.",
		duration: "4 ans",
	},
	{
		title: "Alternance",
		description: "Mon alternance au sein de 42c.",
		text: "Rattaché au pôle 42c-Lab, j'ai pu contribuer à de nombreux projets pour des clients du secteur des médias et audiovisuel, parmis lesquels je peux citer la Popup Channel By... et Pix.T, mais aussi des projets internes comme l'élaboration d'une documentation technique sur la conteneurisation avec Docker et Kubernetes destinée à la montée en compétence de l'équipe du Lab, le Backoffice IT pour la simplification des tâches d'administration Windows Active Directory, ou encore ChimeToRTMPS, un POC sur la sortie RTMPS du service AWS Chime.",
		duration: "3 ans",
	},
	{
		title: "Formation EQL DevOps",
		description: "Trois mois intense au sein de l'Ecole de Qualité Logicielle.",
		text: "Actualisation : 10 Août 2024.",
		duration: "3 mois",
	},
];

const LearningPath: FunctionComponent = () => {
	const [selected, setSelected] = useState(0);
	const themeValue = useAtomValue(themeAtom);

	return (
		<div
			id="learning-path"
			class={`py-12 ${themeValue == "light" ? "bg-slate-50" : "bg-[#1A1B26]"}`}
		>
			{learningPaths.map((path: LearningPath, idx: number) => (
				<div key={idx}>
					<FormationStep
						title={path.title}
						description={path.description}
						duration={path.duration}
						selected={selected == idx}
						onClick={() => setSelected(idx)}
					/>
					<div
						class={`container mx-auto w-11/12 border rounded p-4 mb-6 select-none shadow-md ${themeValue == "light" ? "bg-slate-200" : "bg-[#252736]"} ${idx != selected && "hidden"}`}
					>
						<p
							class={`md:text-sm lg:text-lg ${themeValue == "light" ? "text-black" : "text-slate-200"}`}
						>
							{path.text}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export { LearningPath };
