const bodyParser = require('koa-bodyparser');
const Koa = require('koa');
const KoaCompress = require('koa-compress');
const helmet = require('koa-helmet');
const router = require('./routes');
const { cors } = require('./middleware');

const app = new Koa();
app.use(helmet({ frameguard: false }));
app.use(cors());
app.use(KoaCompress());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
