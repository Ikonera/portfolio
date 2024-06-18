import { FunctionComponent } from "preact";
import { Divider } from "../Divider";
import { themeAtom } from "../../store/store";
import { useAtomValue, useSetAtom } from "jotai";

const HeroHeader: FunctionComponent = () => {
	const themeValue = useAtomValue(themeAtom);
	const setTheme = useSetAtom(themeAtom);

	return (
		<div
			class={`w-full py-12 flex flex-col lg:flex-row justify-around items-center ${themeValue == "light" ? "bg-slate-50" : "bg-[#1A1B26]"}`}
		>
			<div class="h-max select-none">
				<p
					class={`font-display text-5xl md:text-2xl lg:text-5xl ${themeValue == "light" ? "text-black" : "text-slate-200"}`}
				>
					Gabriel Millet
				</p>
				<Divider />
				<p
					class={`font-body text-center text-xl md:text-base lg:text-2xl ${themeValue == "light" ? "text-black" : "text-slate-200"}`}
				>
					Site CV
				</p>
				<div class="container mx-auto w-max mt-10">
					<label class="inline-flex items-center cursor-pointer">
						<input
							type="checkbox"
							value={themeValue}
							class="sr-only peer"
							onChange={() =>
								themeValue == "light" ? setTheme("dark") : setTheme("light")
							}
						/>
						<div
							class={`relative w-11 h-6 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 bg-[#F8D624] peer-checked:bg-[#41A2FB]`}
						></div>
						<span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
							{themeValue == "light" ? (
								<img src="/sun.svg" alt="Light mode" class="w-6" />
							) : (
								<img src="/moon.svg" alt="Light mode" class="w-6" />
							)}
						</span>
					</label>
				</div>
			</div>
			<img
				src="/devops-illustration.svg"
				alt="hero-banner"
				class="w-3/4 md:w-1/2 mt-14"
			/>
		</div>
	);
};

export { HeroHeader };
