import React from "react";
import stevenPhoto from "../public/assets/about-images/steven-photo.jpg";
import kavithaPhoto from "../public/assets/about-images/kavitha-photo.jpg";
import joeyPhoto from "../public/assets/about-images/professional-joey-photo.jpg";
import neoPhoto from '../public/assets/about-images/neo-profile.jpg';
import '../styles/MainPage.module.css'
import Image from 'next/image'
import MenuLink from "../components/MenuLink"

const AboutTeam = () => {
  return (
    <div>
      <MenuLink/>
      <div className="aboutTeam">
        <h1 style={{ textAlign: "center" }} className="team-header">About the Team</h1>

        <div className="about-container" style={{ height:"950px" }}>
          <div>
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
                I live in Chennai, TamilNadu and I&apos;m driven by my passion to build
                and create something that will have an enduring impact on society. I
                believe that we are not remembered by the amount of money we have
                made but rather by the lives we have changed in the process. This
                website is a passion project of mine, developed with the aim of
                creating awareness and diagnosing color blindness and hearing
                problems among the people of India and my sincere thanks to Hsueh
                Yen Neo, Steven McDonald and Joey Bruno for making this possible.
              </p>
            </div>
          </div>
          <div>
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
          <div>
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
          <div>
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

        <div style={{ margin: "3rem"}}>
          <h2 style={{ textAlign: "center", margin:"15px 0"  }}>How We Got Together</h2>
          <p style={{ fontSize: "1.3rem"}}>
            The internet is a place where anyone can meet anyone else from around
            the world. That was how our team formed, four people from different
            corners of the globe united by a common goal of making something for
            those in need. When we started we had no goal, just the knowledge that
            when people with good intentions come together, good things will
            happen and just like the internet brought us together, it has given us
            the chance to help people living in places that we may never visit. We
            decided to design a website and give it to an NGO, so that while
            conducting health camps across India, they can use it as web based
            tool for diagnosing color blindness and hearing problems. From all
            four of us, this website is our small contribution to society.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
