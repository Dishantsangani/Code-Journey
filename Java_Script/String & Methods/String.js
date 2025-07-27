let dev = "Dishant";
let sur = "Sangani";

console.log(`Hello Everyone My Name Is ${dev} and My Surname is ${sur}`);

const game = new String("Dishant");
console.log(game[3]);
console.log(game.length);
console.log(game.toUpperCase());

// Find Position in String
console.log(game.charAt(3));
console.log(game.indexOf("h"));
console.log(game.substring(-8, 4));
console.log(game.slice(-8, 4));
console.log(game.trim());

// Replace
const url = "Dishant Sangani";
console.log(url.replace("Sangani", "Patel"));
console.log(url.includes("Diishant"));

// Convert String In to Array
console.log(url.split("-"));
