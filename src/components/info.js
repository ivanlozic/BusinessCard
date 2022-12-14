import React, { useState } from "react";
import "./info.css";
import image from "../images/profilePicture.jpg";
import About from "./about";
import Interests from "./interests";
import Footer from "./footer";
import Email from "./email";

function Info() {
  const [isTrue, setIsTrue] = useState(false);
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="box">
      <img src={image} alt="profilePicture" />

      <h1>Ivan Lozić</h1>
      <h3>Frontend Developer</h3>

      <div>
        <button onClick={() => setIsTrue(!isTrue)}> Email </button>

        <button
          onClick={() =>
            openInNewTab(
              "https://www.linkedin.com/in/ivan-lozi%C4%87-b72126221"
            )
          }
          className="linkedin"
        >
          Linkedin
        </button>

        {isTrue && <Email />}
      </div>
      <div className="About">
        <About />
      </div>
      <div>
        <Interests />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Info;
