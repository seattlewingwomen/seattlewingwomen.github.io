import LogoBar from "../common/LogoBar";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { GhostButton } from "../common/Buttons";

import { DescriptionText, TitleBrandText } from "../common/Text";

const SubmitProfileForm = () => {
  const [yourNames, setYourNames] = useState("");
  const [profileFor, setProfileFor] = useState("");
  const [profileLink, setProfileLink] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [submitFor, setSubmitFor] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO
  };

  const resetState = () => {
    setSubmitFor(null);
  };

  return (
    <>
      {submitFor === null ? (
        <Form>
          <Form.Group>
            <Form.Label>Who are you submitting this profile for?</Form.Label>
            <Form.Check
              type="radio"
              label="Myself"
              onClick={() => setSubmitFor("myself")}
            />
            <Form.Check
              type="radio"
              label="A Friend"
              onClick={() => setSubmitFor("friend")}
            />
          </Form.Group>
        </Form>
      ) : null}

      {submitFor === "myself" ? (
        <>
          <p>
            We only let users submit profiles on behalf of others. <b>Why?</b>
          </p>
          <p>
            Our friends have the best idea of what it's like to be around us, so
            we think they should be the ones making your dating profiles. Also,
            doesn't having a friend handle the stressful ordeal of creating a
            dating profile sound kind of nice?
          </p>
          <p>
            We believe that people also feel safer reaching to people who have
            friends who can vouch for their character.
          </p>
          <GhostButton onClick={resetState}>Go Back</GhostButton>
        </>
      ) : null}

      {submitFor === "friend" ? (
        <Form onSubmit={handleSubmit}>
          <p>
            Help a friend find love 😍 — Submit a dating profile for a friend
            and we'll showcase it on our website!
          </p>
          <p>
            Note: We prefer you use a service like Google Drive, Box, iCloud,
            etc. to share your friend's profile with us. If you can't, leave the
            field blank and send us the profile as an attachment to
            seattle.wingwomen@gmail.com
          </p>
          <Form.Group className="mb-3">
            <Form.Label>Your Name(s):</Form.Label>
            <Form.Control
              type="text"
              value={yourNames}
              onChange={(e) => setYourNames(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Your single friend's name:</Form.Label>
            <Form.Control
              type="text"
              value={profileFor}
              onChange={(e) => setProfileFor(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Link to Profile (e.g. Google Drive link):</Form.Label>
            <Form.Control
              type="text"
              value={profileLink}
              onChange={(e) => setProfileLink(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              Email/phone number to contact if there's interest:
            </Form.Label>
            <Form.Control
              type="text"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
            />
          </Form.Group>

          <GhostButton variant="primary" type="submit">
            Submit
          </GhostButton>
        </Form>
      ) : null}
    </>
  );
};

const SubmitProfilePage = () => {
  return (
    <div>
      <LogoBar />
      <div className="page-body-container">
        <div className="page-content-container">
          <div className="page-title-container">
            <DescriptionText>
              <h2>Submit a profile</h2>
            </DescriptionText>
          </div>
          <SubmitProfileForm />
        </div>
      </div>
    </div>
  );
};

export default SubmitProfilePage;
