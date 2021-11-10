// eslint-disable-next-line consistent-return
exports.up = async (knex) => {
	const exists = await knex.schema.hasTable('edit_history');
	if (!exists) {
		return knex.schema.createTable('edit_history', (table) => {
			table.integer('id');
			table.string('first_name').notNullable();
			table.string('last_name').notNullable();
			table.string('email').notNullable();
			table.string('phone_number').notNullable();
			table.date('updated_at').notNullable();
		});
	}
};

exports.down = (knex) => Promise.all([knex.schema.dropTable('edit_history')]);
