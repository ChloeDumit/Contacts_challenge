// eslint-disable-next-line consistent-return
exports.up = async (knex) => {
	const exists = await knex.schema.hasTable('contacts');
	if (!exists) {
		return knex.schema.createTable('contacts', (table) => {
			table.increments('id').primary();
			table.string('first_name').notNullable();
			table.string('last_name').notNullable();
			table.string('email').notNullable().unique("IDX_UNIQUE_EMAIL");
			table.string('phone_number').notNullable();
		});
	}
};

exports.down = (knex) => Promise.all([knex.schema.dropTable('contacts')]);
