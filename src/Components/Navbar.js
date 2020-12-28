import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import * as Faicons from 'react-icons/fa';
import * as Aicons from 'react-icons/ai';
import {Sidebar} from './Sidebar'
import './Navbar.css'
import {IconContext} from 'react-icons'


const Navbar = () => {
    const [sidebar,setSidebar]=useState(false)

    const showSidebar = () =>{
        setSidebar(!sidebar)
    }
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <div className ="navbar">
                  <Link to="#" className="menu-bars">
                      <Faicons.FaBars onClick={showSidebar}/>
                  </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <Aicons.AiOutlineClose/>
                        </Link>

                    </li>
                    {Sidebar.map((side,index)=>{
                        return(
                            <li key={index} className={side.cName}>
                                <Link to={side.path}>
                                    {side.icon}
                                    <span>
                                        {side.tittle}
                                    </span>
                                </Link>


                            </li>
                        )

                        

                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
