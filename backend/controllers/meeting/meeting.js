const { Meeting, Note } = require('../../models');

/**
 * Get the list of meetings from the DB.
 * @public
 * @param {object} body - request body
 * @param {object} params - request params
 * @param {object} ctx - koa context
 * @returns {Promise<Array<Object>>} The list of meetings.
 */
async function getMeetings(body, params, ctx) {
    const { sort_date: sortOrder, limit } = ctx.query;

    // Define sort
    // TODO: validate order passed
    const order = sortOrder && [['startAt', sortOrder]];

    // Include notes
    const include = [
        {
            model: Note
        }
    ];

    const meetings = await Meeting.findAll({
        include,
        order,
        limit
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
async function createOrUpdateMeetingNote({ text, id } = {}, params) {
    const note = await (!id
        ? Note.create({
              meetingId: params.id,
              text
          })
        : Note.findOne({
              where: {
                  id
              }
          }).then(record =>
              record.update({
                  text
              })
          ));
    return note;
}

module.exports = {
    getMeetings,
    createOrUpdateMeetingNote
};
