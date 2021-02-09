const config = {
	API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT || `http://localhost:8000/api`,
	TOKEN_KEY: process.env.REACT_APP_TOKEN_KEY || 'recipe-keeper-auth-token',
}

export default config;