import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/Aschraf_ett";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://laquotidienne.ma/uploads/actualites/622785c92569d_neyleen.jpeg"
              alt="Founder"
            />
            <Typography>Achraf ETTAFTAFI & Youssra BENMANSOUR</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a E-commerce Web-site By Achraf ETTAFTAFI & Youssra
              BENMANSOUR. A l'oprtunité de Madame BOUKIL Naoual
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="https://www.linkedin.com/Achraf_Ettaftafi" target="blank">
              <LinkedInIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/benmansouryoussra" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
