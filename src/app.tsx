import { ContactLine } from "./components/ContactLine";
import { LearningPath } from "./components/LearningPath";
import { HeroHeader } from "./components/HeroHeader";
import { Missions } from "./components/Missions";
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";

export function App() {
	return (
		<>
			<HeroHeader />
			<LearningPath />
			<Technologies />
			<Missions />
			<Projects />
			<ContactLine />
		</>
	);
}
