import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { RiVideoAddLine } from 'react-icons/ri';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiUserCircle } from 'react-icons/bi';
import { useDispatch, useSelector} from 'react-redux';
import SearchBar from '../navbar/searchBar/SearchBar';
import "./Navbar.css";
import { useGoogleLogin } from '@react-oauth/google';
import Auth from '../../pages/auth/Auth';
import axios from 'axios';
import { login } from '../../action/auth.js';
import { setCurrentUser } from '../../action/currentUser.js';
import {jwtDecode} from 'jwt-decode';
function Navbar({toggleDrawer,setEditCreateChannelBtn}) {
  const [authBtn,setAuthBtn]=useState(false);
  const [user,setUser]=useState(false);
  const [profile,setProfile]=useState([]);
  const dispatch=useDispatch()
  console.log(profile);
  if(profile){
    dispatch(login({email:profile.email}))
    console.log(profile.email);

  }
  // const currentUser=null;
  const currentUser=useSelector(state=>state.currentUserReducer);
  console.log(currentUser);
  const successLogin=()=>{
    if(profile.email){
      dispatch(login({email:profile.email}))
    }

  }
  //   const currentUser={
  //   result:{
  //     _id:1,
  //     name:"ajaj",
  //     email:'abcd@gmail.com',
  //     joinedon:"222-07-134",
  //     // password:
  //   }
  // }
  const googleLogin = useGoogleLogin({
    onSuccess: tokenResponse =>setUser(tokenResponse),onError:(err)=> console.error("login failed",err)
  });
  useEffect(()=>{
    if(user){
      axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,{
        headers:{
          Authorization:`Bearer ${user.access_token}`,
          Accept:'application/json'
        }
      })
      .then((res)=>{
        setProfile(res.data)
        successLogin()
      })
      .catch((err)=>console.error(err))

    }
  },
  [user]
)
  console.log(login);
  const logout=()=>{
    dispatch(setCurrentUser(null))
    googleLogout();
    localStorage.clear();


  }

  useEffect(()=>{
    const token=currentUser?.token;
    if(token){
      const decodeToken=jwtDecode(token);
      if(decodeToken.exp*1000<new Date().getTime()){
        logout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))))

  },[currentUser?.token,dispatch])
  return (
    <>
    <div className="container_navbar">
      <div className="burger_logo_navbar">
        <div className="burger" onClick={()=>toggleDrawer()}>
          <p></p>
          <p></p>
          <p></p>

        </div>
        <Link to={"/"} className='logo_div_navbar' >
        <img src={"favicon.ico"} alt="hello" />
        <p className="logo_title_navbar">
          Training-YouTube
        </p>
        </Link>
      
      </div>
      <SearchBar/>
      <RiVideoAddLine size={22} className={"vid_bell_Navbar"}/> 
      <div className="apps_box">
        <p className="appBox"> </p>
        <p className="appBox"> </p>
        <p className="appBox"> </p>
        <p className="appBox"> </p>
        <p className="appBox"> </p>
        <p className="appBox"> </p>
        <p className="appBox"> </p>
        <p className="appBox"> </p>
        <p className="appBox"> </p>
      </div>
      <IoMdNotificationsOutline size={22} className={"vid_bell_Navbar"}/>
      <div className="auth_cont_navbar">
        {currentUser?(<>
        <div className="channel_logo_app" onClick={()=>setAuthBtn(true)}>
          <p className="fst_char_logo_app">
            {
              currentUser?.result.name?(<>
              {
                 currentUser?.result.name.charAt(0).toUpperCase()
              }
              </>):(
                <>
                {
                   currentUser?.result.email.slice(0,3).toUpperCase()
                }
                </>
              )
            }
          </p>

        </div>
        </>):(<>
        <p className="auth_btn" onClick={() =>{
          console.log(googleLogin());

          return  googleLogin();
        }}>
        <BiUserCircle size={22}/>
        <b>Sign in</b>

        </p>
       

        </>)}
      </div>

      </div>
      {console.log("authBtn",authBtn)}
      {
        
        authBtn&&<Auth setEditCreateChannelBtn={
          setEditCreateChannelBtn
        } setAuthBtn={setAuthBtn} user={currentUser}/>
      }
      </>
  )
}

export default Navbar