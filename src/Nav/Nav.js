import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
	return (
		<nav className='Nav'>
            <Link to={'/'}>Home</Link>{' '}
			<Link to={'/my-recipes'}>My Recipes</Link>{' '}
			<Link to={'/users/:userId'}>My Profile</Link>{' '}
			<Link to={'/add-recipe'}>Create Recipe</Link>{' '}
			<Link to={'/login'}>Login/Logout</Link>
		</nav>
	);
}

export default Nav;