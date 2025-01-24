import React,{useState} from 'react'
import "./VideoUpload.css"
import {buildStyles,CircularProgressbar} from "react-circular-progressbar";
import { useDispatch, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {uploadVideo} from '../../action/video.js'
const VideoUpload = ({setVideoUploadPage}) => {
    const dispatch=useDispatch();
  const [title,setTitle]=useState("");
  const [videoFile,setVideoFile]=useState("");
  const [progress,setProgress]=useState(0);
  const handleSetVideoFile=(e)=>{
    setVideoFile(e.target.files[0]);

  }
  const currentUser=useSelector(state=>state.currentUserReducer);

  const fileOption={
    onUploadProgress:(ProgressEvent)=>{
        const {loaded,total}=ProgressEvent;
        const percentage=Math.floor(((loaded/1000)*100)/(total/1000));
        setProgress(percentage);
        if(percentage===100){
            
                setTimeout(function(){},3000);
                setVideoUploadPage(false);
    
            
        }
    },
  }
  
  const uploadVideoFile=()=>{
    if(!title){
      alert("Please enter a title of the video")
    }else if(!videoFile){
      alert("['please attach a video file")

    }else if(videoFile.size>1000000){
      alert("please attach a video file less than 1 kb")
    }else {
      const fileData=new FormData()
      fileData.append("file",videoFile)
      fileData.append("title",title)
      fileData.append("channel",currentUser?.result?._id)
      fileData.append("uploader",currentUser?.result?.name)

      console.log(videoFile)
      dispatch(uploadVideo({fileData:fileData,fileOption:fileOption}))
      
    }
  }
  return (
   <div className="container_videoUpload">
    <input type='submit' name='text' value={"X"} onClick={()=>setVideoUploadPage(false)} className='ibtn_x'/>
    <div className="container2_videoUpload">
    <div className="ibox_div_videoUpload">
                    <input type="text" maxLength={30} placeholder='Enter title of your video' className="ibox_videoUpload" onChange={(e) => {
                        setTitle(e.target.value);
                    }} />
                    <label htmlFor="file" className='ibox_cidUpload btn_videoUpload'>
                        <input type="file" name='file' style={{ fontSize: "1rem" }} onChange={(e) => { handleSetVideoFile(e) }} className="ibox_videoUpload" />
                    </label>
                </div>
                <div className="ibox_div_videoUpload">
                    <input type="submit" onClick={() => uploadVideoFile()} value={"Upload"} className='ibox_videoUpload btn_videoUpload' />
                    <div className="loader ibox_div_videoUpload">
                        <CircularProgressbar
                            value={progress}
                            text={`${progress}`}
                            styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: "butt",
                                textSize: "20px",
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(255,255,255,${progress / 100})`,
                                textColor: "#f88",
                                trailColor: "#adff2f",
                                backgroundColor: "#3e98c7",
                            })}

                        />
                    </div>
                </div>

    </div>

   </div>
  )
}

export default VideoUpload
/*return (
        <div className="container_videoUpload">
            <input type="submit" name='text' value={"X"} onClick={() => setvideouploadpage(false)} className="ibtn_x" />
            <div className="container2_videoUpload">
                <div className="ibox_div_videoUpload">
                    <input type="text" maxLength={30} placeholder='Enter title of your video' className="ibox_videoUpload" onChange={(e) => {
                        settitle(e.target.value);
                    }} />
                    <label htmlFor="file" className='ibox_cidupload btn_videoUpload'>
                        <input type="file" name='file' style={{ fontSize: "1rem" }} onChange={(e) => { handlesetvideofile(e) }} className="ibox_videoUpload" />
                    </label>
                </div>
                <div className="ibox_div_videoUpload">
                    <input type="submit" onClick={() => uploadvideofile()} value={"Upload"} className='ibox_videoUpload btn_videoUpload' />
                    <div className="loader ibox_div_videoUpload">
                        <CircularProgressbar
                            value={progress}
                            text={`${progress}`}
                            styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: "butt",
                                textSize: "20px",
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(255,255,255,${progress / 100})`,
                                textColor: "#f88",
                                trailColor: "#adff2f",
                                backgroundColor: "#3e98c7",
                            })}

                        />
                    </div>
                </div>
            </div>
        </div>
    )*/