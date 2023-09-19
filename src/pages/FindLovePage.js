import React from "react";
import LogoBar from "../common/LogoBar";
import Gapper from "../common/Gapper";

import ProfileList from "../common/ProfileList";
import { DescriptionText, TitleBrandText } from "../common/Text";

const FindLovePage = () => {
  return (
    <div>
      <LogoBar />
      <div className="page-body-container container-white">
        <div className="page-title-container">
          <DescriptionText>
            <h2>Full list of Seattle singles</h2>
            <hr />
          </DescriptionText>
        </div>
        <Gapper />
        <ProfileList />
      </div>
    </div>
  );
};

export default FindLovePage;
