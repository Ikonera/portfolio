import { useAtomValue } from "jotai";
import { FunctionComponent } from "preact";
import { themeAtom } from "../../store/store";

type Mission = {
  title: string;
  duration: string;
  text: string;
  link: string;
};

const missions: Mission[] = [
  {
    title: "42c",
    link: "https://www.42c.fr",
    duration: "01/10/2020 - 31/09/2023",
    text: "Conception et implémentation des environnements de développement et production, implémentation du contrôle qualité de code (Husky, git hooks, ESLint, Prettier), mise en place d’outils d’automatisation (Bitbucket Pipelines, IaC), revues de code, conception et implémentation d’une sortie de version (Semantic-release). Conception d’une base de données (DynamoDB), réalisation d’une API Rest (AWS API Gateway - Lambda backed), processus d’extraction de données à des fins statistiques (AWS S3, Glue, Firehose, SQS, Athena).",
  },
  {
    title: "LockSelf",
    link: "https://www.lockself.com",
    duration: "10/10/2023 - 02/02/2024",
    text: "Maintient en condition opérationnelle des équipements internes (clusters K8S, charts Helm), amélioration des pipelines CI/CD (qualité de code, tests unitaires). Mise en place d’une pipeline applicative de remontée de journaux, création de multiples scripts d’automatisation de tâches récurrentes (backups, chiffrement, restauration, PRA), ainsi que de surveillance de quotas en utilisant Bash et Golang.",
  },
  {
    title: "A venir...",
    link: "#",
    duration: "",
    text: "Qui sait ? Ce sera peut-être vous !",
  },
];

const Missions: FunctionComponent = () => {
  const themeValue = useAtomValue(themeAtom);
  return (
    <div
      id="missions"
      class={`w-full py-12 select-none ${themeValue == "light" ? "bg-slate-50" : "bg-[#1A1B26]"}`}
    >
      {missions.map(({ title, duration, text, link }: Mission, idx: number) => (
        <div
          class="flex flex-col lg:flex-row sm:items-center lg:justify-between mb-8 lg:items-baseline"
          key={idx}
        >
          <div class="relative z-10 mb-10 lg:w-1/4 text-center">
            <a
              href={link}
              target="_blank"
              class={`font-display font-black text-2xl md:text-sm lg:text-base ${themeValue == "light" ? "text-black" : "text-slate-200"}`}
            >
              {title}
            </a>
            <p
              class={`font-body italic text-lg md:text-sm lg:text-base ${themeValue == "light" ? "text-black" : "text-slate-200"}`}
            >
              {duration}
            </p>
            {idx != missions.length - 1 && (
              <div
                class={`absolute left-1/2 h-8 md:h-8 lg:h-20 xl:h-16 border ${themeValue == "light" ? "border-blue-300" : "border-green-300"} transform md:translate-y-1 lg:translate-y-2`}
              ></div>
            )}
          </div>
          <div class="w-full px-6">
            <p
              class={`font-body text-center md:px-8 md:text-sm lg:text-left lg:text-base lg:pr-10 ${themeValue == "light" ? "text-black" : "text-slate-200"}`}
            >
              {text}
            </p>
          </div>
        </div>
      ))}
      <div class="container mx-auto w-max mt-16">
        <a
          class={`rounded-lg py-2 px-4 bg-purple-600 font-black text-white md:text-sm lg:text-base`}
          href="/Gabriel-Millet_Devops.pdf"
        >
          Téléchargez mon CV !
        </a>
      </div>
    </div>
  );
};

export { Missions };
