export default {
	API_ENDPOINT: `https://pure-tundra-43062.herokuapp.com/api`,
	TOKEN_KEY: 'recipe-keeper-auth-token',
	DATABASE_URL:
	process.env.DATABASE_URL || 'postgresql://postgres:wetbeverage@localhost/noteful',
	TEST_DATABASE_URL:
		process.env.DATABASE_URL ||
		'postgresql://postgres:wetbeverage@localhost/noteful-test',
}
