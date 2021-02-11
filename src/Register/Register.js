import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import AuthApiService from '../services/auth-api-service';
import '../styles.css';
import RecipeListContext from '../contexts/RecipeListContext';


class Register extends React.Component {
	static contextType = RecipeListContext;

	state = {
		error: null,
	};

	handleRegister = (e) => {
		e.preventDefault();
		const registerInfo = {
			full_name: e.target['full_name'].value,
			user_name: e.target['user_name'].value,
			password: e.target['password'].value,
			email: e.target['email'].value,
		};
		AuthApiService.postUser(registerInfo)
			.then(() => {
				this.props.history.push('/login');
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
						<h2 className='shadow'>Registration</h2>
					</header>

					<form
						name='registration-form'
						className='shadow registration-form__container'
						onSubmit={this.handleRegister}
					>
						<label>Full Name:</label>
						<input name='full_name' required type='text' />
						<label>Username:</label>
						<input required type='text' name='user_name' />

						<label>Password:</label>
						<input required type='password' name='password' />

						<label>Email Address:</label>
						<input required type='email' name='email' />

						<button>Register</button>
					</form>
					<p className='red'>{this.state.error}</p>
					<p className='shadow'>
						Already registered?{' '}
						<Link
							to={'/login'}
							style={{ color: 'lightgreen', textDecorationLine: 'none' }}
							activeStyle={{ color: 'darkgreen' }}
						>
							Log in here!
						</Link>
					</p>
				</main>
			</div>
		);
	}
}

export default Register;
