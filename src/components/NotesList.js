import Note from './Note'
import AddNote from './AddNote'

const NotesList = (
  { notes, handleAddNote, deleteNote, category, setCategory, showHideClassName }
  ) => {
  return (
    <div className="notes-list">
      {notes.map(note => {
        return (
          <Note 
            id={note.id} 
            text={note.text} 
            date={note.date}
            deleteNote={deleteNote}
            category={note.category}
          />)
      })}
      <AddNote handleAddNote={handleAddNote} category={category} 
        setCategory={setCategory} showHideClassName={showHideClassName}/>
    </div>
  )
}

export default NotesList