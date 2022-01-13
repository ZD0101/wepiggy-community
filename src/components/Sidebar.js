import React, {useContext, useEffect} from 'react'
import "./Sidebar.css"
import SidebarButton from "./SidebarButton";
import {GlobalContext} from "./GlobalContext";
import {NavLink} from "react-router-dom";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import InfoHeader from "./InfoHeader";
import MenuIcon from '@mui/icons-material/Menu';

export const Sidebar = () => {
    const connected = useContext(GlobalContext)

    const { sidebar, setSidebar } = useContext(GlobalContext)

    // useEffect(() => {
    //     console.log(connected)
    // }, [])

    let lowerLinks = [
        {
            title: "Lending Protocol",
            link: "/link-to-app",
            icon: <AccountBalanceWalletIcon/>
        },
        {
            title: "Cross-Chain Bridge",
            link: "/",
            icon: <AccountBalanceWalletIcon/>
        },
    ]

    return (
        <div>
            <div className='navbar'>
                <NavLink to="#" className={sidebar ? "menu-bars" : "menu-bars black"}>
                    {!sidebar && <MenuIcon onClick={() => setSidebar(!sidebar)}/>}
                </NavLink>
                <InfoHeader/>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <h1 className="title">Com</h1>
                        <NavLink to="#" onClick={() => setSidebar(!sidebar)} className='menu-bars toggle-off'>
                            <MenuIcon color="white"/>
                        </NavLink>
                    </li>
                    <SidebarButton title="Airdrop Pools" link="/airdrops"/>
                    <SidebarButton title="pToken Pools" link="/farms"/>
                    <SidebarButton title="WPC Distribution" link="/dashboard"/>
                    <SidebarButton title="Providing Liquidity" link="https://app.uniswap.org/#/swap"/>
                    <SidebarButton title="Voting" link="/"/>
                    <SidebarButton title="Forum" link="/"/>
                    <SidebarButton title="Lending Protocol" link="/link-to-app"/>
                    <SidebarButton title="Cross-Chain Bridge" link="/"/>

                    <div style={{ marginTop: 50,borderBottom: "1px solid gray"}}>

                    </div>
                    <div style={{marginTop: 50}}>
                        {lowerLinks.map((item, index) => {
                            return (
                                <NavLink
                                    to={item.link}
                                    className={({isActive}) => (isActive ? 'is-active link' : 'link')}
                                ><SidebarButton title={item.title} link={item.link}/></NavLink>
                            )
                        })
                        }
                    </div>
                </ul>
            </nav>
        </div>
        // <div className="Sidebar">
        //     <div>
        //         <h1 className="SidebarTitle">Sidebar</h1>
        //         <SidebarButton title="Airdrop Pools" link="/airdrops"/>
        //         <SidebarButton title="pToken Pools" link="/farms"/>
        //         <SidebarButton title="WPC Distribution" link="/dashboard"/>
        //         <SidebarButton title="Providing Liquidity" link="https://app.uniswap.org/#/swap"/>
        //         <SidebarButton title="Voting" link="/"/>
        //         <SidebarButton title="Forum" link="/"/>
        //         <SidebarButton title="Lending Protocol" link="/link-to-app"/>
        //         <SidebarButton title="Cross-Chain Bridge" link="/"/>
        //     </div>
        //     <div className="BlockInfo">
        //         <p>Current block 13972042</p>
        //         <p>SOD: $0.02 </p>
        //     </div>
        // </div>
    )
}
