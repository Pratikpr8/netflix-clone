import React from "react";
import "./Navbar.css";

import { images } from "../../constants";
import { BsSearch } from "react-icons/bs";
import { AiOutlineGift } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { AiFillCaretDown } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCrossMark } from "react-icons/gi";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <>
      <div className="app__navbar app__bg">
        <div className="app__navbar-logolink">
          <div className="app__navbar-logolink_logo ">
            <img src={images.netflix} alt="netflix logo" />
          </div>

          <ul className="app__navbar-logolink_links">
            <li className="p__opensans">
              <a href="#home" style={{ fontWeight: "900" }}>
                Home Page
              </a>
            </li>
            <li className="p__opensans">
              <a href="#arrays">Arrays</a>
            </li>
            <li className="p__opensans">
              <a href="#movies">Movies</a>
            </li>
            <li className="p__opensans">
              <a href="#newpopular">New and Popular</a>
            </li>
            <li className="p__opensans">
              <a href="#list">List</a>
            </li>
          </ul>
        </div>

        <div className="app__navbar-search">
          <BsSearch color="#FFF" fontSize={23} />
          <p className="p__opensans">CHILD</p>
          <AiOutlineGift color="#FFF" fontSize={27} />
          <IoMdNotifications color="#FFF" fontSize={27} />
          <img src={images.account} alt="account pic" />
          <AiFillCaretDown color="#FFF" fontSize={25} />
        </div>

        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            color="#FFF"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />

          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center">
              <GiCrossMark
                className="crossmark"
                color="#FFF"
                fontSize={27}
                onClick={() => setToggleMenu(false)}
              />
              <ul className="app__navbar-smallscreen_links">
                <li className="p__opensans">
                  <a href="#home" style={{ fontWeight: "900" }}>
                    Home Page
                  </a>
                </li>
                <li className="p__opensans">
                  <a href="#arrays">Arrays</a>
                </li>
                <li className="p__opensans">
                  <a href="#movies">Movies</a>
                </li>
                <li className="p__opensans">
                  <a href="#newpopular">New and Popular</a>
                </li>
                <li className="p__opensans">
                  <a href="#list">List</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="app__navbar-smallscreen_search">
        <p className="p__opensans" style={{ fontSize: "12px" }}>
          CHILD
        </p>
        <AiOutlineGift color="#FFF" fontSize={22} />
        <IoMdNotifications color="#FFF" fontSize={22} />
        <BsSearch color="#FFF" fontSize={18} />
        <div>
          <img
            src={images.account}
            alt="account pic"
            style={{ marginRight: "0.2em" }}
          />
          <AiFillCaretDown color="#FFF" fontSize={20} />
        </div>
      </div>
    </>
  );
}
