import { useContext } from 'react';
import { NotesContext } from '../App'

const Note = ({ id, text, date, editItem, category }) => {

  const { deleteNote, editId } = useContext(NotesContext);

  
  return (
    <div className={`note ${editId===id ? `edit`:``}`} key={id} >
      <span className='note-text'>{text}</span>
      <div className={`overlay ${editId===id ? `edit`:``}`}>
        <div className="text">Editing</div>
      </div>
      <div className="note-footer">
        <small>{date}</small>
        <small>{category}</small>

        {/* Edit icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="18"
          height="18"
          viewBox="0 0 24 24" 
          fill="none" 
          id='edit-icon'
          stroke="currentColor"
          onClick={()=>editItem(id)}
        >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        <title>Edit note</title>
        </svg>

        {/* Delete icon */}
        <div className="delete-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ msFilter: "" }}
          id='delete-icon'
          onClick={() => deleteNote(id)}
        >
          <path d="M5 20a2 2 0 002 2h10a2 2 0 002-2V8h2V6h-4V4a2 2 0 00-2-2H9a2 2 0 00-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
          <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>

          <title>Delete note</title>
        </svg>
        </div>
      </div>
    </div>
  )
}

export default Note