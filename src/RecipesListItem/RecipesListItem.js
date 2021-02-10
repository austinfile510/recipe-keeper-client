import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Hyph } from '../Utils/Utils';

export default class RecipesListItem extends Component {
	render() {
		const { recipe } = this.props;
		return (
			<div>
				<Link to={`/recipes/${recipe.id}`} className='RecipesListItem'>
					<h4 className='RecipesListItem__heading'>{recipe.title}</h4>
				</Link>
				<span className='RecipesListItem__meal_type'>{recipe.meal_type}</span>
				<Hyph />
				<span className='RecipesListItem__author'>{recipe.author}</span>
				<Hyph />
				<span className='RecipesListItem__date'>{recipe.date_modified}</span>
			</div>
		);
	}
}
