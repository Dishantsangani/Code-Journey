function dev() {
  console.log("Dishant Sangani");
}
function greet(x, y, callback) {
  console.log(x - y);
  callback();
}
var a = 30;
var b = 3;
greet(a, b, dev);

// Practic
function getdata(dataId, getnextdata) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getnextdata) {
      getnextdata();
    }
  }, 2000);
}
// callback hell
getdata(1, () => {
  console.log("Hi dishant How are you");
  getdata(2, () => {
    console.log("Hi apnacollage How are you");
    getdata(3, () => {
      console.log("Hi shivika How are you");
      getdata(4);
    });
  });
});
