import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";

import { PrimaryButton } from "./Buttons";

const ContactModalButton = ({ modalIsOpen, setShow, name }) => {
  const [yourName, setYourName] = useState("");
  const [message, setMessage] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSend = () => {
    setShow(false);

    axios.post("http://localhost:3000/inquiries", {
      name: yourName,
      message,
      contactInfo,
    });
    Swal.fire(
      "Message sent!",
      `We let ${name} know you're interested.`,
      "success"
    );
  };

  return (
    <>
      <PrimaryButton onClick={handleShow}>Connect with {name}</PrimaryButton>

      <Modal show={modalIsOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            We'll pass on your name and contact to {name}, and then you can
            exchange more info, pictures, and flirty messages 😉.
          </div>
          <hr />
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                value={yourName}
                placeholder="e.g. Alex"
                onChange={(e) => setYourName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Example: You're hot (in a holistic and non-objectifying way). Let's get drinks?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Contact Info (Phone number, Insta handle, email, etc.)
              </Form.Label>
              <Form.Control
                type="text"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                placeholder="e.g. 206-555-1234"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSend}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactModalButton;
