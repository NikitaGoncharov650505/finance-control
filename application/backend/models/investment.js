const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        investmentName: { type: String },
        investmentAmount: { type: String },
        investmentLink: { type: String },
        investmentDescription: { type: String },
    },
    { timestamps: true }
);

const user = mongoose.model('User', userSchema);

module.exports = user;
