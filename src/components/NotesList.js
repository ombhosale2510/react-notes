import { useState, useRef } from "react";

import Note from './Note'
import AddNote from './AddNote'

const NotesList = (
  { notesCopy, handleAddNote, deleteNote, category, setCategory, showHideClassName, allCategories, showAlert, isEditing, setIsEditing, notes, setNotes, editId, setEditId }
  ) => {

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
            deleteNote={deleteNote}
            category={note.category}
            isEditing={isEditing}
            editId={editId}
            editItem={editItem}
          />)
      })}
      <AddNote 
        handleAddNote={handleAddNote} 
        category={category} 
        setCategory={setCategory} 
        showHideClassName={showHideClassName} 
        allCategories={allCategories}
        showAlert={showAlert}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        notes={notes}
        setNotes={setNotes}
        editId={editId}
        setEditId={setEditId}
        noteText={noteText}
        setNoteText={setNoteText}
        textareaRef={textareaRef}
      />
    </div>
  )
}

export default NotesList