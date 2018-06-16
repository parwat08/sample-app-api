const BASE_URL = require("../config/keysAndUrl").app.baseURL

module.exports = function(app) {
    app.use(`${BASE_URL}`, require("../controllers/customer.controller"))
    app.use(`${BASE_URL}`, require("../controllers/payment.controller"))
    app.use(`${BASE_URL}`, require("../controllers/subscription.controller"))
};
