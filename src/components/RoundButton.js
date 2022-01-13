import React from 'react';
import "./RoundButton.css"

function RoundButton({title, backgroundColor}) {
    return (
        <div>
            <div className="RoundButton" style={{backgroundColor: backgroundColor}}>
                <h4>{title}</h4>
            </div>
        </div>
    );
}

export default RoundButton;
