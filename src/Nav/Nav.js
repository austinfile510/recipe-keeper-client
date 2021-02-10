import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/token-service';
import IdleService from '../services/idle-service';
import { Hyph } from '../Utils/Utils';
import '../styles.css'

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
				<Link to={'/my-recipes'} style={{color: 'lightgreen', textDecorationLine: 'none'}}>My Recipes</Link>
				<Hyph />
				<Link to={'/add-recipe'} style={{color: 'lightgreen', textDecorationLine: 'none'}}>Create Recipe</Link>
				<Hyph />
				<Link onClick={this.handleLogoutClick} to='/' style={{color: 'lightgreen', textDecorationLine: 'none'}}>
					Logout
				</Link>
			</span>
		);
	}
    
	renderLoginLink() {
		return (
			<span className='Nav__not-logged-in'>
				<Link to='/register' style={{color: 'lightgreen', textDecorationLine: 'none'}}>Register</Link>
				<Hyph />
				<Link to='/login' style={{color: 'lightgreen', textDecorationLine: 'none'}}>Log in</Link>
			</span>
		);
	}
	render() {
		return (
			<div name='nav'>
				<nav className='nav shadow'>
					<Link to={'/'} style={{color: 'lightgreen', textDecorationLine: 'none'}}>Home</Link>
					<Hyph />
					{TokenService.hasAuthToken()
						? this.renderLogoutLink()
						: this.renderLoginLink()}
				</nav>
			</div>
		);
	}
}
