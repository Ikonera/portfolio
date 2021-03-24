import React, { FunctionComponent } from "react"
import "./master.sass"

import Content from "./Components/Content/content.component"
import Header from "./Components/Header/header.component"
import Footer from "./Components/Footer/footer.component"


const App: FunctionComponent = () =>
{
	return (
		<>
			<Header />
			<Content />
			{/* <Footer /> */}
		</>
	)
}

export default App