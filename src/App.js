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
    <div>
      <div className="container">

        <Sidebar 
          allCategories={allCategories}
          handleSidebar={handleSidebar}
          notesCopy={notesCopy}
          key={notes.id}
          />

        <Header notes={notes} alert={alert} removeAlert={showAlert} />

        <Search handleSearchNote={setSearchText} />

        <NotesList 
          notesCopy={notesCopy.filter(note=>
            note.text.toLowerCase().includes(searchText) ||
            note.category.toString().toLowerCase().includes(searchText) 
          )} 
          handleAddNote={addNote} 
          deleteNote={deleteNote} 
          category={category}
          setCategory={setCategory}
          allCategories={allCategories}
          showAlert={showAlert}
          notes={notes}
          setNotes={setNotes}
          editId={editId}
          setEditId={setEditId}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
        
      </div>
    </div>
  )
}

export default App