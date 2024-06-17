import { useAtomValue } from "jotai";
import { FunctionComponent } from "preact";
import { themeAtom } from "../../store/store";

const menuLinks: { key: string; value: string }[] = [
  {
    key: "learning-path",
    value: "Mon parcours",
  },
  {
    key: "languages",
    value: "Langages",
  },
  {
    key: "missions",
    value: "Missions réalisées",
  },
  {
    key: "projects",
    value: "Mes projets",
  },
  {
    key: "contacts",
    value: "Me contacter",
  },
];

const Menu: FunctionComponent = () => {
  const themeValue = useAtomValue(themeAtom);
  return (
    <div
      class={`py-4 z-50 shadow drop-shadow-lg flex justify-around items-baseline ${themeValue == "light" ? "bg-slate-200" : "bg-[#1A1B26]"}`}
    >
      {menuLinks.map((link: { key: string; value: string }, idx: number) => (
        <a
          href={`#${link.key}`}
          key={idx}
          class={`${link.key == "contacts" && "bg-[#B35CE2] py-2 px-4 text-slate-200 rounded-lg"} ${themeValue == "light" ? "text-black" : "text-slate-200"}`}
        >
          {link.value}
        </a>
      ))}
    </div>
  );
};

export { Menu };
