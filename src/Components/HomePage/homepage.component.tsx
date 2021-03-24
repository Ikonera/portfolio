import React, { FunctionComponent } from "react"
import "./homepage.component.sass"
import { Grid } from "@material-ui/core"

const HomePage: FunctionComponent = () =>
{
	return (
		<section>
			<Grid container>
				<Grid item container>
					<div>
						<p>
							Je m'appelle Gabriel, j'ai 19 ans et je suis autodidacte dans le milieu du développement web depuis près de sept ans.
						</p>
						<p>
						A 13 ans, j'étais en cinquième déjà en train de me questionner sur ce que je voudrais faire plus tard. Le métier de sage-femme m'a fait réféchir durant quelques mois quand-même, mais sans plus.
						</p>
						<p>
						Au cours d'un été, l'idée m'est venue d'apprendre à coder. Quant au pourquoi ? Même si je n'en avais encore jamais entendu parlé (ni vu), je savais que les lignes de code existaient. Oui oui, sérieusement !
						</p>
						<p>
						Pour ce qui est du comment, j'ai visionné quelques vidéos sur internet traitant du JAVA. Au bout de quelques-unes, j'ai pu faire mon premier programme : Le Bon Compte.
						</p>
					</div>
				</Grid>
			</Grid>
		</section>
	)
}

export default HomePage