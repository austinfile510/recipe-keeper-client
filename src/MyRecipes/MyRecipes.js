import React from 'react';
import RecipesListItem from '../RecipesListItem/RecipesListItem';
import RecipeListContext from '../contexts/RecipeListContext';
import Nav from '../Nav/Nav';
import RecipeApiService from '../services/recipe-api-service';
import { Section } from '../Utils/Utils';

export default class MyRecipes extends React.Component {
	static contextType = RecipeListContext;

	componentDidMount() {
		this.context.clearError();
		this.context.clearRecipeList();
		RecipeApiService.getMyRecipes()
			.then(this.context.setRecipeList)
			.catch(this.context.setError);
	}

	handleClickDelete = (e) => {
		const { recipeId } = this.props.match.params;
		this.context.deleteRecipe();
		RecipeApiService.deleteRecipe(recipeId).then(() => {
			this.props.history.push('/my-recipes');
		});
	};

	renderRecipes() {
		const { recipeList = [] } = this.context;
		return recipeList.map((recipe) => (
			<span>
				<RecipesListItem key={recipe.id} recipe={recipe} />
			</span>
		));
	}

	render() {
		const { error } = this.context;
		return (
			<div>
				<main role='main'>
					<header>
						<Nav />
						<h2>My Recipes</h2>
					</header>

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
