const KoaRouter = require('koa-router');
const {
    wrappers: { http }
} = require('../../middleware');
const { getMeetings, createOrUpdateMeetingNote } = require('../../controllers');

const router = KoaRouter();

router.get('/', http(getMeetings));
router.post('/:id/notes', http(createOrUpdateMeetingNote));

module.exports = router;
