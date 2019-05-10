module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.sequelize.transaction(async transaction => {
            // Create the meeting table.
            await queryInterface.createTable(
                'meeting',
                {
                    id: {
                        type: Sequelize.UUID,
                        defaultValue: Sequelize.UUIDV4(),
                        allowNull: false,
                        primaryKey: true
                    },
                    createdAt: { type: Sequelize.DATE, allowNull: false },
                    updatedAt: { type: Sequelize.DATE, allowNull: false },
                    startAt: { type: Sequelize.DATE, allowNull: false },
                    title: { type: Sequelize.TEXT, allowNull: false }
                },
                { freezeTableName: true, transaction }
            );
            await queryInterface.addIndex('meeting', ['createdAt'], { transaction });

            // Create the note table.
            await queryInterface.createTable(
                'note',
                {
                    id: {
                        type: Sequelize.UUID,
                        defaultValue: Sequelize.UUIDV4(),
                        allowNull: false,
                        primaryKey: true
                    },
                    createdAt: { type: Sequelize.DATE, allowNull: false },
                    updatedAt: { type: Sequelize.DATE, allowNull: false },
                    text: { type: Sequelize.TEXT, allowNull: false },
                    meetingId: {
                        type: Sequelize.UUID,
                        allowNull: false,
                        onDelete: 'CASCADE',
                        references: {
                            model: 'meeting',
                            key: 'id'
                        }
                    }
                },
                { freezeTableName: true, transaction }
            );
            await queryInterface.addIndex('note', ['createdAt'], { transaction });
            await queryInterface.addIndex('note', ['meetingId'], { transaction });
        })
};
