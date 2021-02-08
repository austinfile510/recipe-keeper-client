import TokenService from '../services/token-service';
import config from '../config';

const RecipeApiService = {
	getRecipes() {
		return fetch(`${config.API_ENDPOINT}/recipes`, {
			headers: {},
		}).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},
	getRecipe(recipeId) {
		return fetch(`${config.API_ENDPOINT}/recipes/${recipeId}`, {
			headers: {
				'authorization': `bearer ${TokenService.getAuthToken()}`,
			},
		}).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},
	getMyRecipes() {
		return fetch(`${config.API_ENDPOINT}/my-recipes`, {
			headers: {
				'authorization': `bearer ${TokenService.getAuthToken()}`,
			},
		}).then((res) =>
		!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
	);
	},
	deleteRecipe(recipeId) {
		return fetch(`${config.API_ENDPOINT}/recipes/${recipeId}`, {
			method: 'DELETE',
			headers: {
				
				'authorization': `bearer ${TokenService.getAuthToken()}`,
			},
		}).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},
	postRecipe(newRecipe) {
		return fetch(`${config.API_ENDPOINT}/recipes`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				'Authorization': `Bearer ${TokenService.getAuthToken()}`,
			},
			body: JSON.stringify(newRecipe),
		}).then((res) =>
			!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
		);
	},
	getUser(userId) {
		return fetch(`${config.API_ENDPOINT}/users/${userId}`, {
			headers: {
				'Authorization': `Bearer ${TokenService.getAuthToken()}`,
			}
		})
		.then((res) =>
		!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
	);
	},
};

export default RecipeApiService;
