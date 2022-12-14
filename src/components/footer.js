import React from "react";
import fb from "../images/facebook.png";
import insta from "../images/instagram.png";
import github from "../images/github.png";

import "./footer.css";

function Footer() {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
  
      <div
     className="img_box">
        
        <img onClick={() => openInNewTab('https://www.facebook.com/ivan.lozic.3/')} src={fb} alt="facebook_logo" />
        <img onClick={() => openInNewTab('https://www.instagram.com/ivaan_loz')} src={insta}   alt="instagram_logo" />
        <img onClick={() => openInNewTab('https://github.com/ivanlozic')} src={github} alt="github_logo" />
      </div>
  );
}

export default Footer;
