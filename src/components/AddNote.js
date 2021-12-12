import { useState } from "react";

const AddNote = ({ handleAddNote, category, setCategory, showHideClassName }) => {
  const [ noteText, setNoteText ] = useState('');
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
      handleAddNote(noteText);
      setNoteText('');
      setShow(false);
    }
  }

  const handleCategory = ( event ) => {
    let { value } = event.target;
    setCategory(value);
  }  
  showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className="note new">
      <textarea 
        cols="10" 
        rows="8" 
        className='placeholder-dark' 
        placeholder="Type to add a note.."
        onChange={handleChange} 
        value={noteText}>
      </textarea>
      <div className="note-footer">
        <small 
          className='remaining' 
          style={{color:(charCount - noteText.length == 0) && '#c60000'}}>
        {charCount - noteText.length} remaining</small>

      <div className='select'>
        <select 
            name={category} 
            id="label" 
            onChange={(e)=>handleCategory(e)}
            required
            title='Select a label for your note'
          >
          <option value="" disabled selected value>-- choose --</option>
          <option value="Misc">Misc</option>
          <option value="Todo">Todo</option>
          <option value="Recipe">Recipe</option>
          <option value="Lecture-notes">Lecture Notes</option>
        </select>
      </div>
        <button className='save' onClick={handleSaveClick} title='Save note'>
        <h4>Save</h4>
        </button>
      </div>


      {/* Modal */}
      <main>
        <div className={showHideClassName}>
          <section className="modal-main">
            <p className='modal-text'>{modalText}</p>
            <button type="button" className='modal-close-btn' 
              onClick={()=>setShow(false)}><h4>Close</h4>
            </button>
          </section>
        </div>
      </main>

    </div>
  )
}

export default AddNote