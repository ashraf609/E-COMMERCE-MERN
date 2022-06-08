import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>E-COMMERCE.</h1>
        <p>Réaliser par :</p>

        <p>
          Achraf ETTAFTAFI <br></br> & <br></br>
          <br></br>Youssra BENMANSOUR <br></br>
          Copyrights 2022 &copy; UPF
        </p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/Aschraf_Ett">Instagram</a>
        <a href="http://youtube.com/Achraf_Ettaftafi">Linkedin</a>
        <a href="http://instagram.com/Ashraf_Ashraf">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
