import React, {useContext} from 'react';
import CirculationInfoTab from "./CirculationInfoTab";
import "./Farms.css"
import Token from "./Token";
import TokenFilters from "./TokenFilters";
import {GlobalContext} from "./GlobalContext";

function Farms(props) {

    const state = useContext(GlobalContext)

    let tokens = [
        {
            image: "https://prod.wepiggy.fortop.site/coinIcon/piggy/pRAI.png",
            name: "pRai",
            stake: "WePiggy RAI",
            tvl: 968.02
        },
        {
            image: "https://prod.wepiggy.fortop.site/coinIcon/piggy/pRAI.png",
            name: "pxLON",
            stake: "WePiggy RAI",
            tvl: 968.02
        },
        {
            image: "https://prod.wepiggy.fortop.site/coinIcon/piggy/pRAI.png",
            name: "pLRC",
            stake: "WePiggy RAI",
            tvl: 968.02
        },
        {
            image: "https://prod.wepiggy.fortop.site/coinIcon/piggy/pRAI.png",
            name: "pETH",
            stake: "WePiggy RAI",
            tvl: 968.02
        },
        {
            image: "https://prod.wepiggy.fortop.site/coinIcon/piggy/pRAI.png",
            name: "pDAI",
            stake: "WePiggy RAI",
            tvl: 968.02
        },
        {
            image: "https://prod.wepiggy.fortop.site/coinIcon/piggy/pRAI.png",
            name: "pAsd",
            stake: "WePiggy Asd",
            tvl: 968.02
        }
    ]

    return (
        <div>
            {
                state.connected ?
                    <div className="Farms">
                        <CirculationInfoTab/>
                        <div className="TokensContent">
                            {/*<TokenFilters/>*/}
                            <div className="Tokens">
                                {tokens.map(t => <Token key={t.name} image={t.image} name={t.name} stake={t.stake}
                                                        tvl={t.tvl}/>)}
                            </div>
                        </div>
                    </div>
                    : <div style={{display:"flex", justifyContent: "center"}}><h1>Connect Wallet!</h1></div>}
        </div>

    );
}

export default Farms;
