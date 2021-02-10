import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Hyph } from '../Utils/Utils';
import Moment from 'moment';

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
				<span className='RecipesListItem__date'>{Moment(recipe.date_modified).format('MMMM Do, YYYY')}</span>
			</div>
		);
	}
}
