import React from "react";
import "./Library.css";
import LeftSideBar from "../../components/leftSideBar/LeftSideBar";
import { MdOutlineWatchLater } from "react-icons/md";
import vid from "../../components/video/vid.mp4";
import { FaHistory } from "react-icons/fa";
import WhlVideoList from "../../components/whl/WhlVideoList";
import { AiOutlineLike } from "react-icons/ai";
import { useSelector } from 'react-redux';

const Library = () => {
    const currentUser = useSelector(state=>state.currentUserReducer);
    
    const videos = [
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
        <div className="container_pages_app">
        <LeftSideBar />
        <div className="container2_pages_app ">
            <div className="library_container">
            <div className="container_libraryPage">
            <h1 className="title_container_libraryPage">
                <b>
                <FaHistory />
                </b>
                <b>History</b>
            </h1>
            <div className="container_videoList_libraryPage">
                <WhlVideoList
                page={"History"}
                currentUser={currentUser?.result._id}
                videoList={videos}
                />
            </div>
            </div>
            <div className="container_libraryPage">
            <h1 className="title_container_libraryPage">
                <b>
                <MdOutlineWatchLater />
                </b>
                <b>Watch later</b>
            </h1>
            <div className="container_videoList_libraryPage">
                <WhlVideoList
                page={"Watch Later"}
                currentUser={currentUser?.result._id}
                videoList={videos}
                />
            </div>
            </div>
            <div className="container_libraryPage">
            <h1 className="title_container_libraryPage">
                <b>
                <AiOutlineLike />
                </b>
                <b>Like Videos</b>
            </h1>
            <div className="container_videoList_libraryPage">
                <WhlVideoList
                page={"Like Videos"}
                currentUser={currentUser?.result._id}
                videoList={videos}
                />
            </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Library;
