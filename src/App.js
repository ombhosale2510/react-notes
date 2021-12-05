import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import NotesList from "./components/NotesList"
import Search from './components/Search'
import Header from './components/Header'
import { keepTheme } from './theme'

const App = () => {
  const [ notes, setNotes ] = useState([]);
  const [ searchText, setSearchText ] = useState('');
  
  useEffect(()=>{
    keepTheme();
  })

  // retreive saved notes
  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-data'));

    if (savedNotes) {
      setNotes(savedNotes)
    }
    
  }, [])

  // save notes to local storage
  useEffect(() => {
    localStorage.setItem('react-notes-data', JSON.stringify(notes))
  }, [notes])

// save button will add new note
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date:date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div>
      <div className="container">
        <Header/>
        
        <Search handleSearchNote={setSearchText} />
        
        <NotesList 
          notes={notes.filter(note=>note.text.toLowerCase().includes(searchText))} 
          handleAddNote={addNote} 
          deleteNote={deleteNote} 
        />
      </div>
    </div>
  )
}

export default App