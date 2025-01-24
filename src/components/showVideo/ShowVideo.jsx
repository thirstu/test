import React from 'react'
import "./ShowVideo.css"
import { Link } from 'react-router-dom';
import moment from "moment"
const ShowVideo = ({video}) => {
  console.log(video);
  return (
  <>
    <Link to={`/videoPage/${video._id}`}>
      <video src={video.video_src} className='video_showVideo'/>
    </Link>
    <div className="video_description">
    <div className="channel_logo_app">
      <div className="fstChar_logo_app">

      <>
      {
        video.uploader?.charAt(0).toUpperCase()
      }
      </>
      </div>
    </div>

    
    <div className="video_details">
      <p className="title_vid_showVideo">
        {
          video?.videoTitle
        }
      </p>
      <pre className="vid_views_uploadTime">
        {
          video?.uploader
        }
      </pre>
      <pre className="vid_views_uploadTime">
        {
          video?.views
        } views <div className="dot"></div> {moment(video?.createdAt).fromNow()}
      </pre>
    </div>
    </div>
  </>
  )
}

export default ShowVideo
