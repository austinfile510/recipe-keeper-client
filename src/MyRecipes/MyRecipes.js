import React from 'react';
import Nav from '../Nav/Nav';
import RecipesList from '../RecipesList/RecipesList';

class MyRecipes extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				<main role='main'>
					<RecipesList />
				</main>
			</div>
		);
	}
}

export default MyRecipes;
