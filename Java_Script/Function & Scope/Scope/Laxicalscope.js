// Clousure is the Combination of a function bundled together

// That is laxical scope
// function init() {
//   let name = "Dishant";
//   function displayname() {}
//   displayname();
// }
// init();

function outer() {
  let uname = "dev";
  function inner() {
    let secerat = "123";
    console.log("inner", uname);
  }
  function innertwo() {
    console.log("innertwo", uname);
    console.log(secerat);
  }
  inner();
  innertwo();
}
outer();
console.log("too outer", uname);
