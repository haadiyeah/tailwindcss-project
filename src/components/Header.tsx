import React, { useState } from "react";
import { brainwave } from "../assets";
import { navigation } from "../constants/index";
import { useLocation } from "react-router-dom";
import { HambugerMenu } from "./design/design/Header";
import MenuSvg from "../assets/svg/MenuSvg";
import Button from "./Button";
import ButtonGradient from "../assets/svg/ButtonGradient";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathname = useLocation();
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
    if(openNav) enablePageScroll();
    else disablePageScroll();
  };

  const handleClick = () => {
    if(!openNav) return;
    setOpenNav(false);
    enablePageScroll();
  }

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNav ? "bg-n-8" : "bg-n-8/10 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40}></img>
        </a>

        <nav
          className={` ${
            openNav ? "flex" : "hidden"
          } fixed top-[5rem] bottom-0 left-0 right-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.url}
                onClick = {handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold
                 ${
                   item.url === pathname.hash
                     ? "z-2 lg:text-n-1"
                     : "lg:text-n-1/50"
                 } lg:leading-5 lg:hover:`}
              >
                {" "}
                {item.title}{" "}
              </a>
            ))}
          </div>
          <HambugerMenu />
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </a>

        <Button className="hidden lg:flex" href="#login">
          Sign In
        </Button>

        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNav}>
          <MenuSvg openNavigation={openNav} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
