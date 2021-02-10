import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import AuthApiService from '../services/auth-api-service';
import '../styles.css';

class Login extends React.Component {
	state = {
		error: null,
	};

	handleLogin = (e) => {
		e.preventDefault();
		const loginCredentials = {
			user_name: e.target['user_name'].value,
			password: e.target['password'].value,
		};
		AuthApiService.postLogin(loginCredentials)
			.then(() => {
				this.props.history.push('/my-recipes');
			})
			.catch((e) => {
				console.log(e);
				this.setState({ error: e.error });
			});
	};

	render() {
		return (
			<div>
				<main role='main'>
					<header>
						<Nav />
						<h2>User Login</h2>
					</header>

					<form onSubmit={this.handleLogin}>
						<label>
							Username:
							<input required type='text' name='user_name' />
						</label>
						<br />
						<label>
							Password:
							<input required type='password' name='password' />
							<br />
							<input type='submit' value='Submit' />
						</label>
					</form>
					<p className='red'>{this.state.error}</p>
					<p>
						New to Recipe Keeper? <Link to={'/register'}>Register</Link> for an
						account today!
					</p>
				</main>
			</div>
		);
	}
}

export default Login;
