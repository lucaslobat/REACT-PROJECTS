import { useState } from "react";

/* ·········· Dependencies ·········· */
import Split from "react-split";
import { nanoid } from "nanoid";

/* ·········· Components ·········· */
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";

/* ·········· Styles ·········· */
import "./index.css";

function App() {
  /* ·········· States ·········· */

  // State that stores the notes objects in an array
  const [notes, setNotes] = useState([]);

  /* * * *
   * This state stores the note's current id,
   * the default value is the first note id if it exists,
   * otherwise its an empty string.
   * * *  */
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  );

  /* ·········· Functions ·········· */
  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: function () {
        return ` # Note id : ${this.id}`;
      },
    };

    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  function editNote(text) {
    setNotes((prevNotes) =>
      prevNotes.map((prevNote) => {
        return prevNote.id === currentNoteId
          ? { ...prevNote, body: text }
          : prevNote;
      })
    );
  }

  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[10, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
          />
          <Editor currentNote={findCurrentNote()} editNote={editNote} />
        </Split>
      ) : (
        <div className="no-notes">
          <h1>Currently you have no notes</h1>
          <button
            type="button"
            className="create-first-note-button"
            onClick={createNewNote}
          >
            Create new note
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
