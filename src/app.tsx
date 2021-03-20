import React, { FunctionComponent } from "react"
import "./master.sass"

import Content from "./Components/Content/content.component"
import Header from "./Components/Header/header.component"


const App: FunctionComponent = () =>
{
	return (
		<>
			<Header />
			<Content />
		</>
	)
}

export default App