import React from 'react';
import { Route } from 'react-router-dom';
import ApiContext from './ApiContext';
import Home from './Home/Home';
import Recipe from './Recipe/Recipe';
import UserProfile from './UserProfile/UserProfile';
import AddRecipe from './AddRecipe/AddRecipe';
import Login from './Login/Login';
import Register from './Register/Register';
import MyRecipes from './MyRecipes/MyRecipes';
import EditRecipe from './EditRecipe/EditRecipe';

class App extends React.Component {
	render() {
		const contextValue = {};

		return (
			<main className='App'>
				<h1>Recipe Keeper</h1>
				<ApiContext.Provider value={contextValue}>
					<div className='content' aria-live='polite'>
						<Route exact path='/' component={Home} />
						<Route exact path='/login' component={Login} />
						<Route path='/add-recipe' component={AddRecipe} />
						<Route exact path='/register' component={Register} />
						<Route exact path='/users/:userId' component={UserProfile} />
						<Route exact path='/recipes/:recipeId' component={Recipe} />
						<Route path='/edit-recipe/:recipeId' component={EditRecipe} />
						<Route exact path='/my-recipes' component={MyRecipes} />
						
					</div>
				</ApiContext.Provider>
			</main>
		);
	}
}

export default App;
