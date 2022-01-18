import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import NotesList from "./components/NotesList"
import Search from './components/Search'
import Header from './components/Header'
import { keepTheme } from './theme'
import Sidebar from './components/Sidebar'

export const NotesContext = React.createContext();

const App = () => {
  const [ notes, setNotes ] = useState([]);
  const [ category, setCategory ] = useState(['Notes']);
  const [ searchText, setSearchText ] = useState('');
  const [ alert, setAlert ] = useState({
    show:false,
    msg:'',
    type:''
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  
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
    showAlert(true, 'Note deleted', 'warning');
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  }

  // hardcoded values for categories
  const allCategories = ['Notes', 'Misc', 'Todo', 'Lecture Notes', 'Recipe'];
  
  // copy notes for filtering through
  const [notesCopy, setNotesCopy] = useState([...notes]);
  const handleSidebar = (category) => {
    setNotesCopy(category==='Notes'?[...notes]:
    notes.filter(note=>note.category===category));
  }
  
  // function to call alert
  const showAlert = (show=false, msg='', type='') => {
    setAlert({show, msg, type});
  }
  
  return (
    <>
      <div className="container">

      <button className="submenu">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ msFilter: "" }}
          className='submenu-btn'
        >
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
        </svg>
      </button>

        <Sidebar 
          allCategories={allCategories}
          handleSidebar={handleSidebar}
          notesCopy={notesCopy}
          key={notes.id}
          />

        <Header notes={notes} alert={alert} removeAlert={showAlert} />

        <Search handleSearchNote={setSearchText} />

        <NotesContext.Provider 
          value={{ handleAddNote:addNote, 
            deleteNote, 
            showAlert, 
            notes, 
            setNotes, 
            editId, 
            isEditing,
            allCategories,
            setEditId,
            setIsEditing,
          }} >

          <NotesList 
            notesCopy={notesCopy.filter(note=>
              note.text.toLowerCase().includes(searchText) ||
              note.category.toString().toLowerCase().includes(searchText) 
            )} 
            category={category}
            setCategory={setCategory}
            notes={notes}
          />
        </NotesContext.Provider>
      </div>
    </>
  )
}

export default App