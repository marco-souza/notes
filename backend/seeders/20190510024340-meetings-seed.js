const uuid4 = require('uuid4');

module.exports = {
    up: queryInterface =>
        queryInterface.sequelize.transaction(async transaction => {
            await queryInterface.bulkInsert(
                'meeting',
                [
                    {
                        id: uuid4(),
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        title: 'Standup',
                        startAt: new Date()
                    },
                    {
                        id: uuid4(),
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        title: 'Sprint Planning',
                        startAt: new Date()
                    },
                    {
                        id: uuid4(),
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        title: 'Team Lunch',
                        startAt: new Date()
                    },
                    {
                        id: uuid4(),
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        title: 'Dinner',
                        startAt: new Date()
                    },
                    {
                        id: uuid4(),
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        title: 'Dinner',
                        startAt: new Date('December 15, 1995 03:24:00')
                    },
                    {
                        id: uuid4(),
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        title: 'Dinner',
                        startAt: new Date('December 17, 1995 03:24:00')
                    },
                    {
                        id: uuid4(),
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        title: 'Dinner',
                        startAt: new Date('December 18, 1995 03:24:00')
                    }
                ],
                { transaction }
            );
        })
};
