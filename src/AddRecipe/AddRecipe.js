import React from 'react';
import Nav from '../Nav/Nav';

export default class AddRecipe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			meal_type: 'breakfast',
			is_private: false,
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (e) => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({ [name]: value });
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const newRecipe = {
			title: e.target['title'].value,
			description: e.target['description'].value,
			ingredients: e.target['ingredients'].value,
			instructions: e.target['instructions'].value,
			meal_type: e.target['meal_type'].value,
			date_modified: new Date(),
			is_private: e.target['is_private'].value,
		};
		console.log(newRecipe);
	};

	render() {
		return (
			<div>
				<Nav />
				<main role='main'>
					<p>
						Fill out the forms below with all the details for your new recipe.
					</p>
					<form name='recipe-fields' onSubmit={this.handleSubmit}>
						<label>
							Title:{' '}
							<input
								type='text'
								name='title'
								placeholder='What will you call your recipe?'
							/>
						</label>
						<br />
						<label>
							Description:{' '}
							<textarea
								type='text'
								name='description'
								placeholder='Give a brief summary of your dish.'
							/>
						</label>
						<br />
						<label>
							Ingredients:{' '}
							<textarea name='ingredients' placeholder='Ingredients go here!' />
						</label>
						<br />
						<label>
							Instructions:{' '}
							<textarea
								name='instructions'
								placeholder='Write your cooking instructions here!'
							/>
						</label>
						<br />
						<label>
							Meal Type:{' '}
							<select name='meal_type' defaultValue={this.state.meal_type} onSubmit={this.handleChange}>
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

						<label>
							Would you like to make this recipe private? Only you will be able
							to see it and share it.
							<input
								type='checkbox'
								name='is_private'
								defaultValue={this.state.is_private}
								onChange={this.handleChange}
							/>
						</label>
						<input type='submit' value='Submit' />
					</form>
				</main>
			</div>
		);
	}
}
