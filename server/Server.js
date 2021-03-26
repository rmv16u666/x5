const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const { buildSchema } = require('graphql');
const { readFileSync } = require('fs');

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

const schemaString = readFileSync('./schema.graphql', { encoding: 'utf8' });

const schema = buildSchema(schemaString);

const allBooks = [
	{
		id: '1',
		title: 'Another awesome book',
		description: '123',
		author: {
			id: '1',
			firstName: 'Alex',
			lastName: 'Kislov'
		}
	},
	{
		id: '2',
		title: 'Awesome book',
		description: '123',
		author: {
			id: '1',
			firstName: 'Alex',
			lastName: 'Kislov'
		}
	}
];

const TOKEN = "auth_token";

const root = {
	login: (args, request) => {	
		console.log(request.headers["authorization"])
		throw new error();	
		return {token:'auth_token'};
	}
};

const app = express();

app.use(cors());

app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true,
		formatError: (err) => {
			return ({message: 'Unauthorized error', statusCode: 401})
		}
	})
);

app.listen(2000);

console.log('Running a GraphQL API server at http://localhost:2000/graphql');