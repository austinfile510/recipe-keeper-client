import React from 'react';
import RecipesListItem from '../RecipesListItem/RecipesListItem';
import RecipeListContext from '../contexts/RecipeListContext';
import Nav from '../Nav/Nav';
import RecipeApiService from '../services/recipe-api-service';
import { Section } from '../Utils/Utils';

class MyRecipes extends React.Component {
	static contextType = RecipeListContext;

	componentDidMount() {
		this.context.clearError();
		RecipeApiService.getMyRecipes()
			.then(this.context.setRecipeList)
			.catch(this.context.setError);
	}

	renderRecipes() {
		const { recipeList = [] } = this.context;
		return recipeList.map((recipe) => (
			<RecipesListItem key={recipe.id} recipe={recipe} />
		));
	}

	render() {
		const { error } = this.context
		return (
			<div>
				<Nav />
				<main role='main'>
					<form>
						<label>
							Search for a recipe: <input type='text' name='search' />
							<input type='submit' value='Search' />
						</label>
						<br />
					</form>
					<Section list className='MyRecipePage'>
					{error ? (
						<p className='red'>There was an error, try again</p>
					) : (
						
						this.renderRecipes()
					)}
					</Section>
				</main>
			</div>
		);
	}
}

export default MyRecipes;
