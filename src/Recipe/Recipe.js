import React from 'react';
import RecipeApiService from '../services/recipe-api-service';
import Nav from '../Nav/Nav';
import TokenService from '../services/token-service';
import Moment from 'moment';

class Recipe extends React.Component {
	state = {
		recipe: {},
		user: {},
	};
	static defaultProps = {
		onDeleteRecipe: () => {},
	};

	componentDidMount() {
		const { recipeId } = this.props.match.params;
		RecipeApiService.getRecipe(recipeId).then((recipe) =>
			this.setState({ recipe })
		);
	}

	handleClickDelete = (e) => {
		const { recipeId } = this.props.match.params;
		RecipeApiService.deleteRecipe(recipeId).then(() => {
			this.props.history.push('/my-recipes');
		});
	};

	renderDeleteButton() {
		const { recipeId } = this.props.match.params;
		if (TokenService.hasAuthToken() === false) {
			return;
		} else
			return (
				<button onClick={() => this.handleClickDelete(recipeId)}>
					Delete Recipe
				</button>
			);
	}

	render() {
		const { recipe } = this.state;
		return (
			<div>
				<main role='main'>
					<header>
						<Nav />
					</header>

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

					<p>{Moment(recipe.date_modified).format('MMMM Do, YYYY')}</p>

					{this.renderDeleteButton()}
				</main>
			</div>
		);
	}
}

export default Recipe;
