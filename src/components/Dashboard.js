import React, {useContext} from 'react';
import "./Dashboard.css"
import DistributionTabs from "./DistributionTabs";
import {GlobalContext} from "./GlobalContext";
import ConnectWallet from "./ConnectWallet";
import CustomPieChart from "./CustomPieChart";

function Dashboard(props) {
    const state = useContext(GlobalContext)

    return (
        <div>
            {state.connected ?
                <div className="DashBoard">
                    <div className="DistributionInfo">
                        <div className="DistributionInfoLeft">
                            <h2 style={{marginBottom: 50}}>SOD Distribution</h2>
                            <div className="InfoText">
                                <span style={{fontFamily: "Poppins Light"}}>Total SOD Distribution Speed</span>
                                <h3>280 WPC/Block</h3>
                            </div>
                            <div className="InfoTextRow">
                                <div className="InfoText">
                                    <span style={{fontFamily: "Poppins Light"}}>Community Part Distribution Speed</span>
                                    <h3>1,318,372.44 WPC/Day</h3>
                                </div>
                                <div className="InfoText">
                                    <span style={{fontFamily: "Poppins Light"}}>Community Part Ratio</span>
                                    <h3>71.94%</h3>
                                </div>
                            </div>
                        </div>
                        <div className="DistributionInfoRight">
                            <CustomPieChart/>
                        </div>
                    </div>
                    <div className="TabsInfo">
                        <h2>Details of SOD Distribution</h2>
                        <DistributionTabs/>
                    </div>
                </div>
                : <ConnectWallet/>}
        </div>
    );
}

export default Dashboard;
