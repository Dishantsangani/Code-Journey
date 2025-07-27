// String methods
let str = "   Dishant Sangani is learning coding from Apna Collage   ";
document.write("Original string: '" + str + "'<br/>");

// String length
let length = str.length;
document.write("String length: " + length + "<br/>");

// toUpperCase
let upperCaseStr = str.toUpperCase();
document.write("Uppercase: " + upperCaseStr + "<br/>");

// toLowerCase
let lowerCaseStr = str.toLowerCase();
document.write("Lowercase: " + lowerCaseStr + "<br/>");

// trim
let trimmedStr = str.trim();
document.write("Trimmed string: '" + trimmedStr + "'<br/>");

// slice
let slicedStr = str.slice(3, 15);
document.write("Sliced string (from index 3 to 15): " + slicedStr + "<br/>");

// concat
let concatStr = str.concat(" - A great platform for learning.");
document.write("Concatenated string: " + concatStr + "<br/>");

// replace
let replacedStr = str.replace("Dishant", "Harry");
document.write("String after replace: " + replacedStr + "<br/>");

// replaceAll
let replaceAllStr = str.replaceAll(" ", "-");
document.write(
  "String after replaceAll spaces with hyphen: " + replaceAllStr + "<br/>"
);

// charAt
let charAtStr = str.charAt(5);
document.write("Character at index 5: " + charAtStr + "<br/>");

// Template literals
let item = "pencil";
let price = 10;
let templateLiteral = `The ${item} costs ${price} rupees.`;
document.write("Template literal example: " + templateLiteral + "<br/>");

// Escape characters
let escapeChars =
  "Escape Characters Example:\n New line, \t Tab space, \\ Backslash";
document.write("<pre>" + escapeChars + "</pre>");
