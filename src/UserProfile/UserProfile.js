import React from 'react';
import Nav from '../Nav/Nav';

class UserProfile extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				<main role='main'>
					<h3>"Current User"'s Profile</h3>
					
                    <p>Username: ""</p>
                    <br />
                    <p>Email: ""</p>
                    <br />
                    <p>Total Recipes Added: ""</p>
                    <br />

        
                    <form>
                        <input type='submit' value='Request password change' />
                    </form>
                    
				</main>
			</div>
		);
	}
}

export default UserProfile;
