import React from 'react';

function ActionButton({title, color}) {

    return (
        <div className="ActionedButton" style={{
            backgroundColor: `${color}`,
            color: "white",
            borderRadius: 30,
            height: 50,
            width: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <p>{title}</p>
        </div>
    );
}

export default ActionButton;
