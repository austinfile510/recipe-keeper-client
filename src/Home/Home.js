import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
	render() {
		return (
			<div>
				<nav role='navigation'>Nav</nav>
				<main role='main'>

					<Link to={'/'}>Go to Home Page</Link>

                    {/* <Link to={'/'}>View All Recipes</Link> */}

					<Link to={'/register'}> Sign Up For An Account</Link>

					<Link to={'/login'}>Login</Link>

					<Link to={'/my-recipes'}>View My Recipes</Link>

					<Link to={'/add-recipe'}>Add Recipe</Link>
				</main>
			</div>
		);
	}
}

export default Home;