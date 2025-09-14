import React from "react";

const UserCard= (props)=>{
    
    
    return(

        <div className="user-card">
            {/* <img className="user-img"  />  */}
            {/* <h2>{props.data.name.first}</h2> */}
             <p>{props.data.gender}</p> 
            {/* <p>{props.data.location.city}</p>  */}
           

        </div>
    );
};
export default UserCard;