require("dotenv").config();

const express = require("express");
const streamifier = require("streamifier");

const cloudinary = require("./Config/cloudinary");
const upload = require("./Config/multer");

const app = express();

// # SingleFiles
app.post("/singlefile", (req, res) => {
  const upload_stream = cloudinary.uploader.upload_stream(
    { folder: "stream_uploads" },
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ url: result.secure_url });
    },
  );

  req.pipe(upload_stream);
});

// # MultipleFiles
app.post("/multiplefiles", upload.array("files", 10), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }

    const uploadPromises = req.files.map((file) => {
      return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "multiple_stream" },
          (err, result) => {
            if (err) return reject(err);
            resolve(result.secure_url);
          },
        );
        streamifier.createReadStream(file.buffer).pipe(uploadStream);
      });
    });
    const uploadedurls = await Promise.all(uploadPromises);
    return res
      .status(200)
      .json({ data: uploadedurls, message: "Featched Successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.listen(5500, () => console.log("Server running on port 5500"));
