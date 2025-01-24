import React from 'react'
import ShowVideoList from '../showVideoList/ShowVideoList'
import { useSelector } from 'react-redux';

const WhlVideoList = ({ page,currentUser,videoList}) => {

  return (
<>
{
    currentUser?(<>
    {videoList?.filter(q=>q?._id===currentUser).reverse().map(m=>{
        return(
            <React.Fragment key={m?._id}>
            <ShowVideoList videoId={m?._id} key={m?._id} />

            </React.Fragment>
        )
    })}
    
    </>):(
        <>
        <h2 style={{color:"white"}}>Please login to watch your {page}</h2>
        </>
    )
}
</>
  )
}

export default WhlVideoList
