import React, { useState } from 'react'
import "./Comment.css";
import DisplayComment from './DisplayComment';
import { useSelector } from 'react-redux';





const Comment = ({videoId}) => {
    console.log(videoId,videoId);
    const [commentText,setCommentText] =useState('')
    const currentUser=useSelector(state=>state.currentUserReducer);;
    const commentList=[{
        _id:1,
        commentBody:"hello",
        userCommented:"Abc",
    },
    {
        _id:2,
        commentBody:"hello2",
        userCommented:"Abc2",
    }]
    const handleOnSubmit=(e) => {
        e.preventDefault();
        if(currentUser){
            if(!commentText){
                alert("Please write your comment")
            }else{
                setCommentText("")
            }
        }else{
            alert("Please login to comment");
        }

    }


  return (
    <>
    <form className='comments_sub_form_comments'>

        <input type="text" onChange={e=>setCommentText(e.target.value)} placeholder='add comment...' value={commentText} className='comment_ibox' />
        <input type="submit" value="add" className='comment_add_btn_comments' />
    </form>
    <div className="display_comment_container">
        {
            commentList?.filter(q=>videoId===q?._id).reverse().map(m=>{
                return (<DisplayComment key={m._id} cid={m._id} userId={m.userId} commentBody={m.commentBody} commentOn={m.commentOn} userCommented={m.userCommented}/>)
            })
        }
    </div>
    </>

  )
}

export default Comment
