const knex = require('./db');
const enumResultDA = require('./enums/result_status');

module.exports = {
	add: async (data) => {
		const resultDA = { code: enumResultDA.SUCCESS, data: undefined };
		try {
			const addResult = await knex('contacts').insert({
				first_name: data.first_name,
				last_name: data.last_name,
				email: data.email,
				phone_number: data.phone_number
			})
				.catch((err) => {
					if (err.sqlMessage.includes('IDX_UNIQUE_EMAIL')) {
						resultDA.code = enumResultDA.EMAIL_DUPLICATED;
					}
				});
			if (addResult) {
				const responseData = { id: addResult[0], ...data };
				resultDA.data = responseData;
			}
		} catch (error) {
			console.error(error);
			return error;
		}
		return resultDA;
	},
	update: async (data, id) => {
		const resultDA = { code: enumResultDA.SUCCESS, data: undefined };
		try {
			const exists = await knex('contacts').where('id', id);
			if(exists.length > 0){
				const editHistory = await knex('edit_history').insert({
					id: id,
					first_name: data.first_name,
					last_name: data.last_name,
					email: data.email,
					phone_number: data.phone_number,
					updated_at: new Date()
			})
				const updateResult = await knex('contacts').update({
					first_name: data.first_name,
					last_name: data.last_name,
					email: data.email,
					phone_number: data.phone_number
				}).where('id', id)
					.catch((err) => {
						if (err.sqlMessage.includes('IDX_UNIQUE_EMAIL')) {
							resultDA.code = enumResultDA.EMAIL_DUPLICATED;
						}
					});
				if (updateResult) {
					const responseData = { id: id, ...data };
					resultDA.data = responseData;
				}
			} else {
				resultDA.code = enumResultDA.CONTACT_NOT_FOUND;
			}
			
		} catch (error) {
			console.error(error);
			return error;
		}
		return resultDA;
	},
	getAll: async () => {
		const resultDA = { code: enumResultDA.SUCCESS, data: undefined };
		try {
			const getResult = await knex('contacts');
			if(getResult){
				resultDA.data = getResult;
			}
		} catch (error) {
			console.error(error);
			return error;
		}
		return resultDA;
	},
	getAllEdits: async () => {
		const resultDA = { code: enumResultDA.SUCCESS, data: undefined };
		try {
			const getResult = await knex('edit_history');
			if(getResult){
				resultDA.data = getResult;
			}
		} catch (error) {
			console.error(error);
			return error;
		}
		return resultDA;
	},
	delete: async (id) => {
		const resultDA = { code: enumResultDA.SUCCESS, data: undefined };
		try {
			const getResult = await knex('contacts').delete().where('id', id);
			if(getResult === 0){
				resultDA.code = enumResultDA.CONTACT_NOT_FOUND
			}
		} catch (error) {
			console.error(error);
			return error;
		}
		return resultDA;
	},
}