import { useState, useRef, useContext } from "react";
import { NotesContext } from '../App'

import Note from './Note'
import AddNote from './AddNote'

const NotesList = (
  { notesCopy, notes, category, setCategory }
  ) => {

  const { allCategories, setEditId, setIsEditing } = useContext(NotesContext);

  const [ noteText, setNoteText ] = useState('');
  const textareaRef = useRef();

  // function to set edit notes
  const editItem = (id) => {
    const specificItem = notes.find(note=>note.id === id);
    setNoteText(specificItem.text);
    setIsEditing(true);
    setEditId(id);
    textareaRef.current.focus();
  }
  
  return (
    <div key={allCategories} className="notes-list">
      {notesCopy.map(note => {
        return (
          <Note 
            key={note.id}
            {...note}
            editItem={editItem}
          />)
      })}
      <AddNote 
        allCategories={allCategories}
        setIsEditing={setIsEditing}
        setEditId={setEditId}
        noteText={noteText}
        setNoteText={setNoteText}
        textareaRef={textareaRef}
        category={category}
        setCategory={setCategory}
      />
    </div>
  )
}

export default NotesList