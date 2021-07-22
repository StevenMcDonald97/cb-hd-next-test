import React from "react";
import stevenPhoto from "../public/assets/about-images/steven-photo.jpg";
import kavithaPhoto from "../public/assets/about-images/kavitha-photo.jpg";
import joeyPhoto from "../public/assets/about-images/professional-joey-photo.jpg";
import neoPhoto from '../public/assets/about-images/neo-profile.jpg';
import davidPhoto from '../public/assets/about-images/david-photo.jpg';

import '../styles/MainPage.module.css'
import Image from 'next/image'
import MenuLink from "../components/MenuLink"

const AboutTeam = () => {
  return (
    <div>
      <MenuLink/>
      <div className="aboutTeam">
        <h1 style={{ textAlign: "center" }} className="team-header">About the Team</h1>

        <div className="about-container top-container" >
          <div className="member-container" style={{ minHeight:"1050px" }}>
            <div>
              <Image
                src={kavithaPhoto}
                className="team-img"
                alt="Kavitha Krishnamurthy"
                width="400"
                height="400"
              />
              <h2>Kavitha Krishnamurthy</h2>
              <p style={{ fontSize: "1.3rem" }}>
        				I live in Chennai, TamilNadu, currently working as a PMO Team Leader in 
        				an IT company. I am driven by my passion to build and create something 
        				that will have an enduring impact on society. I believe that we are not 
        				remembered by the amount of money we have made but rather by the lives we 
        				have changed. This website is a passion project of mine 
        				developed with the aim of creating awareness and diagnosing color 
        				blindness and hearing problems among the people of India and I am thankful 
        				to Steven McDonald, Joey Bruno, David Oglesby and Hsueh Yen Neo for making 
        				this possible.
              </p>
            </div>
          </div>
          <div className="member-container" style={{ minHeight:"950px" }}>
            <div >
              <Image
                src={neoPhoto}
                className="team-img"
                alt="Hseuh Yen Neo"
                width="400"
                height="400"
              />
              <h2>Hsueh Yen Neo</h2>
              <p style={{fontSize: "1.3rem" }}>
                I am a full-stack web application developer based in Munich,
                Germany. I am currently working as a project lead, managing various
                projects with tech stacks of React, PHP, JS, JQuery, Docker and
                MySQL. While waiting for npm to install, I love drinking coffee and
                occasionally good beer and wine when the code is being nice to me.
                When my back hurts from sitting too long, I enjoy long walks and
                trying out cool restaurants around Munich.
              </p>
            </div>
          </div>
        </div>

        <div
          className="about-container"
          style={{ margin: ".5rem 0" }}
        >
          <div className="member-container" style={{ minHeight:"750px" }}>
            <div>
              <Image
                src={stevenPhoto}
                className="team-img"
                alt="Steven McDonald"
                width="400"
                height="400"
              />
              <h2>Steven McDonald</h2>
              <p style={{ fontSize: "1.3rem" }}>
                I am a software engineer and a recent graduate of Cornell
                University, living in the Bay Area, California. I was drawn to this
                project by the chance to use my programming skills to help people
                and have a positive impact on the world.
              </p>
            </div>
          </div>
          <div className="member-container" style={{ minHeight:"750px" }}>
            <div>
              <Image 
                src={joeyPhoto} 
                className="team-img"
                alt="Joey Bruno" 
                width="400" 
                height="400" 
              />
              <h2>Joey Bruno</h2>
              <p style={{ fontSize: "1.3rem" }}>
                I am a Teaching Assistant for an online Digital Marketing class with
                Vanderbilt University, living in Nashville, Tennessee. I wanted to
                join the project in order to help people, by using my mixed skills
                of graphic design and web development to help assist in the
                designing of the website itself.
              </p>
            </div>
          </div>
        </div>
		<div
          className="about-container"
          style={{ margin: ".5rem 0", height:"950px" }}

        >
          <div className="member-container" style={{ minHeight:"1050px" }}>
            <div>
              <Image
                src={davidPhoto}
                className="team-img"
                alt="David Oglesby"
                width="400"
                height="400"
              />
              <h2>David Oglesby </h2>
              <p style={{ fontSize: "1.3rem" }}>
        				Interested in the creative and problem-solving aspects of programming,
        				I taught myself how to code at an early age. Now a full-stack web 
        				developer, I continue to enjoy building web applications to improve
        				efficiency and automate processes, while (trying!) to stay abreast
        				of the newest languages and updates in the industry. Parallel to that,
        				I enjoy mentoring and teaching others how to code. I&apos;m happy I could
        				help out on this project, even if in a small way, and I hope this 
        				website will help many people and have an enduring impact on society.
              </p>
            </div>
          </div>
        </div>
        <div className="team-writeup">
          <h2 style={{ textAlign: "center", margin:"15px 0"  }}>How We Got Together</h2>
          <p style={{ fontSize: "1.3rem"}}>
            The internet is a place where anyone can meet anyone else from around the 
            world. That was how our team formed,five people from different corners of 
            the globe united by a common goal of making something for those in need. 
            When we started we had no goal, just the knowledge that when people with 
            good intentions come together, good things will happen and just like the 
            internet brought us together, it has given us the chance to help people 
            living in places that we may never visit. We decided to use the skill set 
            each of us had, to design this website and then give that to an NGO, so 
            that while conducting health camps it can be used as a web based tool for 
            diagnosing color blindness and hearing problems. From all five of us, this 
            website is our small contribution to society.  

          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
