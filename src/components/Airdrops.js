import React, {useContext} from 'react';
import Pool from "./Pool";
import "./Airdrops.css"
import {GlobalContext} from "./GlobalContext";
import ConnectWallet from "./ConnectWallet";

function Airdrops(props) {
    const state = useContext(GlobalContext)

    return (
        <div className="AidropsRoot">
            {state.connected ?
                <div className="Aidrops">
                    <div>
                <h1>Aidrop Pools</h1>
                    </div>
                    <div className="AidropPools">
                        <Pool image="https://prod.wepiggy.fortop.site/airdropPool/title/en-US/2.png"
                              title="Ecological Partner Pool"/>
                        <Pool image="https://prod.wepiggy.fortop.site/airdropPool/title/en-US/3.png"
                              title="Volunteer Pool"/>
                        <Pool image="https://prod.wepiggy.fortop.site/airdropPool/title/en-US/4.png"
                              title="Active User Pool"/>
                    </div>
                </div>
                : <ConnectWallet/>}
        </div>
    );
}

export default Airdrops;
