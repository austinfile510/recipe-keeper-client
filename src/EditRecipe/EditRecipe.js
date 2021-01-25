import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';

class EditRecipe extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: 'breakfast' };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	render() {
		return (
			<div>
				<Nav />
				<main role='main'>
					<p>
						Fill out the forms below with all the details for your new recipe.
					</p>
					<form>
						<label>
							Title:
							<input
								type='text'
								name='title'
								placeholder='What should we call your recipe?'
							/>
						</label>
						<br />
						<label>
							Description:
							<textarea
								type='text'
								name='description'
								placeholder='Give a brief, one or two sentence summary.'
							/>
						</label>
						<br />
						<label>
							Ingredients
							<textarea name='ingredients' placeholder='Ingredients go here!' />
						</label>
						<br />
						<label>
							Cooking Instructions:
							<textarea
								name='instructions'
								placeholder='Write your instructions here!'
							/>
						</label>
						<br />
						<label>
							Meal Type:
							<select value={this.state.value}>
								<option value='breakfast'>Breakfast</option>
								<option value='lunch'>Lunch</option>
								<option value='dinner'>Dinner</option>
                                <option value='dessert'>Dessert</option>
                                <option value='soup'>Soups, Stews, and Chili</option>
                                <option value='salad'>Salad</option>
								<option value='snack'>Snack</option>
								<option value='drink'>Drink</option>
								<option value='appetizers'>Appetizers</option>
                                <option value='seasonal'>Holiday/Seasonal</option>
							</select>
						</label>
						<br />
						<input type='submit' value='Submit' />
					</form>
				</main>
			</div>
		);
	}
}

export default EditRecipe;
