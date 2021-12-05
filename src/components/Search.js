import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({ handleSearchNote }) => {
  return (
    <div className='search'>
      <MdSearch className='search-icons' 
      />
      <input 
        type="text"
        className='placeholder-light' 
        placeholder='type to search' 
        onChange={(event)=>handleSearchNote(event.target.value)}
      />
    </div>
  )
}

export default Search