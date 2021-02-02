import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/token-service';
import config from '../config';

class RecipesList extends React.Component {
    state = {
        recipes: [],
    }
    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/recipes`, {
            method: 'GET',
            headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
    },
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            this.setState({
                recipes: data
            })
        })
    }
	render() {
		return (
            <div>
                <main role = 'main'>
                <ol>
                    <li>
                        <Link to='/recipes/:recipeId'>Link to Recipe</Link>
                    
                    <form>
                        <input type='submit' value='Edit Recipe' />
                        <input type='submit' value='Delete Recipe' />
                    </form>
                    </li>
                    <li>
                        <Link to='/recipes/:recipeId'>Link to Recipe</Link>
                    
                    <form>
                        <input type='submit' value='Edit Recipe' />
                        <input type='submit' value='Delete Recipe' />
                    </form>
                    </li>
                    <li>
                        <Link to='/recipes/:recipeId'>Link to Recipe</Link>
                    
                    <form>
                        <input type='submit' value='Edit Recipe' />
                        <input type='submit' value='Delete Recipe' />
                    </form>
                    </li>
                </ol>
                </main>
            </div>

        );
    }
}

export default RecipesList;