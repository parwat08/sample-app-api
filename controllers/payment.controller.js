const _ = require("lodash");
const router = require("express").Router();

const Payment = require("../models/paymentHistory.model");

/* eslint-disable no-underscore-dangle */
router
  .route("/payment")
  .get((req, res) => {})
  .post((req, res) => {});

module.exports = router;
