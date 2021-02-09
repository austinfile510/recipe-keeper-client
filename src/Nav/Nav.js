import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/token-service';
import IdleService from '../services/idle-service';
import { Hyph } from '../Utils/Utils';

export default class Nav extends React.Component {
	handleLogoutClick = () => {
		TokenService.clearAuthToken();
		/* when logging out, clear the callbacks to the refresh api and idle auto logout */
		TokenService.clearCallbackBeforeExpiry();
		IdleService.unRegisterIdleResets();
	};

	renderLogoutLink() {
		return (
			<span className='Nav__logged-in'>
				<Link to={'/my-recipes'}>My Recipes</Link>
				<Hyph />
				<Link to={'/add-recipe'}>Create Recipe</Link>
				<Hyph />
				<Link onClick={this.handleLogoutClick} to='/'>
					Logout
				</Link>
			</span>
		);
	}
    
	renderLoginLink() {
		return (
			<span className='Nav__not-logged-in'>
				<Link to='/register'>Register</Link>
				<Hyph />
				<Link to='/login'>Log in</Link>
			</span>
		);
	}
	render() {
		return (
			<div name='nav'>
				<nav className='Nav'>
					<Link to={'/'}>Home</Link>
					<Hyph />
					{TokenService.hasAuthToken()
						? this.renderLogoutLink()
						: this.renderLoginLink()}
				</nav>
			</div>
		);
	}
}
