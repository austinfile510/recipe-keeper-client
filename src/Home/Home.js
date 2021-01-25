import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';

class Home extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				<main role='main'>
					<h3>Welcome to Recipe Keeper!</h3>
					<h4>All your recipes in one place.</h4>

					<p>
						Browse recipes, save your favorites, and create your own recipes.{' '}
					</p>

					<p>
						First time here?{' '}
						<Link to={'/register'}> Sign up for an account</Link> today and
						start saving your favorite recipes!
					</p>

					{/* Display links to sortable Recipes table. Will default to show 25 newest public recipes*/}
					<h3>Recipes</h3>
					<p>Have a look at some of the newest recipes submitted by our community!</p>
					<ol>
                    <li>
                        <Link to='/recipes/:recipeId'>Link to Recipe</Link>
                    <form>
                        <input type='submit' value='Add to My Recipes' />
                    </form>
                    </li>
					<li>
                        <Link to='/recipes/:recipeId'>Link to Recipe</Link>
                    <form>
                        <input type='submit' value='Add to My Recipes' />
                    </form>
                    </li>
					<li>
                        <Link to='/recipes/:recipeId'>Link to Recipe</Link>
                    <form>
                        <input type='submit' value='Add to My Recipes' />
                    </form>
                    </li>
                </ol>
				</main>
			</div>
		);
	}
}

export default Home;
