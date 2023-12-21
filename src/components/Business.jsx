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
    <div className="flex flex-col justify-between p-10 sm:flex-row">
      <div className="max-w-[520px] space-y-20 pt-10 pb-10">
        <h1 className="text-white text-3xl font-semibold font-poppins">
          You do the Business, we`ll handle the money.
        </h1>
        <p className=" text-gray-400 font-poppins">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className="p-3 font-poppins text-black bg-blue-gradient rounded-sm">
          Get Started
        </button>
      </div>
      <div className={`${layout.sectionImg} flex-col max-w-[520px]`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Business;
