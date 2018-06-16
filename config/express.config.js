const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const cors = require("cors");

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(expressValidator());
  app.use(cors());
};
