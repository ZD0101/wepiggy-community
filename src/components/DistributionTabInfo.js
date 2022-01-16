import React from 'react';
import "./DistributionTabInfo.css"

function DistributionTabInfo({infoLeft, infoRight}) {
    return (
        <div className="DistributionTabInfo">
            <div className="DistributionTabInfoText">
                <p style={{fontFamily: "Poppins Light"}}>Total Distribution Speed</p>
                <h3>{infoLeft}</h3>
            </div>
            <div className="DistributionTabInfoText">
                <p style={{fontFamily: "Poppins Light"}}>Proportion for All Different Chains</p>
                <h3>{infoRight}</h3>
            </div>
        </div>
    );
}

export default DistributionTabInfo;
