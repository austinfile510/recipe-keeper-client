export default {
	API_ENDPOINT: process.env.REACT_APP_API_BASE_URL || `http://localhost:8000/api`,
	API_KEY: process.env.REACT_APP_API_KEY,
	TOKEN_KEY: 'recipe-keeper-auth-token',
};
