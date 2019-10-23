// const add = require("./util.js");
// const name = "Title Name";
// console.log(add(5,-5));

const validator = require('validator');
const getNotes = require('./notes.js');

getNotes();

console.log(validator.isEmail('vzan2012@gmail.com'));
console.log(validator.isURL('https://vzan2012.github.io'));
