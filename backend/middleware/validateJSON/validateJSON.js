const Ajv = require('ajv');

const ajv = new Ajv({ allErrors: true });

const validateJSON = schema => (ctx, next) => {
    const { body } = ctx.request;
    const validate = ajv.compile(schema);

    if (!validate(body)) {
        ctx.throw(400, 'Bad request', validate.errors);
    }

    return next();
};

module.exports = validateJSON;
