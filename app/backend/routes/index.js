
const bodyParser = require('koa-body');
const Router = require('koa-router');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const koaJWT = require('koa-jwt');

const router = new Router()

const jwtMiddleware = koaJWT({ secret: 'gna secret'});

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

const investmentSchema = new mongoose.Schema(
    {
        userId: { type: String },
        investedAmount: { type: String },
        investmentName: { type: String },
        investmentLink: { type: String },
        investmentDescription: { type: String},
    },
    { timestamps: true }
);

const investmentModel = mongoose.model('investments', investmentSchema);

router.post('/login', bodyParser(), async (ctx) => {
    const { username, password } = ctx.request.body;
    const userDB = await userModel.findOne({ "username": username });
    if (username == userDB.username && password == userDB.password) {
        const token = jwt.sign({ id: userDB._id, username: userDB.username }, 'gna secret', { expiresIn: 129600 }); // Sigining the token
        ctx.body = {token};
    } else {
        ctx.status = 401;
    }
   
});

router.post('/signup', bodyParser(), async (ctx) => {
    const { username, password } = ctx.request.body;
    const user = await userModel.create({ username, password });
    if (!user) {
        return;
    }
    ctx.body = { user }   
});

router.post('/create-investment', jwtMiddleware, bodyParser(), async (ctx) => {
    const { userId, investedAmount, investmentName, investmentLink, investmentDescription } = ctx.request.body;
    const investment = await investmentModel.create({ userId, investedAmount, investmentName, investmentLink, investmentDescription });
    if (!investment) {
        return;
    }
    ctx.body = { investment }   
});

router.post('/delete-investment', jwtMiddleware, bodyParser(), async (ctx) => {
    const { investmentId } = ctx.request.body;
    const investment = await investmentModel.remove({ "_id": investmentId });
    if (!investment) {
        return;
    }
    ctx.body = { investment }
});

router.post('/edit-investment', jwtMiddleware, bodyParser(), async (ctx) => {
    const { investmentId, investedAmount, investmentName, investmentLink, investmentDescription } = ctx.request.body;
    const investment = await investmentModel.update({ "_id": investmentId }, { $set: { investedAmount, investmentName, investmentLink, investmentDescription }});
    if (!investment) {
        return;
    }
    ctx.body = { investment }
});

router.post('/get-investments', jwtMiddleware, bodyParser(), async(ctx) => {
    const { userId } = ctx.request.body;
    console.log(userId);
    const investments = await investmentModel.find({ userId });
    if (!investments) {
        return;
    }
    ctx.body = { investments };
});

router.get('/', jwtMiddleware, (ctx) => {
    ctx.body = "you are authenticated";
});

module.exports = router.routes();