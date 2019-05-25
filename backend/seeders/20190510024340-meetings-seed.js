const uuid4 = require('uuid4');
const faker = require('faker');

const generateMeetingsAndNotes = (numMeetings = 20, numNotes = 10) =>
    Array(faker.random.number(numMeetings))
        .fill(true)
        .map(() => {
            const meetingId = uuid4();
            const meeting = {
                id: meetingId,
                createdAt: faker.date.past(),
                updatedAt: faker.date.past(),
                title: faker.company.companyName(),
                startAt: faker.date.past()
            };

            const notes = Array(faker.random.number(numNotes))
                .fill(true)
                .map(() => ({
                    meetingId,
                    text: faker.lorem.paragraph(),
                    createdAt: faker.date.past(),
                    updatedAt: faker.date.past(),
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
            console.log('Seed notes', notes);
            await queryInterface.bulkInsert('note', notes, {
                transaction
            });
        })
};
