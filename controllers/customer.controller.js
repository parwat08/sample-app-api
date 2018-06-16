const _ = require("lodash");
const router = require("express").Router();

const { getCustomer, postCustomer } = require("../query/customer.query");
const { postPaymentHistory } = require("../query/paymentHistory.query");
const { postSubscription } = require("../query/subscription.query");
/* eslint-disable no-underscore-dangle */
router
  .route("/customer")
  .get((req, res) => {})
  .post(async (req, res) => {
    try {
      req.assert("firstName", "firstName must be entered!").notEmpty();
      req.assert("lastName", "lastName must be entered!").notEmpty();
      req.assert("address1", "address1 must be entered!").notEmpty();
      req.assert("city", "city must be entered!").notEmpty();
      req.assert("country", "country must be entered!").notEmpty();
      req.assert("zipCode", "zipCode must be entered!").notEmpty();
      req.assert("ccNumber", "ccNumber must be entered!").notEmpty();
      req.assert("cExpiryDate", "cExpiryDate must be entered!").notEmpty();
      req.assert("cvv", "cvv must be entered!").notEmpty();

      const errors = req.validationErrors();
      if (errors) return res.status(400).send(errors);

      let date = req.body.cExpiryDate;

      let month = date.slice(0, 2);
      let year = date.slice(2, 6);

      let body = _.pick(req.body, [
        "firstName",
        "lastName",
        "address1",
        "address2",
        "city",
        "country",
        "zipCode",
        "ccNumber",
        "cvv"
      ]);

      let customerBodyRequest = {
        ...body,
        cExpiryDate: new Date(year, month)
      };

      let customer = await postCustomer(customerBodyRequest);

      if (customer) {
        let customerID = customer._id;
        let paymentDetails = {
          customerID,
          paymentDate: Date.now(),
          paymentAmount: 20
        };

        let paymentHistory = await postPaymentHistory(paymentDetails);
        if (paymentHistory) {
          let paymentID = paymentHistory._id;
          let subscriptionDetails = {
            customerID,
            paymentID
          };

          let subscription = await postSubscription(subscriptionDetails);
          if (subscription)
            return res.send({
              success: true
            });
        }
      }
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error
      });
    }
  });

module.exports = router;
