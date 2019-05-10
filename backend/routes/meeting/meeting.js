const KoaRouter = require('koa-router');
const {
    wrappers: { http }
} = require('../../middleware');
const { getMeetings } = require('../../controllers');

const router = KoaRouter();

router.get('/', http(() => getMeetings()));

module.exports = router;
