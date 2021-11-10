const yup = require('yup');

const validationEnum = require('./enums/validation_codes');

const schema = yup.object().shape({
  email: yup
    .string()
    .typeError(validationEnum.EMAIL_NOT_A_STRING)
    .email(validationEnum.WRONG_EMAIL_FORMAT)
    .required(validationEnum.EMAIL_REQUIRED)
    .strict(),

  first_name: yup
    .string()
    .typeError(validationEnum.FIRST_NAME_NOT_A_STRING)
    .required(validationEnum.FIRST_NAME_REQUIRED)
    .strict(),

  last_name: yup
    .string()
    .typeError(validationEnum.LAST_NAME_NOT_A_STRING)
    .required(validationEnum.LAST_NAME_REQUIRED)
    .strict(),

  phone_number: yup
    .string()
    .matches(/^[0-9]*$/, validationEnum.PHONE_NUMBER_ONLY_NUMBERS)
    .typeError(validationEnum.PHONE_NUMBER_NOT_A_STRING)
    .required(validationEnum.PHONE_NUMBER_REQUIRED)
    .strict(),

});

module.exports = schema;
