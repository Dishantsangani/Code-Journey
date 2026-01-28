const express = require("express");
const cors = require("cors");
const pool = require("../../Database/db");

const app = express();
const port = 5500;

app.use(cors());
app.use(express.json());

app.get("/getdata", async (req, res) => {
  try {
    const GET_QUERY = await pool.query("SELECT * FROM employees");
    return res.status(200).json({ data: GET_QUERY.rows });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.post("/postdata", async (req, res) => {
  try {
    const { employee_name, employee_email, employee_mo, salary } = req.body;

    const CREATE_QUERY =
      "INSERT INTO employees (employee_name, employee_email, employee_mo, salary) VALUES ($1, $2, $3, $4)";

    await pool.query(CREATE_QUERY, [
      employee_name,
      employee_email,
      employee_mo,
      salary,
    ]);

    return res.status(200).json({ message: "Created Successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.put("/updatedata/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { employee_name, employee_email, employee_mo, salary } = req.body;
    const UPDATE_QUERY =
      "UPDATE employees SET employee_name = $1, employee_email = $2, employee_mo = $3, salary = $4 WHERE employee_id = $5 ";
    await pool.query(UPDATE_QUERY, [
      employee_name,
      employee_email,
      employee_mo,
      salary,
      id,
    ]);
    return res.status(201).json({ message: "Updated Successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.delete("/deletedata/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const DELETE_QUERY = "DELETE FROM employees WHERE employee_id = $1";
    await pool.query(DELETE_QUERY, [id]);
    return res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => console.log(`Server Started At Port ${port}`));
