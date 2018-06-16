const express = require("express");
const chalk = require("chalk");

const app = express();
/* eslint-disable no-console */
require("./config/dbConnection")(app);
const port = process.env.PORT || require("./config/keysAndUrl").app.port;

require("./config/express.config")(app);
require("./routes")(app);

app.listen(port, err => {
  if (err) return console.log(chalk.bold.red(err));
  return console.log(
    chalk.green.bold(`Express server listening on port: ${port}`)
  );
});
