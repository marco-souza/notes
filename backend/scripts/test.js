process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

// eslint-disable-next-line
const jest = require('jest');

const argv = process.argv.slice(2);
argv.push('--runInBand');

// Use onlyChanged if we didn't specify a relative path
if (!process.env.CI && !argv.find(arg => !arg.startsWith('-'))) {
    argv.push('--onlyChanged');
}

// Watch unless we run the script on CI or in coverage mode
if (!process.env.EXIT_TEST_ON_RUN) {
    argv.push('--watch');
}

jest.run(argv);
