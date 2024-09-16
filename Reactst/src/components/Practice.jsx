import React,{useState} from "react";

function Practice({name,age,gender}){
    return(
        <div>
            <h1>{name}</h1>
            <h2>{age}</h2>
            <h3>{gender}</h3>
        </div>
    )
}

export default Practice