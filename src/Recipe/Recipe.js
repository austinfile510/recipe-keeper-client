import React from 'react';
import RecipeApiService from '../services/recipe-api-service';
import Nav from '../Nav/Nav';
import TokenService from '../services/token-service';

class Recipe extends React.Component {
	state = {
		recipe: {},
		user: {},
	};
	static defaultProps = {
		onDeleteRecipe: () => {},
	};

	handleClickDelete = (e) => {
		e.preventDefault();
		const recipeId = this.props.id;

		RecipeApiService.deleteRecipe(recipeId);

	};

	componentDidMount() {
		const { recipeId } = this.props.match.params;
		RecipeApiService.getRecipe(recipeId).then((recipe) =>
			this.setState({ recipe })
		);
	}

	render() {
		const { recipe } = this.state;
		return (
			<div>
				<Nav />
				<main role='main'>
					<h2>{recipe.title}</h2>

					<h4>Recipe Description:</h4>

					<p>{recipe.description}</p>

					<h4>Ingredients:</h4>

					<p>{recipe.ingredients}</p>

					<h4>Instructions:</h4>

					<p>{recipe.instructions}</p>

					<h4>Author:</h4>
					<p></p>

					<h4>Recipe Type:</h4>
					<p>{recipe.meal_type}</p>

					<h4>Date Modified:</h4>

					<p>{recipe.date_modified}</p>

					<form>
						<input type='submit' value='Delete Recipe' />
					</form>
				</main>
			</div>
		);
	}
}

export default Recipe;
