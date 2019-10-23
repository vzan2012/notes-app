// const add = require("./util.js");
// const name = "Title Name";
// console.log(add(5,-5));

// Validator NPM Package 
const validator = require('validator');

// Chalk NPM Package 
const chalk = require('chalk');

const getNotes = require('./notes.js');

getNotes();

console.log(validator.isEmail('vzan2012@gmail.com'));
console.log(validator.isURL('https://vzan2012.github.io'));

const msg = 'Success';

console.log(chalk.green.bold.inverse.underline(msg));