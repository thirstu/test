import React, { useState } from 'react'
import "./CreateEditChannel.css";
import { useSelector } from 'react-redux';
import { updateChannelData } from '../../action/currentUser';
import { useDispatch } from 'react-redux';
import { login } from '../../action/auth';


const CreateEditChannel = ({setEditCreateChannelBtn}) => {
  const dispatch=useDispatch();
  const currentUser=useSelector(state=>state.currentUserReducer);
  const [name,setName]=useState(currentUser?.result.name);
  const [desc,setDesc]=useState(currentUser?.result.desc);
 
  console.log("CreateEditChannel");
  
  const handleSubmit = () => {
    if(!name){
      alert("please enter your name")
    }else if(!desc) {
      alert("please enter your Description")
    }else{

      dispatch(updateChannelData(currentUser?.result._id,{name:name,desc:desc}))
      setEditCreateChannelBtn(true)
      setTimeout(()=>{
        dispatch(login({email:currentUser.result.email}))
      },5000)
    }
  }
 
  console.log(name,desc);

  return (
    <div className="container_createEditChannel">
      <input type="submit" name='text' value={'X'} className='iBtn_x' onClick={()=>setEditCreateChannelBtn(true)} />
      <div className="container2_createEditChannel">
        <h1>{currentUser?.result?.name ? 
          <>
        Edit
        </>:<>
        Create
        </>
        
      } Your Channel </h1>
      <input type="text" placeholder='Enter Your/Channel Name' name='text' value={name} onChange={(e)=>setName(e.target.value)} className='ibox' />
      <textarea type='text' rows={15} placeholder='Enter Channel Description' className='ibox' value={desc} onChange={e=>setDesc(e.target.value)} id=""></textarea>

      <input type="submit" value={"submit"} onClick={handleSubmit} className='iBtn' />
      </div>
    </div>
  )
}

export default CreateEditChannel
