import React from "react";
import LogoBar from "../common/LogoBar";

import "./Page.css";
import { DescriptionText, TitleBrandText } from "../common/Text";

const MissionPage = () => {
  return (
    <div>
      <LogoBar />
      <div className="page-body-container">
        <div className="page-content-container">
          <TitleBrandText>
            <h2>About Us</h2>
          </TitleBrandText>
          <DescriptionText>
            <p>
              The Seattle Wingwomen were created because we had a few wonderful
              friends who were still inexplicably single, and we wanted to help
              them find love. After many, many moons of toiling away on the
              dating apps — which are soul-sucking, self-esteem crushing, and
              joy sapping — they had nearly given up. So we created this website
              and put up personal ads for them! And we want to put up your ads
              too! Our mission is to make dating fun again, and help hot Seattle
              singles connect with the power of the internet.
            </p>
          </DescriptionText>
          <TitleBrandText>
            <p>— 🧡 The Seattle Wingwomen</p>
          </TitleBrandText>
        </div>
      </div>
    </div>
  );
};

export default MissionPage;
