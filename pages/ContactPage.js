import React from "react";
import { Container } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import MenuLink from "../components/MenuLink"

const ContactPage = () => {
  return (
  	<div>
	    <MenuLink/>
	    <Container maxWidth="lg" style={{ justifyContent: "center" }}>
	      <h1 style={{ fontSize: "3rem", marginTop:"30px", textAlign:"center"}}>Contact Us</h1>
	      <br />
	      <h2 style={{ fontSize: "4rem", fontWeight: "100", textAlign:"center" }}>
	         <FontAwesomeIcon icon={faTools} /> Under Construction
	      </h2>
	    </Container>
	</div>
  );
};

export default ContactPage;