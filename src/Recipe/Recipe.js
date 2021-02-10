import React from 'react';
import RecipeApiService from '../services/recipe-api-service';
import Nav from '../Nav/Nav';

class Recipe extends React.Component {
	state = {
		recipe: {},
		user: {},
	};
	static defaultProps = {
		onDeleteRecipe: () => {},
	};

	handleClickDelete = (e) => {
		console.log('button clicked!');
		const { recipeId } = this.props.match.params;
		RecipeApiService.deleteRecipe(recipeId).then(() => {
			this.props.history.push('/my-recipes');
		});
	};

	handleSearch;

	componentDidMount() {
		const { recipeId } = this.props.match.params;
		RecipeApiService.getRecipe(recipeId).then((recipe) =>
			this.setState({ recipe })
		);
	}

	render() {
		const { recipe, user } = this.state;
		return (
			<div>
				<header>
					<Nav />
				</header>
				<main role='main'>
					<h2>{recipe.title}</h2>

					<h3>Recipe Description:</h3>

					<p>{recipe.description}</p>

					<h3>Ingredients:</h3>

					<p>{recipe.ingredients}</p>

					<h3>Instructions:</h3>

					<p>{recipe.instructions}</p>

					<h3>Recipe Type:</h3>
					<p>{recipe.meal_type}</p>

					<h3>Author:</h3>
					<p>{recipe.author}</p>

					<h4>Date Modified:</h4>

					<p>{recipe.date_modified}</p>

					<button onClick={() => this.handleClickDelete(user.id)}>
						Delete Recipe
					</button>
				</main>
			</div>
		);
	}
}

export default Recipe;
