"use client";
import React from "react";
import { usePreloader } from "../preloader/index";
import { motion } from "framer-motion";

interface AboutProps {
  loader?: boolean;
}

const About = ({ loader = false }: AboutProps) => {
  const { isLoading } = usePreloader();

  // Container controls the stagger + optional start delay
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: loader ? 2 : 0,
      },
    },
  };

  // Each line animates from blurred/offscreen → sharp/in place
  const lineVariants = {
    hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="flex mt-40 mx-40 ">
      {isLoading && (
        <motion.div
          className="flex flex-col space-y-2 "
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="text-lg dark:text-gray-500"
            variants={lineVariants}
          >
            Hi, I am
          </motion.div>
          <motion.div className="text-8xl font-bold" variants={lineVariants}>
            Meenu
          </motion.div>
          <motion.div className="text-8xl font-bold" variants={lineVariants}>
            Katariya
          </motion.div>
          <motion.div
            className="text-lg dark:text-gray-500"
            variants={lineVariants}
          >
            Full Stack Developer
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default About;
