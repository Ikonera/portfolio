import React, { FunctionComponent } from "react"
import { NavLink } from "react-router-dom"

const Navigation: FunctionComponent = () =>
{
    return (
        <>
            <NavLink to="/">Home</NavLink>
			<NavLink to="/contact">Contact</NavLink>
			<NavLink to="/projects">Projects</NavLink>
        </>
    )
}

export default Navigation