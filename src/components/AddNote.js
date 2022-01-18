import { useState, useContext } from "react";
import { NotesContext } from '../App'

const AddNote = ({ noteText, setNoteText, textareaRef, category, setCategory }) => {

  const { handleAddNote, showAlert, notes, setNotes, editId, isEditing, allCategories, setEditId, setIsEditing } = useContext(NotesContext);
  
  const [ show, setShow ] = useState(false);
  const [ modalText, setModalText ] = useState('');

  const charCount = 200;
  const handleChange = (event) => {
    if (charCount - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  }
  
  const handleSaveClick = () => {
    if (noteText.trim().length === 0) {
      setModalText('Text cannot be blank!');
      setShow(true);
    }
    if (category === '') {
      setModalText('Please select a label');
      setShow(true);
    }
    if (noteText.trim().length > 0 && category!=='') {
      showAlert(true, 'Note added', 'success');
      handleAddNote(noteText);
      setNoteText('');
      setShow(false);
    }

    if (noteText.trim().length > 0 && category!=='' && isEditing) {
      setNotes(notes.map(note=>{
        if (note.id === editId) {
          return ({...note, text:noteText, category:category})
        }
        return note
      }));
      setEditId(null);
      setIsEditing(false);
      showAlert(true, 'Note Changed', 'success');
    }

  }

  const handleCategory = ( event ) => {
    let { value } = event.target;
    setCategory(value);
  }  
  let showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className="note new">

      <textarea 
        cols="10" 
        rows="8" 
        className='placeholder-dark' 
        placeholder="Type to add a note.."
        onChange={handleChange} 
        value={noteText}
        autoFocus
        ref={textareaRef}
        >
      </textarea>

      <div className="note-footer">
        <small 
          className='remaining' 
          style={{color:(charCount - noteText.length == 0) && '#c60000'}}>
        {charCount - noteText.length} remaining</small>

      <div className='select'>
        <select 
            name={category} 
            className="select" 
            onChange={(e)=>handleCategory(e)}
            required
            title='Select a label for your note'
            defaultValue="Notes"
          >
          <option value="Notes" disabled selected>Categories</option>
          {allCategories.map(item => {
            return <option key={item} value={item}>{item}</option>
          })}
        </select>
      </div>

        <button className='save' onClick={handleSaveClick} title='Save note'>
        <h4>{isEditing ? 'Edit':'Save'}</h4>
        </button>
      
      </div>

      {/* Modal */}
      <main>
        <div className={showHideClassName}>
          <section className="modal-main">
            <p className='modal-text'>{modalText}</p>
            <button type="button" className='modal-close-btn' 
              onClick={()=>setShow(false)}><p>Close</p>
            </button>
          </section>
        </div>
      </main>

    </div>
  )
}

export default AddNote