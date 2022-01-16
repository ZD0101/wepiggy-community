import React, {useContext, useEffect} from 'react'
import "./Sidebar.css"
import SidebarButton from "./SidebarButton";
import {GlobalContext} from "./GlobalContext";
import {NavLink} from "react-router-dom";
import InfoHeader from "./InfoHeader";
import MenuIcon from '@mui/icons-material/Menu';
import PieChartIcon from '@mui/icons-material/PieChart';
import ForumIcon from '@mui/icons-material/Forum';
import {RiCoinsFill, RiExchangeFill} from "react-icons/ri";

import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import {BiCoinStack} from "react-icons/bi";
import {FaGift} from "react-icons/fa";

export const Sidebar = () => {
    const connected = useContext(GlobalContext)

    const {sidebar, setSidebar} = useContext(GlobalContext)

    // useEffect(() => {
    //     console.log(connected)
    // }, [])

    let lowerLinks = [
        {
            title: "Lending Protocol",
            link: "/link-to-app",
            icon: <BiCoinStack size={25}/>
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
                    <SidebarButton title="Airdrop Pools" link="/airdrops" icon={<FaGift size={25}/>}/>
                    <SidebarButton title="pToken Pools" link="/farms" icon={<RiCoinsFill size={25}/>}/>
                    <SidebarButton title="WPC Distribution" link="/dashboard" icon={<PieChartIcon/>}/>
                    <SidebarButton title="Providing Liquidity" link="https://app.uniswap.org/#/swap"
                                   icon={<RiExchangeFill size={25}/>}/>
                    <SidebarButton title="Voting" link="/" icon={<WhereToVoteIcon/>}/>
                    <SidebarButton title="Forum" link="/" icon={<ForumIcon/>}/>


                    <div style={{marginTop: 50, borderBottom: "1px solid gray"}}>

                    </div>
                    <div style={{marginTop: 50}}>
                        {lowerLinks.map((item, index) => {
                            return (
                                <NavLink
                                    to={item.link}
                                    className={({isActive}) => (isActive ? 'is-active link' : 'link')}
                                ><SidebarButton title={item.title} link={item.link} icon={item.icon}/></NavLink>
                            )
                        })
                        }
                    </div>
                    <div className="BlockInfo">
                        <p>Current block 13972042</p>
                        <p>SOD: $0.02 </p>
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
        //
        // </div>
    )
}
