function dev() {

  var dname = "Dishant sangani"

  let b = function () {
    console.log("My name is " + dname);
  }
  var dname = "Dishant"
  return b
}
b = dev()
b() 

// Closure ka use kahan hota hai?
// 1. Data ko private rakhne ke liye
// 2. Function factories banane ke liye
// 3. Callbacks aur Event Handlers mein
// 4. Memoization aur Currying jaise concepts mein