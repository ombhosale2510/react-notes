const Note = ({ id, text, date, deleteNote, category }) => {
  // console.log(category);
  return (
    <div className="note" id={id}>
      <span className='note-text'>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <small>{category}</small>

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
          <span className="tooltip">Delete</span>
        </div>
      </div>
    </div>
  )
}

export default Note