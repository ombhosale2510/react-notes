import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [ noteText, setNoteText ] = useState('');
  const charCount = 200;

  const handleChange = (event) => {
    if (charCount - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  }

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText('');
    }
  }
  
  return (
    <div className="note new">
      <textarea cols="10" rows="8" className='placeholder-dark' placeholder="Type to add a note.."
      onChange={handleChange} value={noteText}>
      </textarea>
      <div className="note-footer">
        <small className='remaining' style={{color:(charCount - noteText.length == 0) && 'red'}}>
        {charCount - noteText.length} remaining</small>
        <button className='save' onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  )
}

export default AddNote