const investment = require('../models/investment');


const createInvestment = async (ctx) => {
    const newInvestment = new investment(ctx.request.body);
    const savedInvestment = await newInvestment.save();
    ctx.body = savedInvestment;
};

const getInvestments = async (ctx) => {
    const investments = await investment.find({});
    ctx.body = investments;
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
    createInvestment,
    getInvestments,
    updateInvestment,
    deleteInvestment
};