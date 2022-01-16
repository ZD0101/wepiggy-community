import React, {useContext, useEffect, useState} from 'react';
import {Tabs, Tab, AppBar, Box} from "@mui/material";
import DistributionTabInfo from "./DistributionTabInfo";
import "./DistributionTabs.css"
import SwipeableViews from 'react-swipeable-views';
import {useTheme} from '@mui/material/styles';
import CoinsGrid from "./CoinsGrid";
import {GlobalContext} from "./GlobalContext";
import CoinListMobile from "./CoinListMobile";
import Footer from "./Footer";

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

function DistributionTabs(props) {

    const state = useContext(GlobalContext)

    const size = useWindowSize();

    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        if (size.prevWidth > 850 && size.width <= 850) {
            setDimensions({width: window.innerWidth, height: window.innerHeight})
            console.log(dimensions)
        }
        if (size.prevWidth < 950 && size.width >= 950) {
            setDimensions({width: window.innerWidth, height: window.innerHeight})
            console.log(dimensions)
        }
    }, [size])

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
                        {dimensions.width < 900 ? <CoinListMobile/> : <CoinsGrid/>}
                    </TabPanel>
                    <TabPanel value={selectedTab} index={1} dir={theme.direction}>
                        <DistributionTabInfo infoLeft="14,894.93 WPC/Day" infoRight="1.12%"/>
                        {dimensions.width < 900 ? <CoinListMobile/> : <CoinsGrid/>}
                    </TabPanel>
                    <TabPanel value={selectedTab} index={2} dir={theme.direction}>
                        <DistributionTabInfo infoLeft="197,948.74 WPC/Day" infoRight="15.01%"/>
                        {dimensions.width < 900 ? <CoinListMobile/> : <CoinsGrid/>}
                    </TabPanel>
                    <TabPanel value={selectedTab} index={3} dir={theme.direction}>
                        <DistributionTabInfo infoLeft="666,936.6 WPC/Day" infoRight="50.58%"/>
                        {dimensions.width < 900 ? <CoinListMobile/> : <CoinsGrid/>}
                    </TabPanel>
                    <TabPanel value={selectedTab} index={4} dir={theme.direction}>
                        <DistributionTabInfo infoLeft="14,894.93 WPC/Day" infoRight="1.12%"/>
                        {dimensions.width < 900 ? <CoinListMobile/> : <CoinsGrid/>}
                    </TabPanel>
                    <TabPanel value={selectedTab} index={5} dir={theme.direction}>
                        <DistributionTabInfo infoLeft="197,948.74 WPC/Day" infoRight="15.01%"/>
                        {dimensions.width < 900 ? <CoinListMobile/> : <CoinsGrid/>}
                    </TabPanel>
                    <TabPanel value={selectedTab} index={6} dir={theme.direction}>
                        <DistributionTabInfo infoLeft="666,936.6 WPC/Day" infoRight="50.58%"/>
                        {dimensions.width < 900 ? <CoinListMobile/> : <CoinsGrid/>}
                    </TabPanel>
                    <TabPanel value={selectedTab} index={7} dir={theme.direction}>
                        <DistributionTabInfo infoLeft="14,894.93 WPC/Day" infoRight="1.12%"/>
                        {dimensions.width < 900 ? <CoinListMobile/> : <CoinsGrid/>}
                    </TabPanel>
                    <TabPanel value={selectedTab} index={8} dir={theme.direction}>
                        <DistributionTabInfo infoLeft="197,948.74 WPC/Day" infoRight="15.01%"/>
                        {dimensions.width < 900 ? <CoinListMobile/> : <CoinsGrid/>}
                    </TabPanel>
                </SwipeableViews>
            </Box>
                <Footer/>
        </div>
    );
}

export default DistributionTabs;
