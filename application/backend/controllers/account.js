const userService = require('../models/user');

const signin = async (ctx) => {
    const { login, password } = ctx.request.body;
    console.log(ctx.request.body);
    const user = await userService.findOne({ "login": login });
    console.log(user);
    if (user && user.password === password) {
        ctx.body = { status: 'ok'};
    } else {
        ctx.body = { status: 'error' };
    }
};

const signup = async (ctx) => {
    const { login, password, confirmedPassword } = ctx.request.body;
    console.log(ctx.request.body);
    const dbUser = await userService.findOne({ "login": login });
    console.log(dbUser);
    if (dbUser) {
        ctx.body = { status: 'User with this login exists'};
    } else if (!dbUser && password === confirmedPassword) {
        const newUser = await userService.create({
            login: login,
            password: password,
            investments: [],
        });
        if (newUser) {
            ctx.body = { status: 'User has been created'};
        } else {
            ctx.body = { status: 'Unexpected error' };
        }
        
    } else {
        ctx.body = { status: 'Unexpected error' };
    }
};

module.exports = {
    signin,
    signup
};