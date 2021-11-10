const contacts = require('../data_access/contacts');
const enumResultBL = require('./enums/result_status');

module.exports = {
	add: async (data) => {
		const resultBL = { code: enumResultBL.SUCCESS, data: undefined };
		const addResult = await contacts.add(data);
		if (addResult.code === enumResultBL.SUCCESS) {
			resultBL.data = addResult.data
		} else {
			resultBL.code = addResult.code;
		}
		return resultBL;
	},
	update: async (data, id) => {
		const resultBL = { code: enumResultBL.SUCCESS, data: undefined };
		const addResult = await contacts.update(data, id);
		if (addResult.code === enumResultBL.SUCCESS) {
			resultBL.data = addResult.data
		} else {
			resultBL.code = addResult.code;
		}
		return resultBL;
	},
	getAll: async () => {
		const resultBL = { code: enumResultBL.SUCCESS, data: undefined };
		const addResult = await contacts.getAll();
		if (addResult.code === enumResultBL.SUCCESS) {
			resultBL.data = addResult.data
		} else {
			resultBL.code = addResult.code;
		}
		return resultBL;
	},
	getAllEdits: async () => {
		const resultBL = { code: enumResultBL.SUCCESS, data: undefined };
		const addResult = await contacts.getAllEdits();
		if (addResult.code === enumResultBL.SUCCESS) {
			resultBL.data = addResult.data
		} else {
			resultBL.code = addResult.code;
		}
		return resultBL;
	},
	delete: async (id) => {
		const resultBL = { code: enumResultBL.SUCCESS, data: undefined };
		const addResult = await contacts.delete(id);
		if (addResult.code === enumResultBL.SUCCESS) {
			resultBL.data = addResult.data
		} else {
			resultBL.code = addResult.code;
		}
		return resultBL;
	},
};