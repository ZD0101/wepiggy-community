import React from 'react';
import './CoinMobile.css'
import {useNavigate} from "react-router";

function CoinMobile({image, name, ticker, depositMarket, depositTotalAPY, borrowMarket, borrowTotalAPY}) {
    let navigate = useNavigate()
    return (
        <div className="CoinMobile">
            <div className="CoinMobileInfo">
                <img className="CoinMobileInfoImage" src={image} alt=""/>
                <div className="CoinMobileInfoName">
                    <h3>{name}</h3>
                    <p>{ticker}</p>
                </div>
            </div>
            <div className="CoinMobileProps">
                <div>
                    <p>Deposit Market</p>
                    <p>{depositMarket}</p>
                </div>
                <div>
                    <p>Deposit Total APY%</p>
                    <p>{depositTotalAPY}</p>
                </div>
                <div>
                    <p>Borrow Market</p>
                    <p>{borrowMarket}</p>
                </div>
                <div>
                    <p>Borrow Total APY</p>
                    <p>{borrowTotalAPY}</p>
                </div>

            </div>
        </div>
    );
}

export default CoinMobile;
