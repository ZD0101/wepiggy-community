import React from 'react';
import "./CirculationInfoTab.css"
import RoundButton from "./RoundButton";

function CirculationInfoTab(props) {
    return (
        <div className="CirculationInfoTab">
            <div className="LeftInfo">
                <h3>SOD Current circulation</h3>
                <h2>2,847,732,798,2073</h2>
            </div>
            <div className="RightInfo">
                <div className="LeftInfo">
                    <h3>Pending claim SOD</h3>
                    <h2 style={{color: "#FF4C94"}}>0</h2>
                </div>
                <div className="RightInfoInnerTwo">
                    <RoundButton title="Claim" width="60"/>
                </div>
            </div>
        </div>
    );
}

export default CirculationInfoTab;
