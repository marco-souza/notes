const KoaRouter = require('koa-router');
const meeting = require('./meeting');

const router = KoaRouter();
router.use('/meetings', meeting.routes());

// Sanity check route
router.get('/', ctx => (ctx.body = 'Hello World!'));

module.exports = router;
