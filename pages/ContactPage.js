import React from "react";
import { Container } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import MenuLink from "../components/MenuLink"
import photo1 from "../public/assets/about-images/IMG20220719104815.jpg";
import photo2 from "../public/assets/about-images/IMG20220719103750.jpg";
import Image from 'next/image'

const ContactPage = () => {
  return (
  	<div>
	    <MenuLink/>
	    <Container maxWidth="lg" style={{ justifyContent: "center" }}>
	      <h1 style={{ fontSize: "3rem", marginTop:"30px", textAlign:"center"}}>Charities Using The2Senses </h1>
	      <br />
	      <div style={{ textAlign:"center"}}>
		<div style={{ display:"inline-block", marginTop:"30px", marginRight:"15px", textAlign:"center"}}>
		      <Image
			src={photo1}
			alt="The 2 Senses being used"
			height="250"
		      />
		</div>
		<div style={{ display:"inline-block", marginTop:"30px", marginLeft:"15px", textAlign:"center"}}>
		      <Image
			src={photo2}
			alt="The 2 Senses being used"
			height="250"
		      />
		</div>
	      </div>
	      <div>
		<div style={{ display:"inline-block", marginTop:"15px", marginRight:"15px", width:"35%", textAlign:"center"}}>
			<h2 style={{ width: "500px", margin:"auto", textAlign:"left"}}>Hope Public Charitable Trust</h2>
			<p style={{ width: "500px", margin:"auto", textAlign:"left"}}>
				6b/26, Sarangapani Street, Krishnapuram, Ambattur
				Chennai - 600053

			</p>
			<div style={{ width: "500px", margin:"auto"}}>
				<a style={{ color: "rgb(80, 183, 255)"}} href="https://hopechennai.com/our-services/"> Our Services | Hope Chennai Trust </a>
			</div>	
		</div>
		<div style={{ display:"inline-block", marginTop:"15px", marginLeft:"15px", width:"35%", textAlign:"center"}}>
			<h2 style={{ width: "500px", margin:"auto", textAlign:"left" }}>Samarthanam Trust for the Disabled</h2>
			<p style={{ width: "500px", margin:"auto", textAlign:"left" }}>
				CA:39, 15th Cross, 16th Main, Sector-4, 
				HSR Layout, Bangalore - 560102
			</p>
			<div style={{ width: "500px", margin:"auto"}}>
				<a style={{ color: "rgb(80, 183, 255)" }} href="https://www.samarthanam.org/about-us/"> About Us | Samarthanam Trust for the Disabled | NGO for Disabled </a> 
			</div>
	       </div>
	     </div>
	  </Container>
	</div>
  );
};

export default ContactPage;
