import React from 'react';
import Coin from "./Coin";
import "./CoinsGrid.css"

function CoinsGrid(props) {


    let coins = [
        {
            image: "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-File.png",
            name: "Ethereum",
            assetType: "Stablecoin",
            depositDailyAvg: "$2.335M",
            sodDistributionProportion: "30.62%",
            depositDistributeSodDay: "102126.82",
            borrowDistributeSodDa: "102126.82",
        },
        {
            image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
            name: "USDT",
            assetType: "Stablecoin",
            depositDailyAvg: "$2.335M",
            sodDistributionProportion: "30.62%",
            depositDistributeSodDay: "102126.82",
            borrowDistributeSodDa: "102126.82",
        },
        {
            image: "https://www.pngall.com/wp-content/uploads/10/Solana-Crypto-Logo-PNG-File.png",
            name: "Solana",
            assetType: "Stablecoin",
            depositDailyAvg: "$2.335M",
            sodDistributionProportion: "30.62%",
            depositDistributeSodDay: "102126.82",
            borrowDistributeSodDa: "102126.82",
        },
        {
            image: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
            name: "BNB",
            assetType: "Stablecoin",
            depositDailyAvg: "$2.335M",
            sodDistributionProportion: "30.62%",
            depositDistributeSodDay: "102126.82",
            borrowDistributeSodDa: "102126.82",
        },
        {
            image: "https://cryptologos.cc/logos/polygon-matic-logo.png",
            name: "Polygon",
            assetType: "Stablecoin",
            depositDailyAvg: "$2.335M",
            sodDistributionProportion: "30.62%",
            depositDistributeSodDay: "102126.82",
            borrowDistributeSodDa: "102126.82",
        },

        {
            image: "https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-File.png",
            name: "WETH",
            assetType: "Stablecoin",
            depositDailyAvg: "$2.335M",
            sodDistributionProportion: "30.62%",
            depositDistributeSodDay: "102126.82",
            borrowDistributeSodDa: "102126.82",
        },
        {
            image: "https://c8.alamy.com/zooms/9/fa4aebd7ed2b4d539d8e2a6f6e18a987/2gnwj03.jpg",
            name: "WBDT",
            assetType: "Stablecoin",
            depositDailyAvg: "$2.335M",
            sodDistributionProportion: "30.62%",
            depositDistributeSodDay: "102126.82",
            borrowDistributeSodDa: "102126.82",
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Uniswap_Logo.svg/1026px-Uniswap_Logo.svg.png",
            name: "Uniswap",
            assetType: "Stablecoin",
            depositDailyAvg: "$2.335M",
            sodDistributionProportion: "30.62%",
            depositDistributeSodDay: "102126.82",
            borrowDistributeSodDa: "102126.82",
        },
        {
            image: "data:image/png;base64,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",
            name: "USDC",
            assetType: "Stablecoin",
            depositDailyAvg: "$2.335M",
            sodDistributionProportion: "30.62%",
            depositDistributeSodDay: "102126.82",
            borrowDistributeSodDa: "102126.82"
        }
    ]


    return (
        <div className="CoinsGrid">
            {coins.map(c => <Coin key={c.name} coin={c}/>)}
        </div>
    );
}

export default CoinsGrid;
