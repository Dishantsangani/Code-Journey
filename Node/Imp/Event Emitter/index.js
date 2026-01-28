require("./Utils/Event-emmiter/payment");
require("./Utils/Event-emmiter/email");

const { placeorder } = require("./Utils/Event-emmiter/order");
placeorder({ order: "1 macbook" });

const EventEmmiter = require("events");

const event = new EventEmmiter();

event.once("hel", () => {
  console.log("Connected only once");
});

event.on("hel", () => {
  console.log("hello form 1");
});
event.on("hel", () => {
  console.log("hello form 2");
});

event.emit("hel");
event.removeAllListeners("hel");
