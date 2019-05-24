const { Meeting, Note } = require('../../models');

/**
 * Get the list of meetings from the DB.
 * @public
 * @returns {Promise<Array<Object>>} The list of meetings.
 */
async function getMeetings() {
    const meetings = await Meeting.findAll();
    return meetings.map(meeting => meeting.get({ plain: true }));
}

/**
 * List meeting notes.
 * @public
 * @param {object} body - ignore body
 * @param {object} params - request params
 * @returns {Promise<Array<Object>>} List of notes.
 */
async function listMeetingNotes(body, params) {
    const note = await Note.findAll({
        where: {
            meetingId: params.id
        }
    });
    return note;
}

/**
 * Create a note related to a meeting.
 * @public
 * @param {object} body - request body
 * @param {object} params - request params
 * @returns {Promise<Object>} Created item.
 */
async function createMeetingNote({ text }, params) {
    const note = await Note.create({
        meetingId: params.id,
        text
    });
    return note;
}

module.exports = {
    getMeetings,
    createMeetingNote,
    listMeetingNotes,
};
