const fs = require("fs");

const chalk = require("chalk");

// Add a Note
const addNote = (title, body) => {
  const notes = loadNotes();

  // Filter the Notes title and save in duplicate Notes
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("New Note is added !!!"));
  } else {
    console.log(chalk.red.inverse("Note Title - already taken"));
  }
};

// Save Notes
const saveNotes = notes => {
  try {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
  } catch (e) {
    console.log(`Error in Saving the Notes: ${e}`);
  }
};

// Remove Notes
const removeNote = title => {
  const notes = loadNotes();
  const removeTitleMatch = notes.filter(note => note.title === title);
  if (removeTitleMatch.length !== 0) {
    const notesToKeep = notes.filter(note => note.title !== title);
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse("Note Removed !!!"));
  } else {
    console.log(chalk.red.inverse("Note does not Exist"));
  }
};

// Load Notes
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

// Read Notes
const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if (note) {
    console.log(chalk.inverse(`${note.title}`));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not Found !!!"));
  }
};

// const listNotes = () => console.log(loadNotes());
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.green.inverse("Your Notes: "));
  notes.map(note => {
    console.log(`Title: ${note.title}`);
    console.log(`Contents: ${note.body}`);
  });
};

module.exports = { addNote, removeNote, listNotes, readNote };
