import React, { useState, createContext } from 'react'
import './stylesheets/App.css'
import './stylesheets/sidebar.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar'

const App: React.FC = () => {

  const [sidebar, setSidebar] = useState<boolean>(true);

  return (
      <div>
        <Navbar sidebar={sidebar} setSideBar={setSidebar}/>
        <Router>
          <div className='app'>
            <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
            <Routes>
              <Route path='/' element={<Home />}/>
            </Routes>
          </div>
        </Router>
      </div>
  )
}

export default App