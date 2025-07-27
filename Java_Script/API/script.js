// Fetch API
// API = Appliction programming interface.
// The fetch api provides an interface for fetching (sending/receving)recources.
// it use Request and Rsponse objects.
// The Fetch() method s used to fetch a resource (data).
// let promise = fetch(url,[options])

// Understanding Terms
// Ajax : is asynchronous js & xml
// Json : is javascript Object Notation
// json()method : returns a second promise that resolves with the result of parsingb the response body text as JSON(input is JSON, utput is js object)

// API
// Ex.1
// const UrL = "https://cat-fact.herokuapp.com/facts";
// const factPara = document.querySelector("#fact");
// const btn = document.querySelector("#btn");

// const getfacts = async () => {
//   console.log("getting data..");
//   let response = await fetch(UrL);
//   console.log(response);
//   let data = await response.json();
//   factPara.innerText = data[4].text;
// };
// btn.addEventListener("click", getfacts);

// Ex.2
// function getfacts() {
//   fetch(UrL)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       factPara.innerText = data[4].text;
//     });
// }
// btn.addEventListener("click", getfacts);

// Requests & Response
// HTTP Verbs
// HTTP response headers also contain details about the response such as content Type, HTTP status code etc.
// Response Status Code
// The status code indicates the status of the response.
