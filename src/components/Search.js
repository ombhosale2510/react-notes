import React from 'react'

const Search = ({ handleSearchNote }) => {
  return (
    <div className='search'>
      <svg xmlns="http://www.w3.org/2000/svg" id='search-icon' class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
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