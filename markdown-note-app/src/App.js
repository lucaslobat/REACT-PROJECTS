import { useState, useEffect } from "react";

/* ·········· Dependencies ·········· */
import Split from "react-split";

/* ·········· Components ·········· */
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";

/* ·········· Styles ·········· */
import "./index.css";

localStorage.clear();

function App() {
  /* ·········· STATES ·········· */

  /*  
    State that stores the notes objects in an array,
    its initialized with whatever is stored in the localStorage
    as "notes" otherwise its initialized as an empty array.
      */
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  /*  
    This state stores the note's current id, the default
    value is the first note id if it exists, otherwise its
    an empty string
      */
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  );

  console.log(currentNoteId);

  /* ·········· ENF OF STATES ·········· */

  /*  
    When the app is initialized, and when "notes" change,
    it sets a item in the localStorage equals to the "notes" state variable
      */
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  /* ·········· Functions ·········· */
  function createNewNote() {
    const newNote = {
      id: notes.length + 1 ,
      get body() {
        return `# Note ${notes.length + 1}`;
      },
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);
    setCurrentNoteId(newNote.id);
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  /* * * *
   * This function receives the editor's value, calls setNotes
   * to reach notes prevState and iterate over notesArray,if it finds a note
   * that corresponds to the currentNoteId it updates it's body property
   * with the text and returns it, otherwise returns the note as it is.
   * * *  */
  function editNote(text) {
    console.log(text);
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
