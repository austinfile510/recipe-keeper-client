import React from 'react';
import RecipeListContext from '../contexts/RecipeListContext';

export default class SearchBar extends React.Component {
	static contextType = RecipeListContext;

	handleSearch = (e) => {
		e.preventDefault();
		this.context.setSearchTerm(e.target.['search-bar'].value);
	};
	
	handleReset = (e) => {
		e.preventDefault();
		this.context.setSearchTerm('');
	}

	render() {
		return (
			<div>
				<form name='search-bar' onSubmit={this.handleSearch}>
					<label htmlFor='search-bar'>Search for a recipe: </label>
					<input required type='text' name='search-bar' id='search-bar' placeholder='Search for a recipe here...' />
					<button>Search</button>
				</form>
				<span>
				<form name='reset-search' onSubmit={this.handleReset}>
					<button>Clear Search</button>
				</form>
				</span>
			</div>
		);
	}
}
