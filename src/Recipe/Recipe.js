import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';

class Recipe extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				<main role='main'>
					<h2>Recipe Name</h2>

					<h4>Recipe Description:</h4>

                    <h4>Recipe Type</h4>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
						enim erat, lobortis eget leo sed, euismod aliquam augue.
					</p>

					<h4>Ingredients:</h4>

					<p>
						Curabitur elit ligula, efficitur vel mauris vel, hendrerit tristique
						ligula. Mauris blandit at ipsum ac semper. Quisque id tellus
						vestibulum, efficitur augue nec, pulvinar metus. Vivamus nec semper
						nibh, eu ornare elit. Nullam vitae tortor auctor, pretium magna at,
						accumsan libero. Donec massa urna, dignissim in consectetur quis,
						facilisis in augue.
					</p>

					<h4>Instructions:</h4>

					<p>
						Morbi elementum justo in mi malesuada, efficitur efficitur ligula
						vehicula. Suspendisse potenti. Donec est odio, pretium id est eget,
						interdum convallis mi. Morbi urna augue, ultrices sed leo vitae,
						consectetur maximus purus. Etiam venenatis bibendum nisl, quis
						congue neque sollicitudin vel. Nunc malesuada aliquam nisi, id
						aliquet elit pretium ut. Vestibulum molestie non velit ut eleifend.
						Donec tempor porta mauris ac condimentum. Fusce imperdiet ut mauris
						sit amet finibus. Donec scelerisque libero sapien, eu venenatis diam
						vehicula ut. Morbi nec ligula est.
					</p>

					<h4></h4>
				</main>
			</div>
		);
	}
}

export default Recipe;
