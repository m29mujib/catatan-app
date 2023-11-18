import React, { useContext } from 'react'
import './Navbar.scss'
import Moon from '../../assets/moon.png'
import Sun from '../../assets/sun.png'
import { DarkProvider } from '../../context/DarkMode'
export default function Navbar({onSearchData}) {
   const { isDarkMode, setIsDarkMode } = useContext(DarkProvider)
  return (  
      <nav className='navbar'>
         <div className='logo'>
            <h1>Notes</h1>
         </div>
         <div className='search'>
            <input type="text" placeholder='Search...' onChange={onSearchData}/>
            <span><img src={isDarkMode ? Sun : Moon} className='icon' onClick={() => setIsDarkMode((x) => !x)  }/></span>
         </div>
      </nav>    
  )
}
// setSearch(e.target.value)
