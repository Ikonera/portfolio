import React, { FunctionComponent } from "react"
import "./master.sass"
import "@material-ui/core"
import Header from "./Components/Header/header.component"
// import Footer from "./Components/Footer/footer.component"
// import Content from "./Components/Content/content.component"
import { Link, BrowserRouter, Switch, Route } from "react-router-dom"
import ProjectsPage from "./Components/ProjectsPage/projectspage.component"
import ContactPage from "./Components/ContactPage/contactpage.component"
import HomePage from "./Components/HomePage/homepage.component"
import Navigation from "./Components/Navigation/navigation.component"


const App: FunctionComponent = () =>
{
	return (
		<BrowserRouter>
			<Navigation />

			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/projects" component={ProjectsPage} />
				<Route exact path="/contact" component={ContactPage} />
			</Switch>
		</BrowserRouter>
	)
}

export default App