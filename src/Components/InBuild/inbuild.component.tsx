import React, { FunctionComponent } from "react"
import "./inbuild.component.sass"

import HotMug from "Assets/Images/mug-hot-solid.svg"

const InBuild: FunctionComponent = () =>
{
	return (
		<section>
			<div>
				<span>
					<img src={HotMug} alt="Hot mug" width={150} height="auto" />
				</span>
				<h2>
					Cette page est en construction, elle devrait arriver sous peu...
				</h2>
			</div>
		</section>
	)
}

export default InBuild