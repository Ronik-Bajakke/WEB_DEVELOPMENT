import {useState} from "react";

function LikeButton(){
    let [isLiked,setIsLiked]=useState(false);
    
    function toggleLike(){
        setIsLiked(!isLiked);
    }

    return(
        <div>
        <p onClick={toggleLike}>{isLiked?
            <i className="fa-regular fa-heart"></i>
            :
            <i className="fa-solid fa-heart"></i>
            }</p>
        </div>
    )
}

export default LikeButton;