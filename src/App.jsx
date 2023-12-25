// eslint-disable-next-line no-unused-vars
import React from "react";

import styles from "./style";
styles;
import {
  Billing,
  Business,
  Button,
  CardDeal,
  Client,
  CTA,
  FeedbackCard,
  Footer,
  // GetStarted,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full h-full">
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Button />
          <Client />
          <CTA />
          <FeedbackCard />
          <Footer />
          {/* <GetStarted /> */}
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default App;
