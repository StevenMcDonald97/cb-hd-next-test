import React from "react";
import { Grid } from "@material-ui/core";
import Link from 'next/link'
import hdContents from "../data/hdContents";
import Section from "../components/Section";
// import "../App.css";
import Image from 'next/image'
import MenuLink from "../components/MenuLink"

const AboutHD = () => {
  return (
    <div>
      <MenuLink/>
      <div className="main" style={{ margin: "2rem" }}>
        <div className="header-container">
          <h1 style={{ marginBottom: "2rem" }}>About Hearing Disability</h1>
        </div>

        <div className="content-section">
          <Grid container>
            {hdContents
              .filter((content) => content.filter === "about")
              .map((info, i) => (
                <div className="gridThree-2x1" key={"about"+i}>
                  <Grid item md={12}>
                    <Section
                      key={i}
                      title={info.title}
                      description={info.infos}
                      className="about-sectionCB section-description"
                    />
                  </Grid>
                  <Grid item md={10}>
                    <Image
                      className="about-imageCB about-img"
                      src={info.image}
                      alt={info.altImage}
                    />
                  </Grid>
                </div>
              ))}
          </Grid>
        </div>

        <div className="content-section">
          <Grid container>
            {hdContents
              .filter((content) => content.filter === "types")
              .map((info, i) => (
                <div className="gridFour-2x1" style={{ gridGap: "10rem" }} key={"types"+i}>
                  <Grid item md={10}>
                    <Image
                      className="types-imageHD about-img"
                      src={info.image}
                      alt={info.altImage}
                    />
                  </Grid>
                  <Grid item md={12}>
                    <Section
                      key={i}
                      title={info.title}
                      description={info.infos}
                      className="types-sectionHD"
                    />
                  </Grid>
                </div>
              ))}
          </Grid>
        </div>

        <div className="content-section">
          <Grid container>
            {hdContents
              .filter((content) => content.filter === "test")
              .map((info, i) => (
                <div className="gridThree-2x1" key={"test"+i}>
                  <Grid item lg={12}>
                    <Section
                      key={i}
                      title={info.title}
                      description={info.infos}
                      className="test-sectionHD"
                    />
                  </Grid>
                  <Grid item lg={4} md={4}>
                    <Image
                      className="test-imageHD about-img"
                      src={info.image}
                      alt={info.altImage}
                    />
                  </Grid>
                </div>
              ))}
          </Grid>
        </div>
        <div className="content-section">
          <Grid container>
            {hdContents
              .filter((content) => content.filter === "pitch-test")
              .map((info, i) => (
                <div className="gridFour-2x1" key={"pitch-test"+i}>
                  <Grid item lg={4} md={4}>
                    <Image
                      className="pitch-test-imageHD about-img"
                      src={info.image}
                      alt={info.altImage}
                    />
                  </Grid>
                  <Grid item lg={12}>
                    <Section
                      key={i}
                      title={info.title}
                      description={info.infos}
                      className="pitch-test-sectionHD"
                    />
                  </Grid>
                </div>
              ))}
          </Grid>
        </div>
        <Link href="/tests">
          <a className="test-link">Take the Test</a>
        </Link>
      </div>
    </div>
  );
};

export default AboutHD;
