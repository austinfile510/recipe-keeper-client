import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';

class Login extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				<main role='main'>
					<form>
						<label>
							Username:
							<input type='text' name='username' />
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
