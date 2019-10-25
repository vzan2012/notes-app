const fs = require("fs");

const getNotes = () => console.log("Your Notes .....");

// Add a Note 
const addNote = (title, body) => {
  const notes = loadNotes();

  // Filter the Notes title and save in duplicate Notes 
  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });

    saveNotes(notes);
    console.log("New Note is added !!!");
  } else {
    console.log("Note Title - already taken");
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

module.exports = { getNotes, addNote };
