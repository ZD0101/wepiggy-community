import React from "react";
import "./Footer.css"
import {FaDiscord, FaMediumM, FaTelegram, FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="FooterTitle">
                <h2>Copyright 2022 SODIUM <span style={{color: "#4C20CA"}}>|</span> Unlock your asset values</h2>
            </div>
            <div className="FooterContent">
                <div className="FooterLinks">
                    <div className="FooterLink"><h3>APP</h3></div>
                    <div className="FooterLink"><h3>Contact Us</h3></div>
                </div>
                <div className="FooterMediaLinks">
                    <div className="MediaLink"><FaMediumM size={20}/></div>
                    <div className="MediaLink"><FaDiscord size={20}/></div>
                    <div className="MediaLink"><FaTwitter size={20}/></div>
                    <div className="MediaLink"><FaTelegram size={20}/></div>
                </div>
            </div>

        </div>
    );
};
export default Footer;
