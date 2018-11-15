const Koa = require('koa');
const logger = require('koa-morgan');
const cors = require('koa-cors');
const routes = require('./routes'); 

class Server {
    constructor() {
        this.port = 8080;
    }

    run() {
        const app = new Koa();

        const koaOptions = {
            origin: true,
            credentials: true
        };
        
        app.use(cors(koaOptions));
        app.use(logger('tiny'));
        app.use(routes);
        app.listen(this.port);
    }
} 

const server = new Server();
server.run();
