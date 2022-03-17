const fs = require("fs");

const nbrLines =
  fs.readFileSync(process.argv[2]).toString().split("\n").length - 1;

console.log(nbrLines);
