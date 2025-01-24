import React from 'react';
import "./SearchList.css";

import {FaSearch} from "react-icons/fa";
function SearchList({titleArray,setSearchQuery}) {
  console.log("hello",titleArray,setSearchQuery);
  return (
   <>
   <div className="container_searchList">
    {
      titleArray.map(m=>{
        console.log("SearchList",m);
        return (<p key={m} onClick={e=>setSearchQuery('')} className='titleItem'>
          <FaSearch/>{m}
        </p>)
      })
    }
   </div>
   </>
  )
}

export default SearchList