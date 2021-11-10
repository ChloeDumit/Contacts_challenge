require('dotenv').config();
const deb = require('debug');
const knex = require('knex');

const debug = deb('database:*');
const config = {
	host: process.env.DATABASE_HOST,
	port: process.env.DATABASE_PORT,
	database: process.env.DATABASE_DB,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
};

const conn = knex({
	client: 'mysql',
	version: '2.18.1',
	connection: config,
	pool: {
		min: 3,
		max: 20,
	},
	debug: false,
	migrations: {
		directory: `${__dirname}/migrations`,
		tableName: 'migrations',
	},
	seeds: {
		directory: `${__dirname}/seeds`,
	},
});

// resource is acquired from pool
conn.client.pool.on('acquireRequest', (eventId) => {
	debug(`acquireRequest: ${eventId}`);
});
conn.client.pool.on('acquireSuccess', (eventId) => {
	debug(`acquireSuccess: ${eventId}`);
});
conn.client.pool.on('acquireFail', () => {
	debug('acquireFail');
});

// resource returned to pool
conn.client.pool.on('release', () => {
	debug('release');
});

// resource was created and added to the pool
conn.client.pool.on('createRequest', (eventId) => {
	debug(`createRequest: ${eventId}`);
});
conn.client.pool.on('createSuccess', (eventId) => {
	debug(`createSuccess: ${eventId}`);
});
conn.client.pool.on('createFail', () => {
	debug('createFail');
});

// resource is destroyed and evicted from pool
// resource may or may not be invalid when destroySuccess / destroyFail is called
conn.client.pool.on('destroyRequest', (eventId) => {
	debug(`destroyRequest: ${eventId}`);
});
conn.client.pool.on('destroySuccess', (eventId) => {
	debug(`destroySuccess: ${eventId}`);
});
conn.client.pool.on('destroyFail', () => {
	debug('destroyFail');
});

module.exports = conn;