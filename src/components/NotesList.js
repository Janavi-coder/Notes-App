import AddNote from "./AddNote";
import Note from "./Note";

export default function NotesList({ notes,handleAddNote,handleDeleteNote }){
    return(
      <div className="note-list">
        {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>
        ))}
        <AddNote handleAddNote={handleAddNote}/>
      </div>
    );
}