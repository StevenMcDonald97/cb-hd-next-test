import React, { useEffect, useState } from "react";

// import { Link } from "react-router-dom";
import Link from 'next/link'
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { RiArrowDropDownLine } from "react-icons/ri";

const MenuLink = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dropDownClass, setDropDownClass]= useState("");
  const [menuWrapClass, setMenuWrapClass]= useState("");
  const [width, setWidth] = useState(1000); 

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  const clickToggleButton = () =>{
    if (dropDownClass===""){
      setDropDownClass("buttonOpen");
      setMenuWrapClass("dropDownMenuShow");
    } else {
      setDropDownClass("");
      setMenuWrapClass("");
    }
  }

  const clickOutsideMenu = () =>{
      setDropDownClass("");
      setMenuWrapClass("");
  }

  useEffect(() => {  
    window.addEventListener('resize', updateDimensions);
  });

  

  const styles = {
    link: {
      display: "flex",
      fontSize: 18,
      alignItems: "center",
      fontFamily: "inherit",
      fontWeight: 'bold',
      color: "inherit",
    },
    activeLink: {
      borderBottom: "1.5px solid #212529",
      fontFamily: "inherit",
    },
    menuItem: {
      fontFamily: "inherit",
      fontSize: 14,    
    },
  };
  
  if (width > 492){
    return (
      <div className="navbar">
        <div className="nav-wrapper">
          <span>
            <Button style={styles.link}>
              <Link href="/" activeStyle={styles.activeLink}>
                <a>HOME</a>
              </Link>
            </Button>
          </span>
          <span>
            <Button
              aria-haspopup="true"
              onClick={handleClick}
              style={styles.link}
            >
              INFORMATION <RiArrowDropDownLine />
            </Button>
            <Menu
              id="simple-menu"
              style={styles.menu}
              anchorEl={anchorEl}
              elevation={0}
              getContentAnchorEl={null}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link href="/AboutCB" style={styles.menuItem}>
                  <a>COLOR BLINDNESS</a>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/AboutHD" style={styles.menuItem}>
                  <a>HEARING DISABILITY</a>
                </Link>
              </MenuItem>
            </Menu>
          </span>

          <span>
            <Button style={styles.link}>
              <Link
                href="/TestsPage"
                style={styles.link}
                activeStyle={styles.activeLink}
              >
                <a>TAKE A TEST</a>
              </Link>
            </Button>
          </span>
          <span>
            <Button style={styles.link}>
              <Link href="/AboutTeam" activeStyle={styles.activeLink}>
                <a>TEAM</a>
              </Link>
            </Button>
          </span>
          <span>
            <Button style={styles.link}>
              <Link
                href="/ContactPage"
                activeStyle={styles.activeLink}
                style={styles.link}
              >
                <a>Contact US</a>
              </Link>
            </Button>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="custom-dropdown-menu">
        <span className={`menuToggleButton ${dropDownClass}`} onClick={clickToggleButton}>
          <div style={{"paddingTop":"10px","display":"block"}}>Menu </div> <div style={{"paddingTop":"-5px", "display":"block"}}> &#xfe40; </div>
        </span>
        <div className={`dropDownMenuWrap ${menuWrapClass}`} onClick={clickOutsideMenu}>
          <div>
            <ul className="dropDownMenu">
              <li key="home" className='dropDownMenuLink'>          
                <Link
                  href="/"
                  className='dropDownMenuLink'
                >
                  <a>HOME</a>
                </Link>
              </li>
              <li key="cbinfo" className='dropDownMenuLink'>          
                <Link
                  href="/AboutCB"
                  className='dropDownMenuLink'
                >
                  <a>COLOR BLINDNESS INFORMATION</a>
                </Link>
              </li>
              <li key="hdinfo" className='dropDownMenuLink'>          
                <Link
                  href="/AboutHD"
                  className='dropDownMenuLink'
                >
                  <a>HEARING INFORMATION</a>
                </Link>
              </li>              
              <li key="TestsPage" className='dropDownMenuLink'>   
                <Link
                  href="/TestsPage"
                  className='dropDownMenuLink'
                >
                  <a>TAKE A TEST</a>
                </Link>
              </li>
              <li key="about" className='dropDownMenuLink'>          
                <Link
                  href="/AboutTeam"
                  className='dropDownMenuLink'
                >
                  <a>TEAM</a>
                </Link>
              </li>
              <li key="ContactPage" className='dropDownMenuLink'>   
                <Link
                  href="/ContactPage"
                  className='dropDownMenuLink'
                >
                 <a>Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default MenuLink;
