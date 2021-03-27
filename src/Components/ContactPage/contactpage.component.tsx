import React, { FunctionComponent, useRef } from "react"
import { Button, Grid } from "@material-ui/core"
import "./contactpage.component.sass"

import LinkedInLogo from "Assets/Images/linkedin-brands.svg"
import MailLogo from "Assets/Images/envelope-open-text-solid.svg"

const ContactPage: FunctionComponent = () =>
{

	const LinkedInAction = () =>
	{
		window.open("https://fr.linkedin.com/in/gabriel-millet", "_blank")
	}

	const MailAction = () =>
	{
		window.open("mailto:gabrielmlt@protonmail.ch")
	}

	return (
		<section>
			<Grid container justify="center" id="titleGrid">
				<h2>Me contacter</h2>
			</Grid>

			<Grid container className="co" justify="center">
				<Grid item container>
					<form>
						<div className="formContactDiv">
							<input type="email" id="formContactMailAdress" className="formContactInput" required />
							<label htmlFor="formContactMailAdress" className="formContactLabel" >Adresse mail</label>
						</div>
						<div className="formContactDiv">
							<textarea name="" id="formContactMessage" cols={80} rows={10} className="formContactInput" required></textarea>
							<label htmlFor="formContactMessage" className="formContactLabel" >Votre message</label>
						</div>
						<Button color="secondary">
							<p>Envoyer !</p>
						</Button>
					</form>
					<Grid item container direction="row" justify="space-evenly" id="contactWays">
						<Grid item>
							<img src={LinkedInLogo} alt="LinkedIn" width={50} height={50} onClick={LinkedInAction} />
						</Grid>
						<Grid item>
							<img src={MailLogo} alt="Protonmail" width={50} height={50} onClick={MailAction} />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</section>
	)
}

export default ContactPage