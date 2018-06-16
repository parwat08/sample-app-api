const Subscription = require("../models/subscription.model");

exports.getsubscription = () => {};

exports.postSubscription = async subscriptionDetails => {
  console.log('​subscriptionDetails', subscriptionDetails);
  try {
    let subs = Subscription.create(subscriptionDetails).catch(function (err) {
      console.log('ssserrr', err)
    })
    return Promise.resolve(subs);
  } catch (error) {
    Promise.reject(error);
  }
};
