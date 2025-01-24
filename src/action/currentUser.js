import { data } from "react-router-dom"

export const setCurrentUser=() =>{

    return {
        type:"FETCH_CURRENT_USER",
        payload:data
    }
}
export const updateChannelData=(id,updateData)=>async(dispatch)=>{
    try {
        const {data}=await api.updateChannelData(id,updateData);
        dispatch({type:"UPDATE_DATA",payload:data})
    } catch (error) {
        console.error(error)
    }
}