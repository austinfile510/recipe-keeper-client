import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import RecipesContext from './RecipesContext';
import Home from './Home/Home';
// import AllRecipes from './RecipesList/RecipesList';
// import AddRecipe from './AddRecipe/AddRecipe';
// import DeleteRecipe from './DeleteRecipe/DeleteRecipe';
// import Login from './Login/Login';
// import Register from './Register/Register';
// import MyRecipes from './MyRecipes/MyRecipes';
// import EditRecipe from './EditRecipe/EditRecipe';

class App extends Component {
	render() {
		const contextValue = {};

		return (
			<main className='App'>
				<h1>Recipe Keeper</h1>
				<RecipesContext.Provider value={contextValue}>
					<div className='content' aria-live='polite'>
						<Route exact path='/' component={Home} />
						{/* <Route exact path='/login' component={Login} />
						<Route exact path='/register' component={Register} />
						<Route exact path='/my-recipes' component={MyRecipes} />
						<Route exact path='/all-recipes' component={AllRecipes} />
						<Route path='/add-recipe' component={AddRecipe} />
						<Route path='/edit-recipe/:recipeId' component={EditRecipe} />
						<Route
							exact
							path='/delete-recipe/:recipeId'
							component={DeleteRecipe}
						/> */}
					</div>
				</RecipesContext.Provider>
			</main>
		);
	}
}

export default App;
