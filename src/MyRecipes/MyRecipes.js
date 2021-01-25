import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';

class MyRecipes extends React.Component {
	render() {
		return (
            <div>
                <Nav />
                <main role = 'main'>
                <ol>
                    <li>
                        <Link to='/recipes/:recipeId'>Link to Recipe</Link>
                    </li>
                    <form>
                        <input type='submit' value='Edit Recipe' />
                        <input type='submit' value='Delete Recipe' />
                    </form>
                </ol>
                </main>
            </div>

        );
    }
}

export default MyRecipes;