import React from 'react';
import "./TokensList.css"
import Token from "./Token";

function TokensList(props) {

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
        <div className="TokensList">
            {tokens.map(t => <Token key={t.name} image={t.image} name={t.name} stake={t.stake}
                                    tvl={t.tvl}/>)}
        </div>
    );
}

export default TokensList;
