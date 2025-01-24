import React from 'react';
import './DescribeChannel.css';
import {FaEdit,FaUpload} from "react-icons/fa";
import { useSelector } from 'react-redux';

const DescribeChannel = ({channelId,setEditCreateChannelBtn,setVideoUploadPage}) => {
  //   const userChannel=[
  //   {
  //       _id:1,
  //       name:"abcjabsc",
  //       email:"abcd@gmail.com",
  //       joinedon:"222-07-134",
  //       desc:"bithead"
  //   }
  // ]

  const channel=useSelector(state=>state.channelReducer)

  // const channel=useSelector(state=>state.channelReducer)

const currentChannel=userChannel.filter((c)=>c._id=== channelId)[0];
const currentUser=useSelector(state=>state.currentUserReducer);

console.log(channelId,"userChannel",userChannel);
  return (
  <div className="container3_channel">
    <div className="channel_logo_channel">
      <b>
        {userChannel?.map(channel=>channel?._id===Number(channelId)&&channel?.name.charAt(0).toUpperCase())}
        {/* userChannel[0]?.name.charAt(0).toUpperCase() */}
      </b>
    </div>
    <div className="description_channel">
      <b>{userChannel.map(a=>a?.email===currentUser.result.email&&a.name)}</b>
      <p>{userChannel.map(a=>a?.email===currentUser.result.email&&a.desc)}</p>
    </div>
    {userChannel.map(a=>a?._id===currentUser.result._id&&true)&&(
      <>
      <p className="editBtn_channel" onClick={()=>setEditCreateChannelBtn(true)}>
          <FaEdit/>
          <b>Edit Channel</b>
        </p>
      <p className="uploadBtn_channel" onClick={()=>setVideoUploadPage(true)}>
        <FaUpload/>
        <b>Upload Video</b>

      </p>

      </>
    )}
  </div>
  )
}

export default DescribeChannel
