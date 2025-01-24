import * as api from "../api";

export const uploadVideo = (videoData) => async (dispatch) => {
    try {
        const { fileData, fileOption } = videoData;
        console.log(fileData,fileOption)
        const { data } = await api.uploadVideo(fileData, fileOption)
        dispatch({ type: 'POST_VIDEO', data })
        dispatch(getAllVideo())
    } catch (error) {
        alert(error.response.data.message)
    }
}

export const getAllVideo = () => async (dispatch) => {
    try {
        const { data } = await api.getVideos()
        dispatch({ type: 'FETCH_ALL_VIDEOS', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const likeVideo = (likeData) => async (dispatch) => {
    try {
        const { id, Like } = likeData;
        console.log(likeData)
        const { data } = await api.likeVideo(id, Like);
        dispatch({ type: "POST_LIKE", payload: data })
        dispatch(getAllVideo())
    } catch (error) {
        console.log(error)
    }
}

export const viewVideo=(viewData)=>async(dispatch)=>{
    try {
        const{id}=viewData;
        console.log(id)
        const {data}=await api.viewsVideo(id)
        dispatch({type:"POST_VIEWS",data})
        dispatch(getAllVideo())
    } catch (error) {
        console.log(error)
    }
}