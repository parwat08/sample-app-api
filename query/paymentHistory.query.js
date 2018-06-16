const PaymentHistory = require("../models/paymentHistory.model");

exports.getPaymentHistory = () => {};

exports.postPaymentHistory = async paymentHistoryDetails => {
  try {
    let payment = PaymentHistory.create(paymentHistoryDetails);
    return Promise.resolve(payment);
  } catch (error) {
    Promise.reject(error);
  }
};
