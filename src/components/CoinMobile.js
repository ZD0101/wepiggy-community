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
                    <p className="CoinMobilePropName">Deposit Market</p>
                    <p className="CoinMobilePropValue">{depositMarket}</p>
                </div>
                <div>
                    <p className="CoinMobilePropName">Deposit Total APY%</p>
                    <p className="CoinMobilePropValue">{depositTotalAPY}</p>
                </div>
                <div>
                    <p className="CoinMobilePropName">Borrow Market</p>
                    <p className="CoinMobilePropValue">{borrowMarket}</p>
                </div>
                <div>
                    <p className="CoinMobilePropName">Borrow Total APY</p>
                    <p className="CoinMobilePropValue">{borrowTotalAPY}</p>
                </div>

            </div>
        </div>
    );
}

export default CoinMobile;
