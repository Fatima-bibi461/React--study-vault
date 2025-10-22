import { useState } from "react";

let isstyle={color:'red'};

export default function Likebutton(){
    

    let [likebutton,like]=useState(false);
    function clickLike(){
    like(!likebutton)

    }

    return(
        <div>
        
        <p onClick={clickLike}>
            {likebutton?( <i className="far fa-heart" ></i> ):(<i className="fa-solid fa-heart" style={isstyle}></i>
)}
           
</p>
        
        
        </div>
    )

}