import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import AuthApiService from '../services/auth-api-service';
import '../styles.css';

class Register extends React.Component {
	state = {
		error: null,
	}

	handleRegister = (e) => {
		e.preventDefault();
		const registerInfo = {
			full_name: e.target['full_name'].value,
			user_name: e.target['user_name'].value,
			password: e.target['password'].value,
			email: e.target['email'].value,
		}; console.log(registerInfo)
		AuthApiService.postUser(registerInfo).then(() => {
			this.props.history.push('/login');
		})
		.catch(e => {
			console.log(e)
			this.setState({ error: e.error})
		})
			
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
							<input required type='text' name='full_name' />
						</label>
						<br />
						<label>
							Username:
							<input required type='text' name='user_name' />
						</label>
						<br />
						<label>
							Password:
							<input required type='password' name='password' />
						</label>
						<br />
						<label>
							Email Address:
							<input required type='email' name='email' />
						</label>
						<br />
						<input type='submit' value='Register' />
					</form>
						<p className='red'>{this.state.error}</p>
					<p>
						Already registered? <Link to={'/login'}>Log in here!</Link>
					</p>
				</main>
			</div>
		);
	}
}

export default Register;
