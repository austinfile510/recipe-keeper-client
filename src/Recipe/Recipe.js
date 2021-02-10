import React from 'react';
import RecipeApiService from '../services/recipe-api-service';
import Nav from '../Nav/Nav';
import TokenService from '../services/token-service';
import Moment from 'moment';
import '../styles.css';
import RecipeListContext from '../contexts/RecipeListContext';

class Recipe extends React.Component {
	state = {
		recipe: {},
		user: {},
	};

	static contextType = RecipeListContext;

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
		// TO DO - Implement button so it only shows when the registered logged in user matches the recipe's user ID
		const { recipeId } = this.props.match.params;
		if (this.context.user.user_id !== this.state.recipe.user_id) {
			return;
		} else
			return (
				<button className='delete-button' onClick={() => this.handleClickDelete(recipeId)}>
					Delete Recipe
				</button>
			);
	}

	render() {
		console.log(this.context);
		const { recipe } = this.state;
		return (
			<div name='recipe-page'>
				<main className='Recipe__container shadow' role='main'>
					<header>
						<Nav />
					</header>

					<h2 style={{color: 'darkgreen'}}>{recipe.title}</h2>

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
