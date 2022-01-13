import React from 'react';
import "./Pool.css"
import RoundButton from "./RoundButton";

function Pool({image, title}) {
    return (
        <div className="Pool">
            <img className="picture" src={image} alt=""/>
            <div className="SelectButton">
            <h3 style={{color: "white"}}>{title}</h3>
                <RoundButton title="Select"/>
            </div>
        </div>
    );
}

export default Pool;
