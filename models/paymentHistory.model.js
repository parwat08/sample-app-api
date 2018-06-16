const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentHistory = new Schema({
    customerID: {
        type: Schema.Types.ObjectId,
        ref: 'customer-details',
        required: true,
    },
    paymentDate: {
        type: Date,
        required: true,
    },
    paymentAmount: {
        type: Number,
        required: true,
        default: 20,
    },
});

module.exports = mongoose.model('payment-history', paymentHistory);
