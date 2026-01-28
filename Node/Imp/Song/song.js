const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 8000;

// Audio Streamming
app.get("/audio", (req, res) => {
  const audioPath = path.join(__dirname, "song.mp3");
  const stat = fs.statSync(audioPath);
  const range = req.headers.range;

  if (!range) {
    res.writeHead(200, { "Content-Type": "audio/mpeg" });
    fs.createReadStream(audioPath).pipe(res);
    return;
  }

  const parts = range.replace(/bytes=/, "").split("-");
  const start = parseInt(parts[0], 10);
  const end = parts[1] ? parseInt(parts[1], 10) : stat.size - 1;
  const chunksize = end - start + 1;

  res.writeHead(206, {
    "Content-Range": `bytes ${start}-${end}/${stat.size}`,
    "Accept-Ranges": "bytes",
    "Content-Length": chunksize,
    "Content-Type": "audio/mpeg",
  });

  fs.createReadStream(audioPath, { start, end }).pipe(res);
});

// Video Streamming

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
