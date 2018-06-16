const Customer = require("../models/customer.model");

exports.getCustomer = () => {};

exports.postCustomer = async customerDetails => {
  try {
    let cust = Customer.create(customerDetails);
    return Promise.resolve(cust);
  } catch (error) {
    Promise.reject(error);
  }
};
