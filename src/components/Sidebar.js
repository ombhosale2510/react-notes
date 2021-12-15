const Sidebar = ({ allCategories, notesCopy, handleSidebar }) => {
  
  return (<>
    <div className='sidebar' key={notesCopy.id}>
      <div className="logo-content">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ msFilter: "" }}
          >
            <path d="M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM5 20V7h14V6l.002 14H5z"></path>
            <path d="M7 9h10v2H7zm0 4h5v2H7z"></path>
          </svg>
        </div>
        
        <div className="logo-name">Notes</div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ msFilter: "" }}
          className='btn-menu'
        >
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
        </svg>
      </div>
      <ul className='nav-list'>

      {allCategories.map(category => {
      return (
      <li key={category}>
        <a onClick={()=>{handleSidebar(category)}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ msFilter: "" }}
            className='btn-category'
          >
            <path d="M16.813 4.419A.997.997 0 0016 4H3a1 1 0 00-.813 1.581L6.771 12l-4.585 6.419A1 1 0 003 20h13a.997.997 0 00.813-.419l5-7a.997.997 0 000-1.162l-5-7zM15.485 18H4.943l3.87-5.419a.997.997 0 000-1.162L4.943 6h10.542l4.286 6-4.286 6z"></path>
          </svg>
          <span className='links-name'>{category}</span>
        </a>
        <span className='tooltip'>{category}</span>
      </li>)
      })}

      </ul>
    </div>
  </>)
}

export default Sidebar