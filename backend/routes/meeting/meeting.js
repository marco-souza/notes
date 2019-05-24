const KoaRouter = require('koa-router');
const {
    wrappers: { http }
} = require('../../middleware');
const { getMeetings, createMeetingNote } = require('../../controllers');

const router = KoaRouter();

router.get('/', http(() => getMeetings()));
router.post('/:id/notes', http(createMeetingNote));

module.exports = router;
