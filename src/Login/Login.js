import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import AuthApiService from '../services/auth-api-service';

class Login extends React.Component {
	handleLogin = e => {
		e.preventDefault();
			const loginCredentials = {
				user_name: e.target['user_name'].value,
				password: e.target['password'].value,
			}
		AuthApiService.postLogin(loginCredentials)
		.then(() => {
			this.props.history.push('/my-recipes')
		})
	}

	render() {
		return (
			<div>
				<Nav />
				<main role='main'>
					<form onSubmit={this.handleLogin}>
						<label>
							Username:
							<input type='text' name='user_name' />
						</label>
						<br />
						<label>
							Password:
							<input type='text' name='password' />
							<br />
							<input type='submit' value='Submit' />
						</label>
					</form>

                    <p>New to Recipe Keeper? <Link to={'/register'}>Register</Link> for an account today!</p>
				</main>
			</div>
		);
	}
}

export default Login;
