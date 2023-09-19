import React from "react";

import "./DatingProfile.css";
import ContactModalButton from "./ContactModalButton";

// name, age
// submitted by
const DatingProfile = ({ profile }) => {
  const { name, age, submittedBy, pictureLink } = profile;
  return (
    <div>
      <div className="dating-profile-flex-row">
        <h3 className="dating-profile-name-and-age">
          {name}, {age}
        </h3>
        <ContactModalButton name={name} />
      </div>
      <div className="dating-profile-flex-row">
        <div className="dating-profile-submitted-by">
          Submitted By: {submittedBy}
        </div>
      </div>
      <img className="dating-profile-picture" src={pictureLink} />
    </div>
  );
};

export default DatingProfile;
