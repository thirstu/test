import React, { useEffect } from 'react';
import './VideoPage.css';
import moment from 'moment';
import LikeSaveWatchLaterBtns from './LikeSaveWatchLaterBtns';
import { useParams,Link } from 'react-router-dom';
import video_src from '../../components/video/vid.mp4';
import Comment from '../../components/comment/Comment';
import { useSelector,useDispatch } from 'react-redux';
import { viewVideo } from '../../action/video';

const VideoPage = () => {
  const dispatch=useDispatch();
    const {videoPrm}=useParams();
     const videos=useSelector(state=>state.videoReducer);
    // const videos = [
    //   {
    //     _id: 1,
    //     video_src:video_src,
    //     chanel: "ccc",
    //     title: "video 1",
    //     uploader: "abc",
    //     description: "description of the video 1",
    //   },
    //   {
    //     _id: 2,
    //     video_src:video_src,
    //     chanel: "ccc",
    //     title: "video 2",
    //     uploader: "abc",
    //     description: "description of the video 2",
    //   },
    //   {
    //     _id: 3,
    //     video_src:video_src,
    //     chanel: "ccc",
    //     title: "video 3",
    //     uploader: "abc",
    //     description: "description of the video 3",
    //   },
    //   {
    //     _id: 4,
    //     video_src:video_src,
    //     chanel: "ccc",
    //     title: "video 4",
    //     uploader: "abc",
    //     description: "description of the video 4",
    //   },
    //   {
    //     _id: 5,
    //     video_src:video_src,
    //     chanel: "ccc",
    //     title: "video 5",
    //     uploader: "abc",
    //     description: "description of the video 5",
    //   },
    //   {
    //     _id: 6,
    //     video_src:video_src,
    //     chanel: "ccc",
    //     title: "video 6",
    //     uploader: "abc",
    //     description: "description of the video 6",
    //   },
    //   {
    //     _id: 7,
    //     video_src:video_src,
    //     chanel: "ccc",
    //     title: "video 7",
    //     uploader: "abc",
    //     description: "description of the video 7",
    //   },
    //   {
    //     _id: 8,
    //     video_src:video_src,
    //     chanel: "ccc",
    //     title: "video 8",
    //     uploader: "abc",
    //     description: "description of the video 8",
    //   },
    // ];
    console.log(videoPrm);

    // const vidNumber=parseInt(videoPrm,10)
    console.log(vidNumber);
    const vv=videos?.data.filter((q)=>q._id===videoPrm)[0];
    const currentUser=useSelector(state=>state.currentUserReducer);
    console.log(vv,videos,vidNumber);

    const handleViews=()=>{
      dispatch(viewVideo({id:videoPrm}))
    }
    useEffect(()=>{
      handleViews();

    },[])
  return (
   <>
   <div className="container_videoPage">
    <div className="container2_videoPage">
      <div className="video_display_screen_videoPage">
        <video src={`http://localhost:5000/${vv?.filePath}`} className="video_showVideo_videoPage" controls></video>
        <div className="video_details_videoPage">
          <div className="video_btns_title_videoPage_cont">
            <p className="video_title_videoPage">
              {
                vv?.title
              }
            </p>
            <div className="view_date_btns_videoPage">
              <div className="views_videoPage">
                {
                  vv?.views
                }view <div className="dot"></div>{" "}
                {moment(vv.createdAt).fromNow()}
              </div>
              <LikeSaveWatchLaterBtns vv={vv } vid={videoPrm}/>
            </div>
          </div>
          <Link to={'/'} className='channel_details_videoPage'>
          <b className="channel_logo_videoPage">
          <p>{vv?.uploader.charAt(0).toUpperCase()}</p>
          </b>
          <p className="channel_name_videoPage">
              {
                vv.uploader
              }
            </p>
          
          </Link>
          <div className="comments_videoPage">
            <h2>
              <u>
                Comments
              </u>
            </h2>
            <Comment videoId={vv._id}/>
          </div>
        </div>
      </div>
      <div className="moreVideoBar">
        More Videos
      </div>
    </div>
   </div>
   </>  
   )
}

export default VideoPage
