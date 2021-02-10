import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Recipe from './Recipe/Recipe';
import AddRecipe from './AddRecipe/AddRecipe';
import Login from './Login/Login';
import Register from './Register/Register';
import MyRecipes from './MyRecipes/MyRecipes';
import NotFoundPage from './NotFoundPage/NotFoundPage'
import { RecipeListProvider } from './contexts/RecipeListContext';

class App extends React.Component {
	state = { hasError: false };

	static getDerivedStateFromError(error) {
		console.error(error);
		return { hasError: true };
	}

	handleDeleteRecipe = (noteId) => {
		this.setState({
			notes: this.state.notes.filter((note) => note.id !== noteId),
		});
	};

	render() {
		const contextValue = {
			recipeList: this.state.recipeList,
			error: this.state.error,
			setError: this.setError,
			clearError: this.clearError,
			setUser: this.setUser,
			setRecipe: this.setRecipe,
			setRecipeList: this.setRecipeList,
			deleteRecipe: this.deleteRecipe,
		  }
		return (
			<div className='App'>
			<RecipeListProvider value={contextValue}>
				<header className='App__header'>
						<h1>Recipe Keeper</h1>
				</header>
				<main className='App__main'>
					{this.state.hasError && (
						<p className='red'>There was an error! Oh no!</p>
					)}
					<div className='content' aria-live='polite'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/login' component={Login} />
						<Route path='/add-recipe' component={AddRecipe} />
						<Route exact path='/register' component={Register} />
						<Route exact path='/recipes/:recipeId' component={Recipe} />
						<Route exact path='/my-recipes' component={MyRecipes} />
						<Route component = {NotFoundPage} />;
						</Switch>
					</div>
				</main>
				</RecipeListProvider>
			</div>
		);
	}
}

export default App;
