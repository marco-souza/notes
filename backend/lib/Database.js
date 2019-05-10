const Sequelize = require('sequelize');
const {
    database: { database, options }
} = require('../config');

const sequelize = new Sequelize(database, null, null, options);

module.exports = sequelize;
