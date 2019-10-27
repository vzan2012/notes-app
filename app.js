// Validator NPM Package
const validator = require("validator");

// Chalk NPM Package
const chalk = require("chalk");

// yargs NPM package
const yargs = require("yargs");

const notes = require("./notes.js");

// Change the version number
yargs.version("3.0.0");

// Add, Remove, Read, List

// Create add command
yargs.command({
  command: "add",
  describe: "To add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Description of Note",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => notes.readNote(argv.title)
});

// Create list command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: () => notes.listNotes()
});

// Parse
yargs.parse();

// console.log(yargs.argv);
