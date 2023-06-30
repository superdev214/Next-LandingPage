"use client";
import React, { useMemo, useEffect } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../utils/ScrollAnimationWrapper";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
      <ScrollAnimationWrapper className="hidden lg:block">
        <motion.div className="container mx-auto text-center mb-[15px]" variants={scrollAnimation}>
          <div className="mt-[65px] mb-[15px] text-center">
            <h1 className="text-general-default text-xl font-display font-black mb-[13px]">
              From the society to the society
            </h1>
            <p className="text-[17px] text-general-default font-display font-normal">
              taklief is fully community-based environment
            </p>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </>
  );
};
export default Footer;
