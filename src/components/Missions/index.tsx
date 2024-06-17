import { useAtomValue } from "jotai";
import { FunctionComponent } from "preact";
import { themeAtom } from "../../store/store";

const Missions: FunctionComponent = () => {
	const themeValue = useAtomValue(themeAtom);
	return (
		<div
			id="missions"
			class={`py-12 select-none ${themeValue == "light" ? "bg-slate-50" : "bg-[#1A1B26]"}`}
		>
			<div class="flex sm:flex-col sm:items-center justify-between mb-8 items-baseline">
				<div class="relative z-10 sm:w-max sm:mb-10 w-1/4 text-center">
					<a
						href="https://www.42c.fr"
						target="_blank"
						class={`font-display font-black md:text-sm lg:text-base ${themeValue == "light" ? "text-black" : "text-slate-200"}`}
					>
						42c
					</a>
					<p
						class={`font-body italic sm:text-center md:text-sm lg:text-base ${themeValue == "light" ? "text-black" : "text-slate-200"}`}
					>
						01/10/2020 - 31/09/2023
					</p>
					<div
						class={`absolute left-1/2 sm:h-8 md:h-16 lg:h-12 border ${themeValue == "light" ? "border-blue-300" : "border-green-300"} transform translate-y-1`}
					></div>
				</div>
				<div class="w-9/12">
					<p
						class={`font-body sm:text-center md:text-sm lg:text-base ${themeValue == "light" ? "text-black" : "text-slate-200"}`}
					>
						Conception et implémentation des environnements de développement et
						production, implémentation du contrôle qualité de code (Husky, git
						hooks, ESLint, Prettier), mise en place d’outils d’automatisation
						(Bitbucket Pipelines, IaC), revues de code, conception et
						implémentation d’une sortie de version (Semantic-release).
						Conception d’une base de données (DynamoDB), réalisation d’une API
						Rest (AWS API Gateway - Lambda backed), processus d’extraction de
						données à des fins statistiques (AWS S3, Glue, Firehose, SQS,
						Athena).
					</p>
				</div>
			</div>
			<div class="flex sm:flex-col sm:items-center justify-between mb-8 items-baseline">
				<div class="relative z-10 sm:w-max sm:mb-10 w-1/4 text-center">
					<a
						href="https://www.lockself.com/"
						target="_blank"
						class={`font-display font-black md:text-sm lg:text-base ${themeValue == "light" ? "text-black" : "text-slate-200"}`}
					>
						LockSelf
					</a>
					<p
						class={`font-body italic md:text-sm lg:text-base ${themeValue == "light" ? "text-black" : "text-slate-200"}`}
					>
						10/10/2023 - 02/02/2024
					</p>
					<div
						class={`absolute left-1/2 sm:h-8 md:h-16 lg:h-9 border ${themeValue == "light" ? "border-blue-300" : "border-green-300"} transform translate-y-1`}
					></div>
				</div>
				<p
					class={`w-9/12 font-body sm:text-center md:text-sm lg:text-base ${themeValue == "light" ? "text-black" : "text-slate-200"}`}
				>
					Maintient en condition opérationnelle des équipements internes
					(clusters K8S, charts Helm), amélioration des pipelines CI/CD (qualité
					de code, tests unitaires). Mise en place d’une pipeline applicative de
					remontée de journaux, création de multiples scripts d’automatisation
					de tâches récurrentes (backups, chiffrement, restauration, PRA), ainsi
					que de surveillance de quotas en utilisant Bash et Golang.
				</p>
			</div>
			<div class="flex sm:flex-col sm:items-center justify-between items-baseline">
				<div class="relative z-10 sm:w-max sm:mb-10 w-1/4 text-center">
					<div class="">
						<p
							class={`font-display font-black md:text-sm lg:text-base ${themeValue == "light" ? "text-black" : "text-slate-200"}`}
						>
							A venir...
						</p>
					</div>
				</div>
				<p
					class={`w-9/12 font-body sm:text-center md:text-sm lg:text-base ${themeValue == "light" ? "text-black" : "text-slate-200"}`}
				>
					Qui sait ? Ce sera peut-être vous !
				</p>
			</div>
			<div class="container mx-auto w-max mt-16">
				<button
					class={`rounded-lg border py-2 px-4 border-purple-600 bg-purple-600 text-slate-200 md:text-sm lg:text-base`}
				>
					Téléchargez mon CV !
				</button>
			</div>
		</div>
	);
};

export { Missions };
