import { ContactLine } from "./components/ContactLine";
import { LearningPath } from "./components/LearningPath";
import { HeroHeader } from "./components/HeroHeader";
import { Missions } from "./components/Missions";
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";
import { Menu } from "./components/Menu";

export function App() {
  return (
    <>
      <Menu />
      <HeroHeader />
      <LearningPath />
      <Technologies />
      <Missions />
      <Projects />
      <ContactLine />
    </>
  );
}
