import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import Recipe from './Recipe/Recipe';
import AddRecipe from './AddRecipe/AddRecipe';
import Login from './Login/Login';
import Register from './Register/Register';
import MyRecipes from './MyRecipes/MyRecipes';

class App extends React.Component {
	state = { hasError: false };

	static getDerivedStateFromError(error) {
		console.error(error);
		return { hasError: true };
	}
	render() {

		return (
			<div className='App'>
				<header className='App__header'>
				<Link to={'/'}><h1>Recipe Keeper</h1></Link>
				</header>
				<main className='App__main'>
					{this.state.hasError && (
						<p className='red'>There was an error! Oh no!</p>
					)}
						<div className='content' aria-live='polite'>
							<Route exact path='/' component={Home} />
							<Route exact path='/login' component={Login} />
							<Route path='/add-recipe' component={AddRecipe} />
							<Route exact path='/register' component={Register} />
							<Route exact path='/recipes/:recipeId' component={Recipe} />
							<Route exact path='/my-recipes' component={MyRecipes} />
						</div>
				</main>
			</div>
		);
	}
}

export default App;
