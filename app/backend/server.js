const Koa = require('koa');
const logger = require('koa-morgan');
const bodyParser = require('koa-body');
const Router = require('koa-router');
const jwt = require('jsonwebtoken');
const koaJWT = require('koa-jwt');
const cors = require('koa-cors');
const mongoose = require('mongoose'); 

const router = new Router();

const app = new Koa();





mongoose.connect('mongodb://testUser:testUser123456789@ds161653.mlab.com:61653/test2');
const userSchema = new mongoose.Schema(
    {
        id: { type: String },
        username: { type: String },
        password: { type: String },
    },
    { timestamps: true }
);

const userModel = mongoose.model('users', userSchema);








const koaOptions = {
    origin: true,
    credentials: true
};

app.use(cors(koaOptions));


const jwtMiddleware = koaJWT({ secret: 'gna secret'});

router.post('/login', bodyParser(), async (ctx) => {
    const { username, password } = ctx.request.body;

    const userDB = await userModel.findOne({ "username": username });

    if (username == userDB.username && password == userDB.password) {
        const token = jwt.sign({ id: userDB.id, username: userDB.username }, 'gna secret', { expiresIn: 129600 }); // Sigining the token
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
