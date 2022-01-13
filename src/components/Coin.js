import React from 'react';
import "./Coin.css"

function Coin({coin}) {
    return (
        <div className="Coin">
            <div className="CoinName">
                <img width={30} height={30} src={coin.image} alt={coin.name} />
                <p>{coin.name}</p>
            </div>
            <p>{coin.assetType}</p>
            <p>{coin.depositDailyAvg}</p>
            <p>{coin.sodDistributionProportion}</p>
            <p>{coin.depositDistributeSodDay}</p>
            <p>{coin.borrowDistributeSodDa}</p>
        </div>
    );
}

export default Coin;
