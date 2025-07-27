// // Aync : Async Function is Running In Background
// // Asynchronous js : Asynchronous javascript t things can happen independently of the main program flow.

// // Resolve : Resolve Means Promise Has Settle Successfully
// // Reject : Reject Means Promise Has Not Settled Successfully

async function dev() {
  let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let data = await x.json();
  return data;
}

async function main() {
  console.log("loading modules");
  let data = await dev();
  console.log("data: ", data);
  console.log("loading");
}
main();
