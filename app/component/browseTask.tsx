"use client";
import React, { useMemo, useEffect } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../utils/ScrollAnimationWrapper";
import Test1 from "../../public/test.png";
import { motion } from "framer-motion";
import Image from "next/image";

const BrowseTask = (props: any) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const { browseTask } = props;
  return (
    <>
      <ScrollAnimationWrapper>

      </ScrollAnimationWrapper>
    </>
  );
};

export default BrowseTask;
