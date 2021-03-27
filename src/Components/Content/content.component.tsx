import React, { FunctionComponent } from "react"
import {  Switch, Route } from "react-router-dom"

import ContactPage from "../ContactPage/contactpage.component"
import HomePage from "../HomePage/homepage.component"
import ProjectsPage from "../ProjectsPage/projectspage.component"
import InBuild from "../InBuild/inbuild.component"

const Content: FunctionComponent = () =>
{
	return (
		<Switch>
			<Route exact path='/' component={InBuild} />
			<Route exact path="/projects" component={ProjectsPage} />
			<Route exact path="/contact" component={ContactPage} />
		</Switch>
	)
}

export default Content