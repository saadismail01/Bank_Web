/* eslint-disable no-unused-vars */
import React from "react";
import styles, { layout } from "../style";
import { features } from "../constants/index.js";
import Button from "./Button";
React;

// eslint-disable-next-line react/prop-types
const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-gull ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex  flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-white text-[16px] leading-[24px] mb-1">
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <div
      id="features"
      className="flex flex-col justify-between p-10 sm:flex-row"
    >
      <div className="max-w-[520px] space-y-10 pt-10 pb-10">
        <h1 className={styles.heading2}>
          You do the Business, we`ll handle the money.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styes="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col max-w-[520px]`}>
        <div className="absolute z-[3] -right-[30px] top-0 w-full h-full rounded-full blue__gradient" />
        <div className="absolute z-[5] -right-[30px] bottom-0 w-[50%] h-[50%] rounded-full pink-gradient" />
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Business;
