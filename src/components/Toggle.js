import React, { useEffect, useState } from 'react';
import '../index.css';
import { setTheme } from '../theme';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'


function Toggle() {
    const [ togClass, setTogClass ] = useState('dark');
    let theme = localStorage.getItem('theme');

    const handleOnClick = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setTogClass('light')
        } else {
            setTheme('theme-dark');
            setTogClass('dark')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTogClass('dark')
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setTogClass('light')
        }
    }, [theme]);

    const handleToggle = (event) => {
        if (event.target.checked) {
            alert('Checked')
        } else {
            alert('Not checked')
        }
    }

    return (
        <div className="container--toggle"> 
        {/* {
            <button 
                id="toggle" 
                className={"toggle--button "+togClass} 
                onClick={handleOnClick} 
              >
              {togClass === 'light' ? <MdOutlineDarkMode size='1.5rem' /> :
              <MdDarkMode size='1.5rem'/>}
              
            </button>
        } */}
          <label htmlFor="toggle" className="toggle--label">
              <span className="toggle--label-background"></span>
          </label>
            <div class="mt-normal-navi" style={{fontSize:'10px'}}> 
                <input id="1" type="checkbox" onChange={handleOnClick} 
                    checked={togClass==='light' ? '':'checked'}/>
                <label for="1"></label>
            </div>
        </div>
    )
  }

  export default Toggle