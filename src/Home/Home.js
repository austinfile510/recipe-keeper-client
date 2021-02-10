import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import RecipeApiService from '../services/recipe-api-service';
import RecipeListContext from '../contexts/RecipeListContext';
import RecipesListItem from '../RecipesListItem/RecipesListItem';
import { Section } from '../Utils/Utils';
import SearchBar from '../SearchBar/SearchBar';
import '../styles.css';

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
				<main role='main'>
					<header>
						<Nav />
					</header>
					<div name= 'splash-screen-intro' className='splash_message'>
						<h2 className='shadow'>Welcome to Recipe Keeper!</h2>
						<h2 style={{color: 'lightgreen'}} className='shadow'>All your recipes in one place.</h2>
					</div>
					<p className='shadow'>
						Browse recipes and create your own! Share them with the public, or keep them secret - it's up to you!
					</p>

					<p className='shadow'>
						First time here?{' '}
						<Link to={'/register'} style={{color: 'lightgreen', textDecorationLine: 'none'}} activeStyle={{color: 'grey'}}> Sign up for an account</Link> today and
						start saving your favorite recipes!
					</p>

					{/* Display links to sortable Recipes table. Will default to show 25 newest public recipes*/}
					<h3 style={{color: 'lightgreen'}} className='shadow'>Recipes</h3>
					<p className='shadow'>
						Have a look at some of the newest recipes submitted by our
						community!
					</p>
					<div className='search-results'>
						<SearchBar />
						<ol>
							<Section list className='MyRecipePage__results'>
								{error ? (
									<p className='red'>There was an error, try again</p>
								) : (
									this.renderRecipes()
								)}
							</Section>
						</ol>
					</div>
				</main>
			</div>
		);
	}
}

export default Home;
