const cors = require('kcors');
const config = require('../../config');

module.exports = () =>
    cors({
        origin: ctx => {
            const origins = config.cors.origin.split(',');
            return origins.includes(ctx.get('Origin')) ? ctx.get('Origin') : false;
        }
    });
