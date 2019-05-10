const MockDate = require('mockdate');

process.env.DB_NAME = process.env.DB_NAME || 'api_test';
process.env.REDIS_DB = 2;
process.env.WHITELISTED_TEAM_DOMAIN = 'test-WHITELISTED_TEAM_DOMAIN';
process.env.GOOGLE_CALENDAR_WEBHOOK_TOKEN = 'test-GOOGLE_CALENDAR_WEBHOOK_TOKEN';
process.env.TZ = 'UTC';

MockDate.set(new Date('2018-01-01T10:00:00.000Z'));
