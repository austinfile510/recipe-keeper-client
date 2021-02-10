import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import RecipeApiService from '../services/recipe-api-service';
import RecipeListContext from '../contexts/RecipeListContext';
import RecipesListItem from '../RecipesListItem/RecipesListItem';
import { Section } from '../Utils/Utils';
import SearchBar from '../SearchBar/SearchBar';

class Home extends React.Component {
	static contextType = RecipeListContext;

	componentDidMount() {
		this.context.clearError();
		RecipeApiService.getRecipes()
			.then(this.context.setRecipeList)
			.catch(this.context.setError);
	}

	filterRecipes = (recipeList, searchTerm) => {
		if (!searchTerm) {
			return recipeList;
		}

		return recipeList.filter((recipe) => {
			const recipeTitle = recipe.title.toLowerCase();
			return recipeTitle.includes(searchTerm.toLowerCase());
		});
	};

	renderRecipes() {
		const { recipeList = [], searchTerm } = this.context;
		const filteredRecipes = this.filterRecipes(recipeList, searchTerm);
		return filteredRecipes.map((recipe) => (
			<RecipesListItem key={recipe.id} recipe={recipe} />
		));
	}

	render() {
		const { error } = this.context;
		return (
			<div>
				<Nav />
				<main role='main'>
					<h2>Welcome to Recipe Keeper!</h2>
					<h3>All your recipes in one place.</h3>

					<p>
						Browse recipes, save your favorites, and create your own recipes.
					</p>

					<p>
						First time here?{' '}
						<Link to={'/register'}> Sign up for an account</Link> today and
						start saving your favorite recipes!
					</p>

					{/* Display links to sortable Recipes table. Will default to show 25 newest public recipes*/}
					<h3>Recipes</h3>
					<p>
						Have a look at some of the newest recipes submitted by our
						community!
					</p>
					<SearchBar />
					<ol>
						<Section list className='MyRecipePage'>
							{error ? (
								<p className='red'>There was an error, try again</p>
							) : (
								this.renderRecipes()
							)}
						</Section>
					</ol>
				</main>
			</div>
		);
	}
}

export default Home;
