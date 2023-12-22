/* eslint-disable no-unused-vars */
import React from "react";
React;
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionImgReverse}>
      <div className={layout.sectionReverse}>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5] sm:w-[50%] sm:h-[50%]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[90%] h-[90%] rounded-full blue__gradient" />
        <div className="absolute z-[5] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink-gradient" />
      </div>
    </section>
  );
};

export default Billing;
