import React from 'react'
import * as Faicons from 'react-icons/fa';
import * as Aicons from 'react-icons/ai';
import * as Ioicons from 'react-icons/io'


export const Sidebar = [
{

    tittle: 'Home',
    path: "/",
    icon: <Aicons.AiFillHome/>,
    cName: "nav-text"
},
{

    tittle: 'Reports',
    path: "/report",
    icon: < Ioicons.IoIosPaper/>,
    cName: "nav-text"
},
{

    tittle: 'Products',
    path: "/products",
    icon: <Faicons.FaCartPlus/>,
    cName: "nav-text"
},
{

    tittle: 'Team',
    path: "/team",
    icon: <Aicons.AiOutlineTeam/>,
    cName: "nav-text"
},
{

    tittle: 'Messages',
    path: "/message",
    icon: <Faicons.FaEnvelopeOpen/>,
    cName: "nav-text"
},
{

    tittle: 'Support',
    path: "/support",
    icon: <Ioicons.IoMdHelpCircle/>,
    cName: "nav-text"
},
]
