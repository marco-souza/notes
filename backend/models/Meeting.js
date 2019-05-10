const Sequelize = require('sequelize');
const database = require('../lib/Database');

const Meeting = database.define(
    'meeting',
    {
        id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4(), primaryKey: true },
        startAt: { allowNull: false, type: Sequelize.DATE },
        title: Sequelize.TEXT
    },
    {
        freezeTableName: true,
        indexes: [
            { fields: ['createdAt'] }
        ]
    }
);

module.exports = Meeting;
