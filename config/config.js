require("dotenv").config();
const Sequelize = require("sequelize");

const env = [process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD];
// console.log("================");
// console.log(env);
// console.log("================");
// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(...env, {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    });

module.exports = sequelize;
