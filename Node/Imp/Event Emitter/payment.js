const events = require("./eventsBus");

events.on("orderplaced", () => {
  console.log("Payment UNDER THE PROCESS");
});
