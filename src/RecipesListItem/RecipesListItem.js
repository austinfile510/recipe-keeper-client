import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Hyph } from '../Utils/Utils';
import Moment from 'moment';
import '../styles.css';

export default class RecipesListItem extends Component {
	render() {
		const { recipe } = this.props;
		return (
			<div name='RecipesListItem' className='RecipesListItem__container'>
				<Link
					to={`/recipes/${recipe.id}`}
					style={{ textDecorationLine: 'none' }}
				>
					<h4 style={{ color: 'lightgreen' }} className='shadow'>
						{recipe.title}
					</h4>
				</Link>
				<span className='shadow'>
					<p>{recipe.meal_type}</p>
				</span>
				<Hyph />
				<span className='shadow'>
					<p>{recipe.author}</p>
				</span>
				<Hyph />
				<span className='shadow'>
					<p>{Moment(recipe.date_modified).format('MMMM Do, YYYY')}</p>
				</span>
			</div>
		);
	}
}
