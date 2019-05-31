const path = require('path');

module.exports = {
    app: {
        url: process.env.APP_URL || 'http://localhost:3000',
        port: process.env.PORT || 3000,
        env: process.env.NODE_ENV || 'local',
        projectRoot: process.env.PROJECT_ROOT || path.join(__dirname, '..'),
        domain: process.env.APP_DOMAIN || 'localhost'
    },

    cors: {
        origin: process.env.CORS_ORIGIN || 'http://localhost:3002'
    },

    database: {
        database: process.env.DB_NAME || 'main',
        options: {
            dialect: 'sqlite',
            logging: false,
            storage: './database.sqlite3',
            operatorsAliases: false
        }
    },

    webApp: {
        url: process.env.WEB_APP_URL || 'http://localhost:3002'
    }
};
