import { FunctionComponent } from "preact";
import { ProjectGrid, type Project } from "./ProjectGrid";
import { useAtomValue } from "jotai";
import { themeAtom } from "../../store/store";

const projects: Project[] = [
	{
		title: "Terakube",
		description:
			"Déployer un cluster Kubernetes automatisé avec Terraform et Ansible.",
		img: "/Terakube.svg",
		link: "https://www.github.com/ikovops/terakube",
	},
	{
		title: "AnsibleDTF",
		description: "Automatisation de mes dotfiles Linux et MacOS avec Ansible.",
		img: "/AnsibleDTF.svg",
		link: "https://www.github.com/ikovops/ansible_dtf",
	},
];

const Projects: FunctionComponent = () => {
	const themeValue = useAtomValue(themeAtom);
	return (
		<div
			id="projects"
			class={`w-full py-12 ${themeValue == "light" ? "bg-slate-200" : "bg-[#252736]"}`}
		>
			<div class="grid grid-cols-1 gap-y-6 md:grid-cols-3 lg:grid-cols-3 md:gap-x-16 md:gap-y-8 lg:gap-x-8 lg:gap-y-4 ">
				{projects.map(({ title, description, img, link }: Project) => (
					<ProjectGrid
						title={title}
						description={description}
						img={img}
						link={link}
					/>
				))}
			</div>
		</div>
	);
};

export { Projects };
