import React from 'react'
// import leftSideBar from '../leftSideBar/LeftSideBar';
import './WHL.css';
import WhlVideoList from './WhlVideoList'
import LeftSideBar from '../leftSideBar/LeftSideBar';
import { useSelector } from 'react-redux';

const WHL = ({page, videoList}) => {

    const currentUser=useSelector(state=>state.currentUserReducer);
  return (
   <div className="container_pages_app">
    <LeftSideBar/>
    <div className="container2_pages_app">
        <p className="container_whl">
            <div className="box_whl leftSide_whl">
                <b>Your {page} Shown Here</b>
                {
                    page === "History" && <div className="clear_history_btn">Clear History</div>
                }
            </div>
            <div className="rightSide_whl">
                <h1>{page} </h1>
                <div className="whl_list">
                    <WhlVideoList page={page} currentUser={currentUser.result._id} videoList={videoList} />
                </div>
            </div>
        </p>
    </div>
   </div>
  )
}

export default WHL