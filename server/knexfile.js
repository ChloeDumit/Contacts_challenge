require('dotenv').config();

const connectionString = {
	host: process.env.DATABASE_HOST,
	port: process.env.DATABASE_PORT,
	database: process.env.DATABASE_DB,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
};

const config = {
	client: 'mysql',
	version: '2.18.1',
	connection: connectionString,
	pool: {
		min: 3,
		max: 20,
	},
	debug: true,
	migrations: {
		directory: `${__dirname}/data_access/migrations`,
		tableName: 'migrations',
	},
	seeds: {
		directory: `${__dirname}/data_access/seeds`,
	},
};

module.exports = config;