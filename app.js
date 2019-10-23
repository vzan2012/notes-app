const fs = require("fs");

fs.writeFileSync("notes.txt", "File Created...");
// fs.writeFile(
//   "notes1.txt",
//   "This is my example using the file write async",
//   () => console.log("Async File Created")
// );

// Challenge 1: Append the new contents to the existing file (notes.txt)
fs.appendFileSync("notes.txt", " New Appended Contents");
