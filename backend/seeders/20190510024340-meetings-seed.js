const uuid4 = require('uuid4');

const generateMeetingsAndNotes = (numMeetings = 5, numNotes = 3) =>
    Array(numMeetings)
        .fill(true)
        .map(() => {
            const meetingId = uuid4();
            const meeting = {
                id: meetingId,
                createdAt: new Date(),
                updatedAt: new Date(),
                title: 'Standup',
                startAt: new Date()
            };
            const note = {
                meetingId,
                createdAt: new Date(),
                updatedAt: new Date()
            };

            const notes = Array(numNotes)
                .fill(true)
                .map((_, i) => ({
                    ...note,
                    text: `bla ${i}`,
                    id: uuid4()
                }));

            return {
                meeting,
                notes
            };
        });

module.exports = {
    up: queryInterface =>
        queryInterface.sequelize.transaction(async transaction => {
            const seeds = generateMeetingsAndNotes(10);

            const meetings = seeds.map(item => item.meeting);
            console.log('Seed meetings');
            await queryInterface.bulkInsert('meeting', meetings, {
                transaction
            });

            const notes = seeds.map(item => item.notes).reduce((acc, cur) => [...acc, ...cur], []);
            console.log('Seed notes');
            await queryInterface.bulkInsert('note', notes, {
                transaction
            });
        })
};
