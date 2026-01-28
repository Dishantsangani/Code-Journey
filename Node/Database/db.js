const { Pool } = require("pg");
require("dotenv").config({ path: __dirname + "/../.env" });

const pool = new Pool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
});

pool
  .connect()
  .then(() => console.log("Database Connected"))
  .catch((err) => console.error("Database Connection Error", err));

module.exports = pool;
