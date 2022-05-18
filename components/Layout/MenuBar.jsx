import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Link from "next/link";
import { SidebarData } from "../../assets/data/SidebarData";
import logo from "../../assets/images/logo.png";
import { IconContext } from "react-icons";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import cartIcon from "../../assets/images/icon-cart.svg";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#757575" }} className={`icon-size ${styles.MobileShow}`}>
        <div className={`navbar ${styles.MobileShowMenu}`}>
          <Link href="#">
            <a className="menu-bars w-[25%]">
              <FaIcons.FaBars onClick={showSidebar} />
            </a>
          </Link>
          <div className="w-[50%] flex justify-center">
            <span className="flex w-[85px]">
              <Image src={logo} alt="logo" />
            </span>
          </div>
          <div className="w-[25%] flex justify-end items-center mr-[20px] gap-x-[8px]">
            <Link href="#">
              <a className="text-[18px] leading-[20px] font-medium cursor-pointer black-color medium">
                <FaIcons.FaSearch />
              </a>
            </Link>
            <Link href="#">
              <a className="flex justify-between items-center w-[50%]">
                <Image
                  src={cartIcon}
                  alt="Icom"
                  className="w-[17px] h-[20px]"
                />
                <p className="text-[15px] leading-[20px] font-medium cursor-pointer black-color medium">
                  bag
                </p>
              </a>
            </Link>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle flex">
              <Link href="#">
                <a className="menu-bars">
                  <AiIcons.AiOutlineClose className="close-size" />
                </a>
              </Link>
              <div className="w-[80%] flex justify-center">
                <span className="flex w-[85px]">
                  <Image src={logo} alt="logo" />
                </span>
              </div>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <Link href="#" key={index} >
                  <a className="set-li">
                    <li className="cname medium">
                      <span className="span">{item.title}</span>
                      <FaIcons.FaChevronRight className="chevron-color" />
                    </li>
                  </a>
                </Link>
              );
            })}
          </ul>

          <div className="lg:w-[25%] w-[100%] lg:pl-[15px] lg:mb-[0] mt-[85px] ml-[20px]">
            <h2 className="text-[28px] leading-[35px] black-color bold mb-[10px] mt-[2.2rem]">
              ELEVATE <br /> YOUR <br />
              APPEARANCE™
            </h2>
            <div className="flex gap-x-[15px]">
              <FaIcons.FaFacebookSquare className="text-[21px] footer-icon-color leading-[21px] font-normal cursor-pointer" />
              <FaIcons.FaInstagramSquare className="text-[21px] footer-icon-color leading-[21px] font-normal  cursor-pointer" />
              <FaIcons.FaTwitter className="text-[21px] footer-icon-color leading-[21px] font-normal  cursor-pointer" />
              <FaIcons.FaYoutube className="text-[21px] footer-icon-color leading-[21px] font-normal  cursor-pointer" />
            </div>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
