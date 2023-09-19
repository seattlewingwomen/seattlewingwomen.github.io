import React from "react";

import Divider from "./Divider";
import "./ProfileList.css";

import { profiles } from "../data/profiles";
import DatingProfile from "./DatingProfile";

// name, age
// submitted by
const ProfileList = () => {
  return profiles.map((profile) => {
    return (
      <div key={profile.name + profile.age} className="profile-list-container">
        <DatingProfile profile={profile} />
        <Divider />
      </div>
    );
  });
};

export default ProfileList;
