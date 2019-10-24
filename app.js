// const add = require("./util.js");
// const name = "Title Name";
// console.log(add(5,-5));

// Validator NPM Package
const validator = require("validator");

// Chalk NPM Package
const chalk = require("chalk");

// yargs NPM package
const yargs = require("yargs");

const getNotes = require("./notes.js");

const command = process.argv[2];

// Change the version number
yargs.version("3.0.0");

// Create add command
yargs.command({
  command: "add",
  describe: "To add a new note",
  handler: () => console.log("New Note adding to the List...")
});


// Create remove command 
yargs.command({
  command: 'remove',
  describe: 'Remove Note',
  handler: () => console.log('A Note has been removed')
});

// Create read command 
yargs.command({
  command: 'read',
  describe: 'Read Note',
  handler: () => console.log('Reading a Note')
})

// Create list command 
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: () => console.log('Listing all Notes')
})

// add, remove, read, list

console.log(yargs.argv);
