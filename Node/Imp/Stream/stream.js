const fs = require("fs");

const writable = fs.createWriteStream("output.txt");

writable.write("Hello "); 
setTimeout(() => {
  writable.write("World "); 
  writable.write("from Node.js"); 

  writable.end();
}, 2000);

writable.on("finish", () => {
  console.log("All chunks written to output.txt!");
});
    