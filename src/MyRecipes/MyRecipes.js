import React from 'react';
import Nav from '../Nav/Nav';
import RecipesList from '../RecipesList/RecipesList';

class MyRecipes extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				<main role='main'>
				<form>
					<label>
							Search for a recipe:{' '}
							<input type='text' name='search' />
							<input type='submit' value='Search' />
						</label>
						<br />
					</form>
					<RecipesList />
				</main>
			</div>
		);
	}
}

export default MyRecipes;
