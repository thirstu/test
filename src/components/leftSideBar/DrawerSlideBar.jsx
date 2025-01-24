import React from "react";
import "./LeftSideBar.css";
import { AifillPlaySquare, AiOutlineHome, AiFillLike, AiFillAlipaySquare } from "react-icons/ai";
import {
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdSubscriptions,MdOutlineWatchLater
} from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import shorts from "./shorts.png";
import { NavLink } from "react-router-dom";
const DrawerSlideBar = ({ toggleDrawer, toggleDrawerLeftSideBar }) => {
  return (
    <div
      className="container_drawerLeftSideBar"
      style={toggleDrawerLeftSideBar}
    >
      <div
        className="container2_drawerLeftSideBar"
        style={toggleDrawerLeftSideBar}
      >
        <div className="drawer_leftSideBar">
          <NavLink to={"/"} className="icon_sidebar_div padding_08">
            <div className="left_drawer_item_alien">
              <AiOutlineHome
                size={22}
                className="icon_sideBar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sideBar_icon">Home</div>
            </div>
          </NavLink>
          <div className="icon_sideBar_div padding_08">
            <div className="left_drawer_item_alien" >
              <MdOutlineExplore
                size={22}
                className="icon_sideBar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sideBar_icon">Explore</div>
            </div>
          </div>
          <div className="icon_sideBar_div padding_08">
            <div className="left_drawer_item_alien">
              <img
                src={shorts}
                width={22}
                className="icon_sideBar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sideBar_icon">Shorts</div>
            </div>
          </div>
          <div className="icon_sideBar_div padding_08">
            <div className="left_drawer_item_alien">
              <MdSubscriptions
                size={22}
                className="icon_sideBar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sideBar_icon">Subscriptions</div>
            </div>
          </div>
        </div>
        <div className="libraryBtn_drawerLeftSideBar">
          <NavLink to={"/library"} className="icon_sidebar_div padding_08">
            <div className="left_drawer_item_alien">
              <MdOutlineVideoLibrary
                size={22}
                className="icon_sideBar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sideBar_icon">Library</div>
            </div>
          </NavLink>
          <NavLink to={"/watchHistory"} className="icon_sidebar_div">
            <div className="left_drawer_item_alien">
              <FaHistory
                size={22}
                className="icon_sideBar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sideBar_icon">History</div>
            </div>
          </NavLink>
          <NavLink to={"/yourVideos"} className="icon_sidebar_div">
            <div className="left_drawer_item_alien">
              <AiFillAlipaySquare
                size={22}
                className="icon_sideBar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sideBar_icon">Your Videos</div>
            </div>
          </NavLink>
          <NavLink to={"/watchLater"} className="icon_sidebar_div">
            <div className="left_drawer_item_alien">
              <MdOutlineWatchLater
                size={22}
                className="icon_sideBar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sideBar_icon">Watch Later</div>
            </div>
          </NavLink>
          <NavLink to={"/likedVideo"} className="icon_sidebar_div">
            <div className="left_drawer_item_alien">
              <AiFillLike
                size={22}
                className="icon_sideBar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sideBar_icon">Liked Videos</div>
            </div>
          </NavLink>
        </div>
        <div className="subscriptions_lsd">
          <h3>Your Subscripyion</h3>
          <div className="channel_lsdbar">
            <p>C</p>
            <div>
              Channel
            </div>
          </div>
          <div className="channel_lsdbar">
            <p>C</p>
            <div>
              Channel
            </div>
          </div> 
          <div className="channel_lsdbar">
            <p>C</p>
            <div>
              Channel
            </div>
          </div>
          <div className="channel_lsdbar">
            <p>C</p>
            <div>
              Channel
            </div>
          </div>
        </div>
      </div>
      <div className="container3_drawerLeftSideBar" onClick={()=>toggleDrawer()}>

      </div>
    </div>
  );
};

export default DrawerSlideBar;
