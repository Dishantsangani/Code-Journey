// const cluster = require("cluster");
// const os = require("os");

// const totalcpus = os.cpus().length;
// if (cluster.isPrimary) {
//   console.log(`Primary ${process.pid} is running`);

//   // Fork workers
//   for (let i = 0; i < totalcpus; i++) {
//     cluster.fork();
//   }

//   cluster.on("exit", (worker) => {
//     console.log(`Worker ${worker.process.pid} died. Starting a new one...`);
//     cluster.fork();
//   });
// } else {
//   const express = require("express");
//   const app = express();

//   app.use(express.json());

//   // GET APIs
//   app.get("/home", (req, res) => {
//     res.send("Welcome to Home!");
//   });

//   app.get("/about", (req, res) => {
//     res.send("This is the About page.");
//   });

//   app.get("/contact", (req, res) => {
//     res.send("Contact us at contact@example.com");
//   });

//   app.get("/services", (req, res) => {
//     res.send("Here are our services.");
//   });

//   // Example POST API
//   app.post("/data", (req, res) => {
//     const body = req.body;
//     res.send({ message: "Data received successfully!", body });
//   });

//   // Server listening
//   app.listen(3000, () => {
//     console.log(`Worker ${process.pid} listening on port 3000`);
//   });
// }

// server.js
// import cluster from "cluster";
// import os from "os";
// import express from "express";

const cluster = require("cluster");
const os = require("os");
const express = require("express");

const totalCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers equal to number of CPU cores
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }

  // Restart worker if it dies
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Starting a new one...`);
    cluster.fork();
  });
} else {
  // Worker processes run the Express server
  const app = express();
  app.use(express.json());

  app.get("/home", (req, res) => {
    res.send(`Welcome to Home! Handled by worker ${process.pid}`);
  });

  app.get("/about", (req, res) => {
    res.send(`About page. Handled by worker ${process.pid}`);
  });

  app.post("/data", (req, res) => {
    res.send({
      message: "Data received!",
      worker: process.pid,
      body: req.body,
    });
  });

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Worker ${process.pid} listening on port ${PORT}`);
  });
}
