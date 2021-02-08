import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RecipeApiService from '../services/recipe-api-service';

export default class RecipesListItem extends Component {
	render() {
		const { recipe } = this.props;
		return (
			<Link to={`/recipes/${recipe.id}`} className='RecipesListItem'>
				<div>
					<h4 className='RecipesListItem__heading'>{recipe.title}</h4>
					<span className='RecipesListItem__date'>{recipe.date_modified}</span>
				</div>
			</Link>
		);
	}
}
