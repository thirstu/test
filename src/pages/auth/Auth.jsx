import React from "react";
import {Link} from 'react-router-dom';
import {BiLogOut} from 'react-icons/bi';
import "./Auth.css"
import { googleLogout } from '@react-oauth/google';
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../action/currentUser";

const Auth = ({ user, setAuthBtn, setEditCreateChannelBtn }) => {
  const dispatch=useDispatch();
  const logout=()=>{
    dispatch(setCurrentUser(null))
    localStorage.clear();
    googleLogout();

  }
  console.log(" user, setAuthBtn, setEditCreateChannelBtn", user, setAuthBtn, setEditCreateChannelBtn);


  return (
    <div className="auth_container" onClick={() => setAuthBtn(false)}>
      <div className="auth_container2">
        <div className="user_details">
          <div className="channel_logo_app">

          <p className="fstChar_logo_app">
            {user?.result.name ? (
              <>{user?.result.name.charAt(0).toUpperCase()}</>
            ) : (
              <>{user?.result.email.slice(0, 3).toUpperCase()}</>
            )}
          </p>
            </div>
            <div className="email_auth" >
            {user?.result.email}

            </div>
        </div>
        <div className="btns-auth">
          {
            user?.result.name ?(
              <>
              {
                <Link to={`/channel/${user?.result?._id}` }className="btn_auth">
                  Your Chanel
                </Link>

              }
              </>
            ):(
              <>
              <input type="submit" className="btn_auth" value="Create Your Own Chanel" onClick={()=>setEditCreateChannelBtn(true)} />
              </>
            )
          }
          <div>
            <div className="btn_auth" onClick={()=>logout()}>
              <BiLogOut/>
              Log Out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
