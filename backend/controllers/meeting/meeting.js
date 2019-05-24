const { Meeting, Note } = require('../../models');

/**
 * Get the list of meetings from the DB.
 * @public
 * @returns {Promise<Array<Object>>} The list of meetings.
 */
async function getMeetings() {
    const meetings = await Meeting.findAll({
        include: [
            {
                model: Note,
                required: true
            }
        ]
    });
    return meetings;
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
};
