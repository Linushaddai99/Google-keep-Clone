import React, { useRef } from 'react'
import { SidebarData } from '../SidebarData'
import { NavLink } from 'react-router-dom'

type Props = {
  sidebar: boolean,
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = ({ sidebar, setSidebar}: Props) => {

  const itemRef = useRef<HTMLSpanElement | null>(null);
  const effect =()=> {
    const text = document.querySelectorAll('.sidebar-text');
    text.forEach(item => item.classList.add('hide'));
  }

!sidebar && setTimeout(effect, 200)

  return (
    <div className='sidebar'>
      {SidebarData.map((data, index: number) => (
        sidebar ? (
          <NavLink to={data.path} className={({ isActive }) => (isActive ? "div-active" : "link")}>
            <div className={`${sidebar ? 'sidebar-item' : 'sidebar-item active'}`}>            
              <span className={`${sidebar ? 'material-symbols-outlined sidebar-icon ' : 'material-symbols-outlined sidebar-icon'}`}>{data.icon}</span>
                <span className={`${sidebar ? 'sidebar-text' : 'sidebar-text active'}`}  ref={itemRef}>
                {data.title}
                </span>
            </div>
          </NavLink>
        ) : (
            <div className='icon-side'>
              <NavLink to={data.path} className={({ isActive }) => (isActive ? "icon-active" : "link")}>
                <span className='material-symbols-outlined icon-side-icon' onMouseEnter={() => setSidebar(!sidebar)}>{data.icon}</span>
              </NavLink>
            </div>
        )
      ))}
    </div>
  )
}

export default Sidebar