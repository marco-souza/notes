const Sequelize = require('sequelize');
const config = require('./config');
const app = require('./app');

// Use extended stack traces in dev and local environments
if (config.app.env === 'local') {
    // eslint-disable-next-line global-require
    require('longjohn');
    Sequelize.Promise.config({ longStackTraces: true });
}

async function startServer() {
    const server = app.listen(config.app.port, () => {
        const pid = process.pid;
        // eslint-disable-next-line no-console
        console.info(`Server started, listening on: 0.0.0.0:${config.app.port}, pid: ${pid}`);
    });

    return server;
}

async function main() {
    const server = await startServer();
    return server;
}

main();
