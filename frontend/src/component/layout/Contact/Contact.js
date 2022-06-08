import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="Achraf_ETTAFTAFI@gmail.com">
        <Button>Contact: Achraf_ETTAFTAFI@gmail.com</Button>
        <br></br>
        <Button>Contact: Youssra_BENMANSOUR@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
