import React from "react";
import "./style.css"

const Tiles = function (props) {
   
    return (
        <img src={props.image} alt={props.alt} data-id={props.id} className="tile" />
    )
}

export default Tiles;
