import React from 'react'
import "./ShowVideoGrid.css"
import ShowVideo from '../showVideo/ShowVideo'
const ShowVideoGrid = ({videos}) => {
  console.log(videos);
  return (
    <div className="container_showVideoGrid">
      {
        videos?.reverse().map(video=>{
          console.log(video);
          return (
            <div key={video._id} className="video_box_app">
              <ShowVideo video={video}/>
            </div>
          )
        })

      }
    </div>
  )
}

export default ShowVideoGrid
