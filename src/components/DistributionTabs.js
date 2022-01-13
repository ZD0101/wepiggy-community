import React, {useState} from 'react';
import {Tabs, Tab, AppBar, Box} from "@mui/material";
import DistributionTabInfo from "./DistributionTabInfo";
import "./DistributionTabs.css"
import SwipeableViews from 'react-swipeable-views';
import {useTheme} from '@mui/material/styles';
import CoinsGrid from "./CoinsGrid";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
        >
            {value === index && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}

function DistributionTabs(props) {

    const theme = useTheme();
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const handleChangeIndex = (index) => {
        setSelectedTab(index);
    };

    return (
        <div className="DistributionTabs">
            <Box>
                <Tabs
                    value={selectedTab}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Ethereum"/>
                    <Tab label="Harmony"/>
                    <Tab label="BSC"/>
                    <Tab label="OEC"/>
                    <Tab label="Arbitrum"/>
                    <Tab label="Optimism"/>
                    <Tab label="Polygon"/>
                    <Tab label="Moonriver"/>
                    <Tab label="HECO"/>
                </Tabs>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={selectedTab}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={selectedTab} index={0} dir={theme.direction}>
                        <DistributionTabInfo infoLeft="666,936.6 WPC/Day" infoRight="50.58%"/>
                        <CoinsGrid/>
                    </TabPanel>
                    <TabPanel value={selectedTab} index={1} dir={theme.direction}>
                        <DistributionTabInfo infoLeft="14,894.93 WPC/Day" infoRight="1.12%"/>
                        <CoinsGrid/>
                    </TabPanel>
                    <TabPanel value={selectedTab} index={2} dir={theme.direction}>
                        <DistributionTabInfo infoLeft="197,948.74 WPC/Day" infoRight="15.01%"/>
                        <CoinsGrid/>
                    </TabPanel>
                    <TabPanel value={selectedTab} index={3} dir={theme.direction}>
                        <DistributionTabInfo infoLeft="666,936.6 WPC/Day" infoRight="50.58%"/>
                        <CoinsGrid/>
                    </TabPanel>
                    <TabPanel value={selectedTab} index={4} dir={theme.direction}>
                        <DistributionTabInfo infoLeft="14,894.93 WPC/Day" infoRight="1.12%"/>
                        <CoinsGrid/>
                    </TabPanel>
                    <TabPanel value={selectedTab} index={5} dir={theme.direction}>
                        <DistributionTabInfo infoLeft="197,948.74 WPC/Day" infoRight="15.01%"/>
                        <CoinsGrid/>
                    </TabPanel>
                    <TabPanel value={selectedTab} index={6} dir={theme.direction}>
                        <DistributionTabInfo infoLeft="666,936.6 WPC/Day" infoRight="50.58%"/>
                        <CoinsGrid/>
                    </TabPanel>
                    <TabPanel value={selectedTab} index={7} dir={theme.direction}>
                        <DistributionTabInfo infoLeft="14,894.93 WPC/Day" infoRight="1.12%"/>
                        <CoinsGrid/>
                    </TabPanel>
                    <TabPanel value={selectedTab} index={8} dir={theme.direction}>
                        <DistributionTabInfo infoLeft="197,948.74 WPC/Day" infoRight="15.01%"/>
                        <CoinsGrid/>
                    </TabPanel>
                </SwipeableViews>
            </Box>
        </div>
    );
}

export default DistributionTabs;
