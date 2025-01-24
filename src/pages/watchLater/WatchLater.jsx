import React from 'react'
import vid from '../../components/video/vid.mp4';
import WHL from '../../components/whl/WHL';
const WatchLater = () => {
      const toWatchLaterVideosList = [
        {
          _id: 1,
          video_src: vid,
          chanel: "ccc",
          title: "video 1",
          uploader: "abc",
          description: "description of the video 1",
        },
        {
          _id: 2,
          video_src: vid,
          chanel: "ccc",
          title: "video 2",
          uploader: "abc",
          description: "description of the video 2",
        },
        {
          _id: 3,
          video_src: vid,
          chanel: "ccc",
          title: "video 3",
          uploader: "abc",
          description: "description of the video 3",
        },
        {
          _id: 4,
          video_src: vid,
          chanel: "ccc",
          title: "video 4",
          uploader: "abc",
          description: "description of the video 4",
        },
        {
          _id: 5,
          video_src: vid,
          chanel: "ccc",
          title: "video 5",
          uploader: "abc",
          description: "description of the video 5",
        },
        {
          _id: 6,
          video_src: vid,
          chanel: "ccc",
          title: "video 6",
          uploader: "abc",
          description: "description of the video 6",
        },
        {
          _id: 7,
          video_src: vid,
          chanel: "ccc",
          title: "video 7",
          uploader: "abc",
          description: "description of the video 7",
        },
        {
          _id: 8,
          video_src: vid,
          chanel: "ccc",
          title: "video 8",
          uploader: "abc",
          description: "description of the video 8",
        },
      ];
  return (
    <WHL page={"Watch Later"} videoList={toWatchLaterVideosList} />
  )
}

export default WatchLater