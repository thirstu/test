import React, { useState,useSelector } from "react";
import "./SearchBar.css";
import { BsMicFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
// import SearchList from "./SearchList";
import SearchList from "./SearchList.jsx"
import { Link } from "react-router-dom";
import "./SearchBar.css";
function SearchBar() {
const [searchQuery, setSearchQuery] = useState('');
const [searchList, setSearchList] = useState('');
const titleArray=useSelector(s=>s?.videoReducer)?.data?.filter(q=>q?.videoTitle.toUpperCase().includes(searchQuery?.toUpperCase())).map(m=>m?.videoTitle)
// const titleArray = [
// "video",
// "audio",
// "video2",
// "video3",
// "mango",
// "tang",
// "slot",
// "poker",
// "ladal",
// ].filter((q) => {
// const result = q
//     .toLocaleUpperCase()
//     .includes(searchQuery.toLocaleUpperCase());
// console.log(
//     // "searchbAR 12",
//     // result,
//     // q,
//     // q.toLocaleUpperCase(),
//     searchQuery.toLocaleUpperCase()===''
// );
// if(searchQuery.toLocaleUpperCase()==='')return;
// // console.log("searchbAR 14",searchQuery);
// return result;
// });
return (
<>
    <div className="searchBar_container">
    <div className="searchBar_container2">
        <div className="search_div">
        <input
            type="text"
            className="iBox_searchBar"
            placeholder="Search"
            onChange={(e) => {
            console.log("searchbAR 21",e.target.value);

            return setSearchQuery(e.target.value);
            }}
            value={searchQuery}
            onClick={(e) => {
            console.log("searchbAR 25",e.target.value);

            return setSearchList(true);
            }}
        />
        <SearchList
                setSearchQuery={setSearchQuery}
                titleArray={titleArray}
                />
        <Link to={`/search/${searchQuery}`} >
            <FaSearch className="searchIcon_searchBar" />
        </Link>
        <BsMicFill className="mic_searchBar">
            {
                <SearchList
                setSearchQuery={setSearchQuery}
                titleArray={titleArray}
                />
            }
            </BsMicFill>
        </div>
    </div>
    </div>
</>
);
}

export default SearchBar;
