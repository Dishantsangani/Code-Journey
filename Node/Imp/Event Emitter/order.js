const events = require("./eventsBus");

const placeorder = (Order) => {
  console.log("orderplaced", Order);
  events.emit("orderplaced", Order);
};

module.exports = {
  placeorder,
};
