const Koa = require('koa');
const logger = require('koa-morgan');
const cors = require('koa-cors');
const routes = require('./routes'); 

const app = new Koa();

const koaOptions = {
    origin: true,
    credentials: true
};

app.use(cors(koaOptions));
app.use(logger('tiny'));
app.use(routes);
app.listen(8080);
