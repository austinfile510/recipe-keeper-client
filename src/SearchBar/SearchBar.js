import React from 'react';
import RecipeListContext from '../contexts/RecipeListContext';
import '../styles.css';

export default class SearchBar extends React.Component {
	static contextType = RecipeListContext;

	handleSearch = (e) => {
		// Search Function
		e.preventDefault();
		this.context.setSearchTerm(e.target['search-bar'].value);
	};

	handleReset = (e) => {
		// Clears search results
		e.preventDefault();
		this.context.setSearchTerm('');
	};

	render() {
		return (
			<div className='search-form__container shadow'>
				<form
					
					name='search-bar'
					onSubmit={this.handleSearch}
				>
					<label htmlFor='search-bar'>Search: </label>
					<input
						required
						type='text'
						name='search-bar'
						id='search-bar'
						placeholder='Search for a recipe here...'
					/>
					<button>Search</button>
				</form>
				<form name='reset-search' onSubmit={this.handleReset}>
					<button>Clear Search</button>
				</form>
			</div>
		);
	}
}
