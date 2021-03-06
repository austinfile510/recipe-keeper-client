import React from 'react';
import RecipeListContext from '../contexts/RecipeListContext';
import Nav from '../Nav/Nav';
import RecipeApiService from '../services/recipe-api-service';
import '../styles.css';


export default class AddRecipe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			meal_type: 'Breakfast',
			is_private: false,
			error: null,
		};

		this.handleChange = this.handleChange.bind(this);
	}

	static contextType = RecipeListContext;

	static defaultProps = {
		history: {
			push: () => {},
		},
	};

	handleChange = (e) => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({ [name]: value });
	};

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
		RecipeApiService.postRecipe(newRecipe)
			.then((recipe) => {
				this.props.history.push(`/recipes/${recipe.id}`);
			})
			.catch((e) => {
				console.error({ e });
				this.setState({ error: e.error });
			});
	};

	render() {
		return (
			<div name='AddRecipe'>
				<main role='main'>
					<header>
						<Nav />
						<h2 className='shadow'>Create Recipe</h2>
					</header>
					<div className='shadow' name='recipe-container'>
						<p>
							Fill out the forms below with all the details for your new recipe.
						</p>
						<form
							name='recipe-fields'
							className='create-recipe__container'
							onSubmit={this.handleSubmit}
						>
							<label>Title:</label>
							<input
								type='text'
								name='title'
								placeholder='What will you call your recipe?'
							/>

							<label>Description:</label>
							<textarea
								type='text'
								name='description'
								placeholder='Give a brief summary of your dish.'
							/>

							<label>
								Ingredients:{' '}
								<textarea
									name='ingredients'
									placeholder='Ingredients go here!'
								/>
							</label>
							<label>
								Instructions:{' '}
								<textarea
									name='instructions'
									placeholder='Write your cooking instructions here!'
								/>
							</label>

							<label>Meal Type:</label>
							<select
								name='meal_type'
								defaultValue={this.state.meal_type}
								onSubmit={this.handleChange}
							>
								<option value='Breakfast'>Breakfast</option>
								<option value='Lunch'>Lunch</option>
								<option value='Dinner'>Dinner</option>
								<option value='Dessert'>Dessert</option>
								<option value='Soups, Stews, and Chili'>
									Soups, Stews, and Chili
								</option>
								<option value='Salad'>Salad</option>
								<option value='Snack'>Snack</option>
								<option value='Drink'>Drink</option>
								<option value='Appetizers'>Appetizers</option>
								<option value='Holiday/Seasonal'>Holiday/Seasonal</option>
							</select>

							<label>
								Would you like to make this recipe private? Only you will be
								able to see it and share it.
							</label>
							<input
								type='checkbox'
								name='is_private'
								defaultValue={this.state.is_private}
								onChange={this.handleChange}
							/>

							<button>Submit</button>
							<p className='red'>{this.state.error}</p>
						</form>
					</div>
				</main>
			</div>
		);
	}
}
