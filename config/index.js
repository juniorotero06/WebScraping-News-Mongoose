if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_NAME: process.env.DB_NAME,
};
