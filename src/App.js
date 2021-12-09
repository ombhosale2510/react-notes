import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import NotesList from "./components/NotesList"
import Search from './components/Search'
import Header from './components/Header'
import { keepTheme } from './theme'
import Sidebar from './components/Sidebar'

const App = () => {
  const [ notes, setNotes ] = useState([]);
  const [ category, setCategory ] = useState('');
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
    
  }, []);

  // save notes to local storage
  useEffect(() => {
    localStorage.setItem('react-notes-data', JSON.stringify(notes))
  }, [notes]);

// save button will add new note
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      category: category,
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  }

  const allCategories = ['Notes', ...new Set(notes.map(note=>note.category))];

  // const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div>

      <div className="container">
        <Sidebar allCategories={allCategories} category={category}/>

        <Header />
  
        <Search handleSearchNote={setSearchText} />
        
        <NotesList 
          notes={notes.filter(note=>note.text.toLowerCase().includes(searchText))} 
          handleAddNote={addNote} 
          deleteNote={deleteNote} 
          category={category}
          setCategory={setCategory}
        />
      </div>


    </div>
  )
}

export default App