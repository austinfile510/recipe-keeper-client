import React from 'react';
import RecipeListContext from '../contexts/RecipeListContext';

export default class SearchBar extends React.Component {
    static contextType = RecipeListContext;
    
    handleSearch = (e) => {
        e.preventDefault();
        this.context.setSearchTerm(
            e.target.search.value
        )
    }

	render() {
		return (
			<div>
				<form onSubmit = {this.handleSearch}>
					<label>Search for a recipe: </label>
					<input required type='text' name='search' />
					<button>Search</button>
				</form>
				;
			</div>
		);
	}
}
