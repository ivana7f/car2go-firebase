import React, { useState } from "react";
import classes from "./ContactPage.module.scss";
import { IoLocationOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import { GoMail } from "react-icons/go";

function ContactPage() {
  // entered name states
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);

  // entered email states
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailisValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  // entered message states
  const [message, setMessage] = useState("");
  const [messageIsValid, setMessageIsValid] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);

  const [isSent, setIsSent] = useState(false);

  // handling state of losing focus
  function nameInputBlurHandler() {
    setNameTouched(true);
    setIsSent(false);

    if (name.trim() === "") {
      setNameIsValid(false);
    } else {
      setNameIsValid(true);
    }
  }

  function emailInputBlurHandler() {
    setEmailTouched(true);
    setIsSent(false);

    if (!email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
      setEmailisValid(false);
    } else {
      setEmailisValid(true);
    }
  }

  function messageBlurHandler() {
    setMessageTouched(true);
    setIsSent(false);

    if (message.trim() === "") {
      setMessageIsValid(false);
    } else {
      setMessageIsValid(true);
    }
  }

  // handling form submit
  function handleSubmit(event) {
    event.preventDefault();

    setNameTouched(true);
    setEmailTouched(true);
    setMessageTouched(true);

    if (name.trim() === "") {
      setNameIsValid(false);
      return;
    }

    if (!email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
      setEmailisValid(false);
      return;
    }

    if (message.trim() === "") {
      setMessageIsValid(false);
      return;
    }

    setNameIsValid(true);
    setEmailisValid(true);
    setMessageIsValid(true);

    // send to server code here
    setIsSent(true);

    setName("");
    setEmail("");
    setMessage("");
    setNameTouched(false);
    setEmailTouched(false);
    setMessageTouched(false);
  }

  const nameIsInvalid = !nameIsValid && nameTouched;
  const emailIsInvalid = !emailIsValid && emailTouched;
  const messageIsInvalid = !messageIsValid && messageTouched;

  // adding classes depending on validity
  const inputClassesName = nameIsInvalid ? "invalidInput" : "input";
  const inputClassesEmail = emailIsInvalid ? "invalidInput" : "input";
  const inputClassesMessage = messageIsInvalid ? "invalidMessage" : "message";

  return (
    <div className={classes.contactPage}>
      <section>
        <div className={classes.contactForm}>
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className={classes[`${inputClassesName}`]}
              value={name}
              onBlur={nameInputBlurHandler}
              onChange={(event) => setName(event.target.value)}
            />
            {nameIsInvalid && (
              <div className={classes.invalidInputText}>
                Name must not be empty!
              </div>
            )}
            <input
              type="email"
              placeholder="Your Email"
              className={classes[`${inputClassesEmail}`]}
              value={email}
              onBlur={emailInputBlurHandler}
              onChange={(event) => setEmail(event.target.value)}
            />
            {emailIsInvalid && (
              <div className={classes.invalidInputText}>
                Email is not valid!
              </div>
            )}
            <textarea
              placeholder="Enter message..."
              maxLength={600}
              rows={9}
              cols={30}
              className={classes[`${inputClassesMessage}`]}
              value={message}
              onBlur={messageBlurHandler}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
            {messageIsInvalid && (
              <div className={classes.invalidInputText}>
                Message must not be empty!
              </div>
            )}
            <button className={classes.sendBtn}>Send message</button>
            {isSent && (
              <p className={classes.success}>
                Your message has been successfully sent!
              </p>
            )}
          </form>
        </div>
      </section>
      <section>
        <div className={classes.contactInfo}>
          <div className={classes.infoBox}>
            <IoLocationOutline size="5rem" color="#1f5c90" />
            <p>7760 Glenridge Dr. Oak Lawn, IL 60453</p>
          </div>
          <div className={classes.infoBox}>
            <BiPhoneCall size="5rem" color="#1f5c90" />
            <p>972-968-9359</p>
          </div>
          <div className={classes.infoBox}>
            <GoMail size="5rem" color="#1f5c90" />
            <p>info@car2go.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
