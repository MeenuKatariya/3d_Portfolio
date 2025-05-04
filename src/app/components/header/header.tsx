"use client";
import React from "react";
import { motion } from "framer-motion";

import ThemeToggle from "./theme";
import { Navbar } from "./navbar";
interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  return (
    <motion.header
      className="transition-colors delay-100 duration-500 ease-in z-9 postion-fixed w-full px-10 "
      initial={{
        y: -80,
      }}
      animate={{
        y: 20,
      }}
      transition={{
        delay: loader ? 3.5 : 0,
        duration: 0.8,
      }}
    >
      <div className="  flex justify-between  ">
        <div className="text-xl  dark:text-white text-black">
          Meenu Katariya
        </div>
        <Navbar theme={"dark"} />
        <ThemeToggle />
      </div>
    </motion.header>
  );
};

export default Header;
