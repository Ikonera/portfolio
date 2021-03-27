import React, { FunctionComponent } from "react"
import path from "path"
import "./projectspage.component.sass"
import { Grid, Button, Typography } from "@material-ui/core"

// ? Image imports
import PhpLogo from "Assets/Images/php-brands.svg"
// import NodeLogo from "Assets/Images/node-js-brands.svg"
import Image from "Assets/Images/screen-test.png"


const ProjectsPage: FunctionComponent = () =>
{
	const openGit = () =>
	{
		window.open("https://github.com/Ikonera/Blog_e2", "_blank")
	}

	return (
		<section>
			<Grid container justify="center" id="titleGrid">
				<h2>Mes projets</h2>
			</Grid>
			
			<Grid container wrap="wrap" justify="center" style={{ gap: 45 }} className="cc">
				<Grid container item className="projectPresentingGrid" xs={3} >
					<Grid container item justify="space-between" alignItems="center" className="projectGridHeader">
						<h3>Blog e2</h3>
						<img src={PhpLogo} alt="PHP Logo" className="languageLogo" />
					</Grid>
					<Grid item>
						<img src={Image} alt="Screen test" className="projectImage" />
					</Grid>
					<Grid item container direction="column">
						<p className="projectDescription">
							Le but de ce projet était de créer un petit blog en PHP orienté objet qui contienne les fonctionnalités CRUD de base.
						</p>
					</Grid>
					<Grid item container direction="row" className="projectActions">
						<Grid item container justify="space-evenly">
							<Button color="primary">
								Aller tester le site
							</Button>
							<Button onClick={openGit} color="primary">
								Le projet Git
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			
		</section>
	)
}

export default ProjectsPage