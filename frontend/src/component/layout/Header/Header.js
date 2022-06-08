import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/log.jpg";

const options = {
  burgerColorHover: " #c8ad7f",
  logo,
  logoWidth: "25vmax",
  navColor1: "white",
  logoHoverSize: "15px",
  logoHoverColor: " #c8ad7f",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.5vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: " #c8ad7f",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: " #c8ad7f",
  searchIconColor: " #c8ad7f",
  cartIconColor: " #c8ad7f",
  profileIconColorHover: " #c8ad7f",
  searchIconColorHover: " #c8ad7f",
  cartIconColorHover: " #c8ad7f",
  cartIconMargin: "2vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
