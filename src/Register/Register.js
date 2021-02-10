import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import AuthApiService from '../services/auth-api-service';

class Register extends React.Component {
	handleRegister = (e) => {
		e.preventDefault();
		const registerInfo = {
			full_name: e.target['full_name'].value,
			user_name: e.target['user_name'].value,
			password: e.target['password'].value,
			email: e.target['email'].value,
		};
		AuthApiService.postUser(registerInfo).then(() => {
			this.props.history.push('/login');
		});
	};
	render() {
		return (
			<div>
				<main role='main'>
					<header>
						<Nav />
						<h2>Registration</h2>
					</header>
					<form onSubmit={this.handleRegister}>
						<label>
							Full Name:
							<input type='text' name='full_name' />
						</label>
						<br />
						<label>
							Username:
							<input type='text' name='user_name' />
						</label>
						<br />
						<label>
							Password:
							<input type='text' name='password' />
						</label>
						<br />
						<label>
							Email Address:
							<input type='text' name='email' />
						</label>
						<br />
						<input type='submit' value='Register' />
					</form>

					<p>
						Already registered? <Link to={'/login'}>Log in here!</Link>
					</p>
				</main>
			</div>
		);
	}
}

export default Register;
