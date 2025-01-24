import * as api from '../api';


export const fetchAllChannel = (req, res, next) => async (dispatch)=>{
    try {
        const {data}=await api.fetchAllChannel();
        dispatch({type:"FETCH_CHANNELS",payload:data});
    } catch (err) {
        console.error(err);
    }
}