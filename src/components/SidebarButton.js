import React from 'react';
import "./SidebarButton.css"
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import {NavLink} from "react-router-dom";

function SidebarButton({title, link, icon}) {
    return (

        <NavLink
            to={link}
            className={({isActive}) => (isActive ? 'is-active link' : 'link')}
        >
            <div className="SidebarButton">
                <div className="SidebarButtonContent">
                    {icon}
                    <p className="SidebarButtonLink">{title}</p>
                </div>
            </div>
        </NavLink>
    );
}

export default SidebarButton;
