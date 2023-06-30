"use client";
import React, { useMemo } from "react";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import Landing from "../../public/landing.png";
import Community from "../../public/community.png";
import getScrollAnimation from "../utils/getScrollAnimation";
import Link from "next/link";
import ButtonOutline from "../misc/ButtonOutline";
import ScrollAnimationWrapper from "../utils/ScrollAnimationWrapper";
import { useEffect } from "react";
import Mobile from '../../public/mobile.png'

import { useTranslation } from "react-i18next";

const Header = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const {t, i18n} = useTranslation();

  return (
    <>
      <div className="container z-10 mx-auto mb-12">
        <section className="mt-60 px-52 text-center">
          <h1 className="text-charcoal-default font-semibold text-6xl font-display">
            {t("An integrated digital platform that brings together quality service providers and quality work seekers in various fields needed by the community")}
          </h1>
          <div className="mt-5 block lg:hidden">
            <Link
              href="/"
              className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all"
            >
              <ButtonOutline>iOS APP</ButtonOutline> 
            </Link>
            <ButtonOutline>WebApp</ButtonOutline>
          </div>
          <Image
            src={Landing}
            className="w-auto h-auto text-center mx-auto my-14"
            alt="No Img"
          />
          <ScrollAnimationWrapper>
            <motion.div variants={scrollAnimation}>
              <p className="text-3xl text-charcoal-default font-display font-bold leading-extra-large">
                {t("Made for the community")}
              </p>
              <Image
                src={Community}
                className="hidden lg:block w-auto h-auto text-center mx-auto"
                alt="No Img"
              />
              <Image
               src={Mobile}
               className="lg:hidden mx-auto block"
               alt="no IMG"
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </section>
      </div>
    </>
  );
};

export default Header;
