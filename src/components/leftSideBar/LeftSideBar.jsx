import React from 'react';
import "./LeftSideBar.css";
import shorts from "./shorts.png";
import {AiOutlineHome} from "react-icons/ai";
import {MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary} from "react-icons/md";
import { NavLink } from 'react-router-dom';
import SearchBar from '../navbar/searchBar/SearchBar.jsx';
const LeftSideBar = () => {
  return (
    <div className='container_leftSideBar'>
        <NavLink to={'/'} className='icon_sideBar_div' >
        <AiOutlineHome size={22} className='icon_sideBar'/>
        <div className="text_sideBar_icon">
            Home
        </div>
        </NavLink>
        <div className="icon_sideBar_div">
        <MdOutlineExplore size={22} className='icon_sideBar'/>
        <div className="text_sideBar_icon">
            Explore
        </div>

        </div>
        <div className="icon_sideBar_div">
        <img src={shorts} width={22} className='icon_sideBar'/>
        <div className="text_sideBar_icon">
            Shorts
        </div>

        </div>  
        <div className="icon_sideBar_div">
        <MdOutlineSubscriptions size={22} className='icon_sideBar'/>
        <div className="text_sideBar_icon" size={{fontSize:'12px'}}>
            Subscription
        </div>

        </div>
        <NavLink to={'/library'} className='icon_sideBar_div' >
        <MdOutlineVideoLibrary size={22} className='icon_sideBar'/>
        <div className="text_sideBar_icon">
            Library
        </div>
        </NavLink>
    
    </div>
  )
}

export default LeftSideBar
