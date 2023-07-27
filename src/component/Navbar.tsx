import React, { useContext } from 'react'
import keepLogo from '../asserts/keep-logo.png'

type Props = {
    sidebar: boolean,
    setSideBar: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = ({ sidebar, setSideBar}: Props) => {

    const handleSidebar = () => {
        setSideBar(!sidebar);
    }

  return (
    <div className="navbar">
        {
        <div className='logo-area'>
            <span className="material-symbols-outlined menu" onClick={handleSidebar}>menu</span>
            <img className='keep-logo' src={keepLogo} alt="" />
            <span className='keep-name'>Keep</span>
        </div>
        }

        <form>
            <span className="material-symbols-outlined search-icon">search</span>
            <input type="text" placeholder='Search' name='search' className='search-input' />
        </form>

        <div className='setting-area'>
            <span className="material-symbols-outlined">refresh</span>
            <span className="material-symbols-outlined">dns</span>
            <span className="material-symbols-outlined">settings</span>
        </div>
    </div>
  )
}

export default Navbar