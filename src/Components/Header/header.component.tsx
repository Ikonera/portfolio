import React, { FunctionComponent } from "react"
import "./header.component.sass"
import { AppBar } from "@material-ui/core"
import { Link } from "react-router-dom"

const Header: FunctionComponent = () =>
{
	return (
		<AppBar position="static" color="primary">
			<header>
				<div>
					<h2>
						Gabriel MILLET
					</h2>
				</div>
				<nav>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
				</nav>
			</header>
		</AppBar>
	)
}

export default Header