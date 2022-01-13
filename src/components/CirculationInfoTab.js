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
                <div className="RightInfoInner">
                    <h3>Pending claim SOD</h3>
                    <h3 style={{color: "#FF4C94"}}>0</h3>
                </div>
                <div className="RightInfoInnerTwo">
                    <RoundButton title="Claim"/>
                </div>
            </div>
        </div>
    );
}

export default CirculationInfoTab;
