// // Its A Promise Is Object Representing The Eventual Complitions
// fetch("https://api.github.com/users/Dishantsangani");
// // Promise 1
// const promiseone = new Promise(function (resolve, reject) {
//   // Do an Async Task
//   // DB Calls, Network calls
//   setTimeout(function () {
//     console.log("Async Task is Complate");
//     resolve();
//   }, 1000);
// });
// // .then is Resolve Connection
// // that always Consider To Callback Functions
// promiseone.then(function () {
//   console.log("Promise Consumed");
// });

// EX.2
// // Promise 2
// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async Task 2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Async 2 Resolved");
// });

// EX.3
//  Promise 3
// const promisethree = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve({ username: "Dishant", email: "dishant@gmail.com" });
//   }, 1000);
// });

// promisethree.then(function (user) {
//   console.log(user);
// });

// Ex.4
// const promisefour = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "dev", password: "New Password" });
//     } else {
//       reject("Error Something Went Wrong");
//     }
//   }, 1000);
// });
// promisefour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => console.log("The Promise Either Resolved & Reject"));

//  Ex.5
// const promisefive = new Promise((reject, resolve) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "JavaScript", password: "132" });
//     } else {
//       reject("ERROR Js Went Wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFve() {
//   try {
//     const response = await promisefive;
//     console.log("response: ", response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromiseFve();

// Api
// async function getusers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("apierr", error);
//   }
// }
// getusers();

// ex.6
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
