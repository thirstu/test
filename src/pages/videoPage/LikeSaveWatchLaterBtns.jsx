import React,{useState} from 'react'
import { BsThreeDots } from 'react-icons/bs';
import { AiFillDislike ,AiFillLike,AiOutlineDislike,AiOutlineLike} from 'react-icons/ai';
import { MdPlaylistAddCheck } from 'react-icons/md';
import {RiHeartAddFill,RiPlayListAddFill,RiShareForwardLine} from "react-icons/ri"
import { useSelector,useDispatch } from 'react-redux';
import {likeVideo} from '../../action/video.js'


const LikeSaveWatchLaterBtns = ({vv,videoPrm}) => {
  const dispatch=useDispatch();
  const [saveVideo,setSaveVideo]=useState(false);
  const [dislikeBtn,setDislikeBtn]=useState(false);
  const [likeBtn,setLikeBtn]=useState(false);
  const currentUser=useSelector(state=>state.currentUserReducer);

  const toggleSavedVideo=() => {
    if(currentUser){
      if(saveVideo){
        setSaveVideo(false);
      }else{
        setSaveVideo(true);
      }
    }else{
      alert('Please login to save video')
    }
  }
  const toggleLikeVideo=(e,like) => {
    if(currentUser){
      if(likeBtn){
        setLikeBtn(false);
        dispatch(likeVideo({id:videoPrm,like:like-1}))
      }else{
        setLikeBtn(true);
        dispatch(likeVideo({id:videoPrm,like:like+1}))
        setDislikeBtn(false);
      }
    }else{
      alert('Please login to Like video')
    }
  }
  const toggleDislikeVideo=(e,like) => {
    if(currentUser){
      if(dislikeBtn){
        setDislikeBtn(false);
      }else{
        setDislikeBtn(true);
        if(likeBtn){
          dispatch(likeVideo({id:videoPrm,like:like-1}))
        }
        setLikeBtn(false);
      }
    }else{
      alert('Please login to dislike video')
    }
  }
  return (
   <div className="btns_cont_videoPage">
    <div className="btn_videoPage">
      <BsThreeDots/>
    </div>
    <div className="btn_videoPage" >
      <div className="like_videoPage" onClick={(e)=>toggleLikeVideo(e,vv.like)}>
        {
          likeBtn?(<>
          <AiFillLike size={22} className='btns_videoPage'/>
          </>
         
          ): (<>
          <AiOutlineLike size={22} className='btns_videoPage'/>
          
            </>)
        }
        <b>
          {
            vv.like
          }
        </b>
      </div>
      <div className="like_videoPage" onClick={(e)=>toggleDislikeVideo(e,vv.like)}>
        {
          dislikeBtn?(<>
          <AiFillDislike size={22} className='btns_videoPage'/>
          </>):(<>
          <AiOutlineDislike size={22} className='btns_videoPage'/>
          </>)
        }
        <b>DISLIKE</b>
      </div>
      <div className="like_videoPage" onClick={(e)=>toggleSavedVideo(e)}>
        {
          saveVideo?(<>
          <MdPlaylistAddCheck size={22} className='btns_videoPage'/>
          <b>Saved</b>
          </>):(<>
          <RiPlayListAddFill size={22} className='btns_videoPage'/>
          <b>Save</b>
          </>)
        }
      </div>
      <div className="like_videoPage">
        <>
        <RiShareForwardLine size={22} className='btns_videoPage'/>
        <b>Share</b>
        </>
      </div>


    </div>
   </div>
  )
}

export default LikeSaveWatchLaterBtns
