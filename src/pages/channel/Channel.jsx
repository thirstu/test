import React from 'react'
import DescribeChannel from './DescribeChannel'
import LeftSideBar from '../../components/leftSideBar/LeftSideBar';
import ShowVideoGrid from '../../components/showVideoGrid/ShowVideoGrid';

import video_src from "../../components/video/vid.mp4"
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Channel = ({setEditCreateChannelBtn,setVideoUploadPage}) => {
  const {channelId}=useParams();
  const videos=useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChannel===channelId).reverse();
  //     const videos = [
  //   {
  //     _id: 1,
  //     video_src: video_src,
  //     Chanel: "62bafe6752cea35a6c30685f",
  //     title: "video 1",
  //     Uploder: "abc",
  //     description: "description of  video 1",
  //   },
  //   {
  //     _id: 2,
  //     video_src: video_src,
  //     Chanel: "cdd",
  //     title: "video 2",
  //     Uploder: "abc",
  //     description: "description of  video 2",
  //   },
  
  // ];

  return (
  <div className="container_pages_app">
    <LeftSideBar />
    <div className="container2_pages_app">
      <DescribeChannel channelId={channelId} setEditCreateChannelBtn={setEditCreateChannelBtn} setVideoUploadPage={setVideoUploadPage}  />
      <ShowVideoGrid videos={videos}/>
    </div>
  </div>
  )
}

export default Channel
