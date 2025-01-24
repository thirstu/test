import React ,{useState} from 'react'
import './Comment.css';
import moment from 'moment';
import { useSelector } from 'react-redux';


const DisplayComment = ({cid,userId,commentBody,commentOn,userCommented}) => {
    const [edit,setEdit]=useState(false)
    const [cmtBody,setCmtBody]=useState("")
    const [commentId,setCommentId]=useState("")
    const currentUser=useSelector(state=>state.currentUserReducer);

      const handleEdit=(cmtId ,cmtBody)=>{
        setEdit(true)
        setCommentId(cmtId)
        setCmtBody(cmtBody)
      }
  return (
  <>
  {
    edit?(
        <>
        <form className='comments_sub_form_comments'>
            <input type='text' onChange={(e)=>setCmtBody(e.target.value) } placeholder='Edit comments...' value={cmtBody} className='comment_ibox' />
            <input type='submit' value="change" className='comment_add_btn_comments' />
        </form>
        </>
    ):(
        <p className="comment_body">
            {commentBody}
        </p>
    )
    
  }
  <p className="userCommented">
    {" "}- {userCommented} commented {moment(commentOn).fromNow()}
  </p>
  {currentUser?.result?._id===userId&&(
    <p className="editDel_displayComment">
        <i onClick={()=>handleEdit(cid,commentBody)}>Edit</i>
        <i>
            Delete
        </i>
    </p>
  )}

 
  </>
  )
}

export default DisplayComment
