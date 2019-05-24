const KoaRouter = require('koa-router');
const {
    wrappers: { http }
} = require('../../middleware');
const { getMeetings, createMeetingNote, listMeetingNotes } = require('../../controllers');

const router = KoaRouter();

router.get('/', http(() => getMeetings()));
router.get('/:id/notes', http(listMeetingNotes));
router.post('/:id/notes', http(createMeetingNote));

module.exports = router;
