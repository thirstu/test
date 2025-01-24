import React from "react";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/search/Search";
import VideoPage from "./pages/videoPage/VideoPage";
import Channel from "./pages/channel/Channel";
import Library from "./pages/library/Library";
import LikedVideo from "./components/likedVideo/LikedVideo";
import WatchHistory from "./pages/watchHistory/WatchHistory";
import WatchLater from "./pages/watchLater/WatchLater";
import YourVideos from "./pages/yourVideos/YourVideos";
function AllRoutes({ setEditCreateChannelBtn, setVideoUploadPage }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:searchQuery" element={<Search />} />
      <Route path="/videoPage/:videoPrm" element={<VideoPage />} />
      <Route path="/library" element={<Library />} />
      <Route path="/likedVideo" element={<LikedVideo />} />
      <Route path="/watchHistory" element={<WatchHistory />} />
      <Route path="/yourVideos" element={<YourVideos />} />
      <Route path="/watchLater" element={<WatchLater />} />
      <Route
        path="/channel/:channelId"
        element={
          <Channel
            setEditCreateChannelBtn={setEditCreateChannelBtn}
            setVideoUploadPage={setVideoUploadPage}
          />
        }
      />
    </Routes>
  );
}

export default AllRoutes;
