const express = require('express')
const router = express.Router();
const contacts = require('../business_logic/contacts');
const enumResultBL = require('../business_logic/enums/result_status');
const schema = require('./utils/contacts_schema');

const validateContacts = async (schemas, data) => {
	let errors;
	let isValid = true;
	await schemas.validate(data, { abortEarly: false }).catch((error) => {
		errors = error.errors;
		isValid = false;
	});
	return { errors, isValid };
};


router.post('/', async (req, res) => {
	try {
		const validatedData = await validateContacts(schema, req.body);
		if (validatedData.isValid) {
			const resultBL = await contacts.add(req.body);
			switch (resultBL.code) {
				case enumResultBL.SUCCESS:
					res.status(200).json({ code: resultBL.code, data: resultBL.data });
					break;
				case enumResultBL.EMAIL_DUPLICATED:
					res.status(409).json({ code: enumResultBL.EMAIL_DUPLICATED });
					break;
				default:
					res.status(500).json(enumResultBL.ERROR);
			}
		} else {
			res.status(400).json({ code: enumResultBL.BAD_REQUEST, data: validatedData.errors });
		}

	} catch (error) {
		res.status(500).json(enumResultBL.ERROR);
	}
}
);
router.put('/:id', async (req, res) => {
	try {
		const validatedData = await validateContacts(schema, req.body);
		if (validatedData.isValid) {
			const resultBL = await contacts.update(req.body, req.params.id);
			switch (resultBL.code) {
				case enumResultBL.SUCCESS:
					res.status(200).json({ code: resultBL.code, data: resultBL.data });
					break;
				case enumResultBL.EMAIL_DUPLICATED:
					res.status(409).json({ code: enumResultBL.EMAIL_DUPLICATED });
					break;
				case enumResultBL.CONTACT_NOT_FOUND:
					res.status(404).json({ code: enumResultBL.CONTACT_NOT_FOUND });
					break;
				default:
					res.status(500).json(enumResultBL.ERROR);
			}
		} else {
			res.status(400).json({ code: enumResultBL.BAD_REQUEST, data: validatedData.errors });
		}

	} catch (error) {
		res.status(500).json(enumResultBL.ERROR);
	}
}
);

router.get('/', async (req, res) => {
	const resultBL = await contacts.getAll(req.body);
	switch (resultBL.code) {
		case enumResultBL.SUCCESS:
			res.status(200).json({ code: resultBL.code, data: resultBL.data });
			break;
		default:
			res.status(500).json(enumResultBL.ERROR);
	}
});

router.get('/edit_history', async (req, res) => {
	const resultBL = await contacts.getAllEdits(req.body);
	switch (resultBL.code) {
		case enumResultBL.SUCCESS:
			res.status(200).json({ code: resultBL.code, data: resultBL.data });
			break;
		default:
			res.status(500).json(enumResultBL.ERROR);
	}
}
);
router.delete('/:id', async (req, res) => {
	const resultBL = await contacts.delete(req.params.id);
	switch (resultBL.code) {
		case enumResultBL.SUCCESS:
			res.status(200).json({ code: resultBL.code, data: resultBL.data });
			break;
		case enumResultBL.CONTACT_NOT_FOUND:
			res.status(404).json({ code: enumResultBL.CONTACT_NOT_FOUND});
			break;
		default:
			res.status(500).json(enumResultBL.ERROR);
	}
}
);

module.exports = router;