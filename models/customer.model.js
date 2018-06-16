const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerDetails = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    address1: String,
    address2: String,
    city: String,
    country: String,
    zipCode: Number,
    ccNumber: {
        type: Number,
        maxlength: 16
    },
    cExpiryDate: {
        type: Date
    },
    cvv: {
        type: Number,
        maxlength: 3
    }
});

module.exports = mongoose.model('customer-details', customerDetails);
