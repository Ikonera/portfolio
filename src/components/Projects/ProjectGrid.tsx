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
      class={`grid grid-rows-2 border border-gray-300 max-w-md p-4 rounded ${themeValue == "light" ? "shadow-blue-300 shadow-md bg-slate-200" : "shadow-green-300 shadow-md bg-[#252736]"}`}
    >
      <a
        class={`font-display underline font-bold text-lg mt-1 w-full h-max ${themeValue == "light" ? "text-black" : "text-slate-200"}`}
        href={link}
        target="_blank"
      >
        {title}
      </a>
      <p
        class={`font-body select-none ${themeValue == "light" ? "text-slate-500" : "text-slate-300"}`}
      >
        {description}
      </p>
      <img
        class="bg-slate-200 w-full aspect-video rounded-lg"
        src="/devops-illustration.svg"
      />
    </div>
  );
};

export { ProjectGrid, type Project };
