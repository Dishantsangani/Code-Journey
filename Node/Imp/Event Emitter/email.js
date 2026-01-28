const events = require("./eventsBus");
events.on("orderplaced", () => {
  console.log("Sending the email");
});
