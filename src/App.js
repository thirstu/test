import logo from './logo.svg';
import './App.css';
import React ,{ useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './AllRoutes.jsx';
import DrawerSlideBar from './components/leftSideBar/DrawerSlideBar.jsx';
import CreateEditChannel from './pages/channel/CreateEditChannel.jsx';
import VideoUpload from './pages/videoUpload/VideoUpload.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllChannel } from './api/index.js';
import { getAllVideo } from './action/video.js';










function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAllChannel());
    dispatch(getAllVideo())
  },[dispatch])
  const [toggleDrawerSidebar,setToggleDrawerSidebar]=useState({
    display:"none",
  });
  const toggleDrawer=()=>{
    console.log(toggleDrawerSidebar);
    if(toggleDrawerSidebar.display==="none"){
      setToggleDrawerSidebar({
        display:"flex"
      });
    }else{
    console.log(toggleDrawerSidebar);

      setToggleDrawerSidebar({
        display:"none",
      })
    }
  }
  const [editCreateChannelBtn ,setEditCreateChannelBtn]=useState(false);

  const [videoUploadPage,setVideoUploadPage]=useState(false);
  return (
 <Router>
  {
    videoUploadPage&& <VideoUpload setVideoUploadPage={setVideoUploadPage}/>
  }
 { console.log("editCreateChannelBtn",editCreateChannelBtn)}
  {editCreateChannelBtn &&(

    <CreateEditChannel setEditCreateChannelBtn={setEditCreateChannelBtn}/>
  )}
  <Navbar setEditCreateChannelBtn={setEditCreateChannelBtn}  toggleDrawer={toggleDrawer}/>
  
  <DrawerSlideBar toggleDrawer={toggleDrawer} toggleDrawerLeftSideBar={toggleDrawerSidebar} />
  <AllRoutes setEditCreateChannelBtn={setEditCreateChannelBtn} setVideoUploadPage={setVideoUploadPage}/>
 </Router>
  );
}

export default App;
