const Koa = require('koa');
const logger = require('koa-morgan');
const bodyParser = require('koa-body');
const Router = require('koa-router');
const jwt = require('jsonwebtoken');
const koaJWT = require('koa-jwt');
const cors = require('koa-cors')

const router = new Router();

const app = new Koa();

const koaOptions = {
    origin: true,
    credentials: true
};

app.use(cors(koaOptions));

let users = [
    {
        id: 1,
        username: 'test',
        password: 'asdf123'
    },
    {
        id: 2,
        username: 'test2',
        password: 'asdf12345'
    }
];



const jwtMiddleware = koaJWT({ secret: 'gna secret'});

router.post('/login', bodyParser(), (ctx) => {
    const { username, password } = ctx.request.body;

    const user = users[0];
    if (username == user.username && password == user.password) {
        const token = jwt.sign({ id: user.id, username: user.username }, 'gna secret', { expiresIn: 129600 }); // Sigining the token
        ctx.body = {token};
    } else {
        ctx.status = 401;
    }
   
});

router.get('/', jwtMiddleware, (ctx) => {
    ctx.body = "you are authenticated";
});




app.use(logger('tiny'));

app.use(router.routes());

app.listen(8080);
