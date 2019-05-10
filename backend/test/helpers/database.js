const database = require('../../lib/Database');
const models = require('../../models');

/**
 * To call in beforeAll, will sync the database using force if needed.
 * @returns {Promise<undefined>} A promise that resolves when the database is synced.
 */
async function setUpDatabase() {
    if (!global.database) {
        global.database = database;
        await global.database.sync({ force: true });
    } else {
        await global.database.sync();
    }
}

/**
 * To call in afterAll, will close the database.
 * @returns {Promise<undefined>} A promise that resolves when the database is closed.
 */
async function closeDatabase() {
    await global.database.close();
}

/**
 * To call in beforeEach, will clean up all the table of the database.
 * @returns {Promise<undefined>} A promise that resolves when all the tables are clean.
 */
async function cleanDatabase() {
    for (const model of Object.values(models)) {
        await model.destroy({ where: {}, force: true });
    }
}

module.exports = {
    setUpDatabase,
    closeDatabase,
    cleanDatabase
};
