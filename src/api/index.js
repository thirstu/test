import axios from "axios"

const API=axios.create({baseURL:`http://localhost:8000/`});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem("Profile")){
        req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem("Profile")).token}`;
    }
    return req;
})

export const login =(authData)=>API.post("/user/login",authData);
export const updateChannelData=(id,updateData)=>API.patch(`/user/update${id}`,updateData);
export const fetchAllChannel=()=>API.get("/user/getAllChannels");



export const uploadVideo=(fileData,fileOption)=>API.post("/video/uploadVideo",fileData,fileOption)
export const getVideos=()=>API.get("/video/getVideos");
export const likeVideo=(id,Like)=>API.patch(`/video/like/${id}`,{Like});
export const viewsVideo=(id)=>API.patch(`/video/view/${id}`);

export const postComment=(commentData)=>API.post('/comment/post',commentData)
export const deleteComment=(id)=>API.delete(`/comment/delete/${id}`)
export const editComment=(id,commentBody)=>API.patch(`/comment/edit/${id}`,{commentBody})
export const getAllComment=()=>API.get('/comment/get')

export const addToHistory=(historyData)=>API.post("/video/history",historyData)
export const getAllHistory=()=>API.get('/video/getAllHistory')
export const deleteHistory=(userid)=>API.delete(`/video/deleteHistory/${userid}`)

export const addToLikeVideo=(likedVideoData)=>API.post('/video/LikeVideo',likedVideoData)
export const getAllLikeVideo=()=>API.get('/video/getAllLikeVideo')
export const deleteLikedVideo=(videoId,viewer)=>API.delete(`/video/deleteLikeVideo/${videoId}/${viewer}`)

export const addToWatchLater=(watchLaterData)=>API.post('/video/WatchLater',watchLaterData)
export const getAllWatchLater=()=>API.get('/video/getAllWatchLater')
export const deleteWatchLater=(videoId,viewer)=>API.delete(`/video/deleteWatchLater/${videoId}/${viewer}`)