import Note from './Note'
import AddNote from './AddNote'

const NotesList = (
  { notesCopy, handleAddNote, deleteNote, category, setCategory, showHideClassName, allCategories }
  ) => {
  return (
    <div key={allCategories} className="notes-list">
      {notesCopy.map(note => {
        return (
          <Note 
            key={note.id} 
            id={note.id} 
            text={note.text} 
            date={note.date}
            deleteNote={deleteNote}
            category={note.category}
          />)
      })}
      <AddNote 
        handleAddNote={handleAddNote} 
        category={category} 
        setCategory={setCategory} 
        showHideClassName={showHideClassName} 
        allCategories={allCategories}
      />
    </div>
  )
}

export default NotesList