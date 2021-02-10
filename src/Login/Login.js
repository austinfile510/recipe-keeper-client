import React from 'react';
import { Link } from 'react-router-dom';
import RecipeListContext from '../contexts/RecipeListContext';
import Nav from '../Nav/Nav';
import AuthApiService from '../services/auth-api-service'
import TokenService from '../services/token-service';
import '../styles.css';

class Login extends React.Component {
	static contextType = RecipeListContext	

	handleLogin = (e) => {
		e.preventDefault();
		const loginCredentials = {
			user_name: e.target['user_name'].value,
			password: e.target['password'].value,
		};
		AuthApiService.postLogin(loginCredentials)
			.then(() => {
				this.context.setUser(TokenService.readJwtToken())
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
						<h2 className='shadow'>User Login</h2>
					</header>

					<form
						name='login-form'
						className='shadow login-form__container'
						onSubmit={this.handleLogin}
					>
						<label>
							Username: <input required type='text' name='user_name' />
						</label>
						<br />
						<label>
							Password: <input required type='password' name='password' />
							<br />
							<button>Submit</button>
						</label>
					</form>
					<p className='red'>{this.context.error}</p>
					<p className='shadow'>
						New to Recipe Keeper?{' '}
						<Link
							to={'/register'}
							style={{ color: 'lightgreen', textDecorationLine: 'none' }}
						>
							Register
						</Link>{' '}
						for an account today!
					</p>
				</main>
			</div>
		);
	}
}

export default Login;
