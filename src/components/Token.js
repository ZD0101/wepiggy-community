import React from 'react';
import "./Token.css"
import RoundButton from "./RoundButton";

function Token({image, name, stake, tvl}) {
    return (
        <div className="Token">
            <div className="TokenName">
                <img className="Image" src={image} alt=""/>
                <h1>{name}</h1>
            </div>
            <div className="TokenInfo">
                <div className="Row">
                    <span className="RowLeft">Stake</span>
                    <span className="TokenProp">{stake}</span>
                </div>
                <div className="Row">
                    <span className="RowLeft">Pools Total Value Locked</span>
                    <span className="TokenProp">${tvl}</span>
                </div>
            </div>
            <RoundButton title="Select"/>
        </div>
    );
}

export default Token;
