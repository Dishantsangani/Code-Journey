const express = require("express");
const cors = require("cors");
const pool = require("../../Database/db");

const app = express();
const port = 5500;

app.use(cors());
app.use(express.json());

app.get("/getdata", async (req, res) => {
  try {
    const search = req.query.search || "";
    const sorted = req.query.sorted || "employee_name";
    const order = req.query.order || "asc";

    const validSorted = ["employee_name", "employee_email", "employee_mo"];
    const validOrder = ["asc", "desc"];

    const sortedBy = validSorted.includes(sorted) ? sorted : "employee_name";
    const orderBy = validOrder.includes(order.toLowerCase())
      ? order.toLowerCase()
      : "asc";

    const GET_EMPLOYEE = `
      SELECT * FROM employees
      WHERE employee_name ILIKE $1
      OR employee_email ILIKE $1
      ORDER BY ${sortedBy} ${orderBy}`;

    const result = await pool.query(GET_EMPLOYEE, [`%${search}%`]);

    return res.status(200).json({ data: result.rows });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.get("/getdataall", async (req, res) => {
  try {
    const search = req.query.search || "";
    const sorted = req.query.sorted || "employee_name";
    const order = req.query.order || "asc";
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;

    const offset = (page - 1) * limit;

    const GET_EMPLOYEE = `
    SELECT * FROM employees
    WHERE employee_name ILIKE $1
    OR employee_email ILIKE $1
    ORDER BY ${sorted} ${order}
    LIMIT ${limit}
    OFFSET ${offset}`;

    const result = await pool.query(GET_EMPLOYEE, [
      `%${search}%`,
      limit,
      offset,
    ]);
    return res.status(200).json({ data: result.rows });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
app.listen(port, () => console.log(`Server Started At Port ${port}`));
