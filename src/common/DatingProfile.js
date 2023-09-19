import React, { useState, useEffect } from "react";

import "./DatingProfile.css";
import ContactModalButton from "./ContactModalButton";
import { useSearchParams } from "react-router-dom";

// name, age
// submitted by
const DatingProfile = ({ profile }) => {
  const { id, name, age, submittedBy, pictureLink } = profile;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const contactId = searchParams.get("contactid");
    if (contactId && Number(contactId) === id) {
      setModalIsOpen(true);
    }
  }, []);

  return (
    <div>
      <div className="dating-profile-flex-row">
        <h4 className="dating-profile-name-and-age">
          {name}, {age}
        </h4>
        <ContactModalButton
          modalIsOpen={modalIsOpen}
          setShow={setModalIsOpen}
          name={name}
        />
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
