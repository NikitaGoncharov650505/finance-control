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
    const id = ctx.params.id;
    const dbInvestment = await investment.findById(id);
    dbInvestment.investmentAmount = '999';
    const updatedInvestment = await dbInvestment.save();
    ctx.body = updatedInvestment;
};

const deleteInvestment = async (ctx) => {
    const id = ctx.params.id
    const dbInvestment = await investment.findById(id)
    const deletedInvestment = await dbInvestment.remove()
    ctx.body = deletedInvestment;
};

module.exports = {
    addInvestment,
    getInvestments,
    updateInvestment,
    deleteInvestment
};
