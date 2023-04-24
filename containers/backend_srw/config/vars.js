require("dotenv").config();
console.log("ENV: " + process.env.ENV);

module.exports = {
  env: process.env.ENV ?? "development",
  port: process.env.PORT_BACKEND_SRW ?? 3010,
};
