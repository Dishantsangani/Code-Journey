const express = require("express");
const pool = require("../../Database/db");
const app = express();
const port = 5500;

app.use(express.json());

app.get("/getdata", async (req, res) => {
  const { page = 1, limit = 3 } = req.body || {};

  const pagenum = parseInt(page);
  const limitnum = parseInt(limit);

  const offset = (pagenum - 1) * limitnum;

  try {
    const result = await pool.query(
      "SELECT * FROM employees ORDER BY employee_id LIMIT $1 OFFSET $2",
      [limitnum, offset]
    );
    return res.status(200).json({ data: result.rows });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server Started At Port http://localhost:${port}`);
});
