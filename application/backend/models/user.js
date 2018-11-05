const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema(
    {
        investmentName: { type: String },
        investmentAmount: { type: String },
        investmentLink: { type: String },
        investmentDescription: { type: String },
    }
);

const userSchema = new mongoose.Schema(
    {
        login: { type: String },
        password: { type: String },
        investments: { type: Array },
    },
    { timestamps: true }
);

const user = mongoose.model('user', userSchema);

module.exports = user;
