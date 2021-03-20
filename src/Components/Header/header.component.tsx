import React, { FunctionComponent } from "react"
import "./header.component.sass"
import { AppBar } from "@material-ui/core"
// import { Link, BrowserRouter as Router } from "react-router-dom"


const Header: FunctionComponent = () =>
{
	return (
		<AppBar position="static">
			<div>
				<p>
					Header works !
				</p>
			</div>
		</AppBar>
	)
}

export default Header