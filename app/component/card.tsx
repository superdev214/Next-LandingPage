"use client";
import React, { useMemo, useEffect } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../utils/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import Accomplish from "../../public/accormplish-task.png";
import TaskComplete from "../../public/task-completed.png";
import RightPerson from "../../public/right-person.png";

import { useTranslation } from "react-i18next";

const Card = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const {t} = useTranslation();

  return (
    <>
      <ScrollAnimationWrapper>
        <section className="container mx-auto text-center mb-[15px]">
          <div className="flex flex-cols space-x-3.5 justify-center">
            <motion.div
              className="border rounded px-[21px] py-[53px] text-center max-w-[371px]
              hover:border-primary hover:shadow-orange-700 transition-all 
              "
              variants={scrollAnimation}
              whileHover={{
                scale: 1.05,
                transition: {
                  duration: 0.1,
                },
              }}
            >
              <Image
                src={RightPerson}
                className="w-auto h-auto mb-5"
                alt="no Img"
              />
              <h4 className="text-general-default text-xl font-display font-bold mb-[57px]">
                {t("What do you need done?")}
              </h4>
              <p className="text-[17px] font-display font-normal">
                {t("Start by telling us about your task. Mention when and where (in person or remotely) you need it done, then suggest a fair budget for the task. Post any task, literally!")}
              </p>
            </motion.div>
            <motion.div
              className="border rounded px-[21px] py-[53px] text-center max-w-[371px]
              hover:border-primary hover:shadow-orange-700 transition-all"
              variants={scrollAnimation}
              whileHover={{
                scale: 1.05,
                transition: {
                  duration: 0.1,
                },
              }}
            >
              <Image
                src={TaskComplete}
                className="w-auto h-auto mb-5 mx-auto"
                alt="no Img"
              />
              <h4 className="text-general-default text-xl font-display font-bold mb-[57px]">
                {t("Assign the best person for you")}
              </h4>
              <p className="text-[17px] font-display font-normal">
                {t("Take a look at profiles and reviews to pick the best Tasker for your task. when you accept an offer, your payment is held securely with Taklief Pay  until the task is complete. Now you can message and call the Tasker to sort out the details.")}
              </p>
            </motion.div>
            <motion.div
              className="border rounded px-[21px] py-[53px] text-center max-w-[371px] hover:border-primary hover:shadow-orange-700 transition-all"
              variants={scrollAnimation}
              whileHover={{
                scale: 1.05,
                transition: {
                  duration: 0.1,
                },
              }}
            >
              <Image
                src={Accomplish}
                className="w-full h-auto mb-5"
                alt="no Img"
              />
              <h4 className="text-general-default text-xl font-display font-bold mb-[57px]">
                {t("Task completed")}
              </h4>
              <p className="text-[17px] font-display font-normal">
                {t("With your task complete, you just need to release the payment held with Taklief Pay. Then you’re free to leave a review for the Tasker so everyone can know what a great job they’ve done!.")}
              </p>
            </motion.div>
          </div>
        </section>
      </ScrollAnimationWrapper>
    </>
  );
};
export default Card;
