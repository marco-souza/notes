const Sequelize = require('sequelize');
const database = require('../lib/Database');
const Meeting = require('./Meeting');

const Note = database.define(
    'note',
    {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4(),
            primaryKey: true
        },

        text: {
            type: Sequelize.TEXT,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        indexes: [
            { fields: ['createdAt'] },
            { fields: ['meetingId'] },
            { fields: ['deletedAt'] },
        ]
    }
);

Note.belongsTo(Meeting, {
    foreignKey: { allowNull: false },
    onDelete: 'CASCADE'
});

Meeting.hasMany(Note);

module.exports = Note;
