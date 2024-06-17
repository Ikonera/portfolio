import { atom } from "jotai";

const themeAtom = atom<"light" | "dark">("light");

export { themeAtom };
