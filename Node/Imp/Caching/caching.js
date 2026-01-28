const express = require("express");
const app = express();
const port = 3000;

const cache = {};

app.get("/data", (req, res) => {
  const key = "myData";

  if (cache[key]) {
    console.log("Serving from cache");
    return res.json({ data: cache[key], source: "cache" });
  }

  const fetchedData = { name: "Dishant", role: "Developer" };

  cache[key] = fetchedData;
  console.log("Fetching and caching data");

  res.json({ data: fetchedData, source: "database" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
