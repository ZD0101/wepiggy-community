import React, {useContext} from 'react';
import "./InfoHeader.css"
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import RoundButton from "./RoundButton";

import Reducer from "./Reducer";
import {GlobalContext} from "./GlobalContext";

function InfoHeader(props) {

    const state = useContext(GlobalContext)

    function connect() {
        state.setConnected(true)
        console.log(state)
    }

    return (
        <div className="InfoHeader">

            <div onClick={connect}>
            <RoundButton title="Connect Wallet"/>
            </div>

            <div className="GasInfo">
                <LocalGasStationIcon/>
                <p>179</p>
            </div>
        </div>
    );
}

export default InfoHeader;
