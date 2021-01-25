import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';

class Register extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				<main role='main'>
					<form>
						<label>
							Full Name:
							<input type='text' name='fullname' />
						</label>
						<br />
						<label>
							Nickname:
							<input type='text' name='nickname' />
						</label>
						<br />
						<label>
							Username:
							<input type='text' name='username' />
						</label>
						<br />
						<label>
							Password:
							<input type='text' name='password' />
						</label>
                        <br />
                        <label>
							Confirm Password:
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

                    <p>Already registered? <Link to={'/login'}>Log in here!</Link></p>
				</main>
			</div>
		);
	}
}

export default Register;
