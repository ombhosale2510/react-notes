import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import NotesList from "./components/NotesList"
import Search from './components/Search'
import Header from './components/Header'
import { keepTheme } from './theme'
import Sidebar from './components/Sidebar'

const App = () => {
  const [ notes, setNotes ] = useState([]);
  const [ category, setCategory ] = useState(['Notes']);
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
    setNotesCopy([...notes]);
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

  const allCategories = ['Notes', 'Misc', 'Todo', 'Lecture Notes', 'Recipe'];
  
  const [notesCopy, setNotesCopy] = useState([...notes]);
  const handleSidebar = (category) => {
    setNotesCopy(category==='Notes'?[...notes]:
    notes.filter(note=>note.category===category));
  }
  
  return (
    <div>

      <div className="container">
        <Sidebar 
          allCategories={allCategories}
          handleSidebar={handleSidebar}
          notesCopy={notesCopy}
          key={notes.id}
          />

        <Header />
  
        <Search handleSearchNote={setSearchText} />
        
        <NotesList 
          notesCopy={notesCopy.filter(note=>
            note.text.toLowerCase().includes(searchText) ||
            note.category.toLowerCase().includes(searchText) 
          )} 
          handleAddNote={addNote} 
          deleteNote={deleteNote} 
          category={category}
          setCategory={setCategory}
          allCategories={allCategories}
        />
      </div>


    </div>
  )
}

export default App