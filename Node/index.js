const express = require("express");
const pool = require("./db");
const app = express();
const port = 5500;

app.use(express.json());

app.get("/getdata", async (req, res) => {
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
    LIMIT $2
    OFFSET $3`;

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
