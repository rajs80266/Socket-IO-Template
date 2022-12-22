import React from "react";
import { SocialIcon } from 'react-social-icons';
import { facebookUrl, instagramUrl } from "../../constants/links";
import "./style.css"

const Footer = () => {
    return (
        <div>
            <div className="social-icons">
                <SocialIcon url={instagramUrl} />
                <SocialIcon url={facebookUrl} />
            </div>
        </div>
    )
}

export default Footer;