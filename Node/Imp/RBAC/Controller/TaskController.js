const pool = require("../../../Database/db");

module.exports = TaskController = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required" });
    }

    const INSERT_TASK_QUERY =
      "INSERT INTO task (title, description) VALUES ($1, $2)";

    const result = await pool.query(INSERT_TASK_QUERY, [title, description]);

    return res.status(201).json({ message: "Task created successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
