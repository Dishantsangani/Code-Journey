const user = {
  username: "Dishant",
  logincount: 0,
  signedin: true,
  userdetails: function () {
    console.log("User is signed in");
  }
}
console.log(this);
console.log(user.userdetails()); 