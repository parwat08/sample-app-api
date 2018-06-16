const mongoose = require('mongoose');
const addMonths = require('date-fns/add_months');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const subscription = new Schema({
    customerID: {
        type: ObjectId,
        ref: 'user',
        required: true,
    },
    paymentID: {
        type: ObjectId,
        ref: 'payment-history',
        required: true,
    },
    startDate: {
        type: Date,
        default: Date.now(),
    },
    endDate: {
        type: Date,
        default: addMonths(Date.now(), 1),
    },
    recurringDate: {
        type: Date,
        default: addMonths(Date.now(), 1),
    },
});

module.exports = mongoose.model('subscription', subscription);
