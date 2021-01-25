import React from 'react';
import { Link } from 'react-router-dom';

class RecipesList extends React.Component {
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