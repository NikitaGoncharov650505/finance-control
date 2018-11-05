const userService = require('../models/user');

const addInvestment = async (ctx) => {
    const {
      id,
      investmentName,
      investmentAmount,
      investmentLink,
      investmentDescription
    } = ctx.request.body;
    const user = await userService.findById(id);
    user.investments.push({
      investmentName,
      investmentAmount,
      investmentLink,
      investmentDescription
    });
    const updatedUser = await user.save();    
    ctx.body = { updatedUser };
};

const getInvestments = async (ctx) => {
    const { id } = ctx.request.body;
    const user = await userService.findById(id);
    const investments = user.investments;
    ctx.body = { investments };
};

const updateInvestment = async (ctx) => {
    const {
        id,
        index,
        investmentName,
        investmentAmount,
        investmentLink,
        investmentDescription
    } = ctx.request.body;
    const user = await userService.findById(id);
    console.log(user);
    /*user.investments[index].investmentName = investmentName;
    user.investments[index].investmentAmount = investmentAmount;
    user.investments[index].investmentLink = investmentLink;
    user.investments[index].investmentDescription = investmentDescription;*/
    if (index > -1 && index <= user.investments.length - 1) {
        user.investments.splice(index, 1);
        user.investments.push({
            investmentName,
            investmentAmount,
            investmentLink,
            investmentDescription
        });
        const updatedUser = await user.save()
        ctx.body = { updatedUser };
    } else {
        ctx.body = {};
    }
};

const deleteInvestment = async (ctx) => {
    const {
        id,
        index
    } = ctx.request.body;
    const user = await userService.findById(id);
    if (index > -1 && index <= user.investments.length - 1) {
        user.investments.splice(index, 1);
        const updatedUser = await user.save()
        ctx.body = { updatedUser };
    } else {
        ctx.body = {};
    }
    
};

module.exports = {
    addInvestment,
    getInvestments,
    updateInvestment,
    deleteInvestment
};
