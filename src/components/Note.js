import { MdDeleteForever } from 'react-icons/md'

const Note = ({ id, text, date, deleteNote }) => {
  return (
    <div className="note" id={id}>
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
          <MdDeleteForever className='delete-icon' onClick={()=>deleteNote(id)} />
      </div>
    </div>
  )
}

export default Note