const { Meeting } = require('../../models');

/**
 * Get the list of meetings from the DB.
 * @public
 * @returns {Promise<Array<Object>>} The list of meetings.
 */
async function getMeetings() {
    const meetings = await Meeting.findAll();
    return meetings.map(meeting => meeting.get({ plain: true }));
}

module.exports = {
    getMeetings
};
