import React, {useEffect, useState} from 'react';
import "./Coin.css"
import {useNavigate} from "react-router";
import {Tooltip} from "@mui/material";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ActionButton from "./ActionButton";

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        prevWidth: undefined,
        height: undefined,
        prevHeight: undefined
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize(prevState => ({
                width: window.innerWidth,
                prevWidth: prevState.width,
                height: window.innerHeight,
                prevHeight: prevState.height
            }));
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}

function Coin({coin}) {
    let navigate = useNavigate()

    const size = useWindowSize();

    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        if (size.prevWidth > 1300 && size.width <= 1300) {
            setDimensions({width: window.innerWidth, height: window.innerHeight})
            console.log(dimensions)
        }
        if (size.prevWidth < 1300 && size.width >= 1300) {
            setDimensions({width: window.innerWidth, height: window.innerHeight})
            console.log(dimensions)
        }
    }, [size])

    return (
        // <div className="Coin">
        //     <div className="CoinName">
        //         <img width={30} height={30} src={coin.image} alt={coin.name} />
        //         <p>{coin.name}</p>
        //     </div>
        //     <p style={{fontSize: 14}}>{coin.assetType}</p>
        //     <p>{coin.depositDailyAvg}</p>
        //     <p>{coin.sodDistributionProportion}</p>
        //     <p>{coin.depositDistributeSodDay}</p>
        //     <p>{coin.borrowDistributeSodDa}</p>
        // </div>
        <div className="Coin">
            <div className="CoinInfo">
                <img className="CoinInfoImage" src={coin.image} alt={coin.name}/>
                <div className="CoinInfoName">
                    <p className="Name">{coin.name}</p>
                </div>
            </div>

            <div className="PropertyInfo">
                <Tooltip placement="top" title="Deposit Daily Avg"><h3 className="PropertyName">Deposit Daily Avg</h3>
                </Tooltip>
                <h3 className="PropertyValue">{coin.depositDailyAvg}</h3>
            </div>
            {dimensions.width > 1300 ? <div className="PropertyInfo">
                <Tooltip placement="top" title="SOD Distribution Proportion"><h3 className="PropertyName">SOD
                    Distribution Proportion</h3></Tooltip>
                <h3 className="PropertyValue">{coin.sodDistributionProportion}%</h3>
            </div> : ""}

            <div className="PropertyInfo">
                <Tooltip placement="top" title="
Deposit Distribute WPC/Day"><h3 className="PropertyName">
                    Deposit Distribute SOD/Day</h3>
                </Tooltip>
                <h3 className="PropertyValue">{coin.depositDistributeSodDay}</h3>
            </div>

            {dimensions.width > 1300 ? <div className="PropertyInfo">
                <Tooltip placement="top" title="Borrow Distribute SOD/Day"><h3 className="PropertyName">Borrow
                    Distribute SOD/Day</h3></Tooltip>
                <h3 className="PropertyValue">{coin.borrowDistributeSodDa}%</h3>
            </div> : ""}
        </div>
    );
}

export default Coin;
