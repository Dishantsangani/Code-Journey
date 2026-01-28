const express = require("express");
const upload = require("./Upload");
const pool = require("../../../Database/db");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 9800;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello From Server");
});

app.post("/singlefile", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    const savedpath = `upload/${file.originalname}`;

    const ImageQuery = "INSERT INTO fileupload (filepath) VALUES ($1)";

    await pool.query(ImageQuery, [savedpath]);

    return res.status(201).json({ message: "file send succesfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.post("/multiplefiles", upload.array("file"), async (req, res) => {
  try {
    const file = req.files;

    const queries = file.map((file) => {
      const savedpath = `upload/${file.originalname}`;
      const ImageQuery = "INSERT INTO fileupload (filepath) VALUES ($1)";
      return pool.query(ImageQuery, [savedpath]);
    });
    await Promise.all(queries);
    return res.status(201).json({ message: "file send succesfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => console.log(`Server Started At Port ${port} `));
