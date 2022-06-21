import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

export default function App() {
    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text: "This is my first note",
            date: "20/06/2022"
        },
        {
            id: nanoid(),
            text: "This is my second note",
            date: "2/05/2022"
        },
        {
            id: nanoid(),
            text: "This is my third note",
            date: "12/06/2022"
        }
    ]);
    const [searchText, setSearchText] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedNotes = JSON.parse(
            localStorage.getItem('react-notes-app-data')
        );

        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            'react-notes-app-data',
            JSON.stringify(notes)
        );
    }, [notes]);


    function addNote(text) {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString(),
        }
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    }
    function deleteNote(id) {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    }
    return (
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className="container">
                <Header handleDarkMode={setDarkMode} />
                <Search handleSearch={setSearchText} />
                <NotesList
                    notes={notes.filter((note) =>
                        note.text.toLowerCase().includes(searchText.toLowerCase())
                    )}
                    handleAddNote={addNote}
                    handleDeleteNote={deleteNote}
                />
            </div>
        </div>
    );
}
