import React, { useRef, useState } from "react";
import "./contact.css";
import Phone from "../../images/phone.png";
import Email from "../../images/email.png";
import Address from "../../images/address.png";
import Github from "../../images/git.png";
import Linkedin from "../../images/in.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_svw48v4",
        "template_dwojugf",
        formRef.current,
        "t4lJkUoT9SdyLnYxA"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 9566100135
            </div>

            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              kishoremonish512@gmail.com
            </div>

            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              No 7, General Kariyappa Nagar, 4th Cross Street, Anna Nagar,
              Pattabiram, Chennai - 600072.
            </div>

            <div className="c-info-item">
              <a
                href="https://github.com/kishorekumar512"
                target="_blank"
                rel="noreferrer"
                className="a-icon"
              >
                <img src={Github} alt="" className="c-icon" />
                Github
              </a>
            </div>

            <div className="c-info-item">
              <a
                href="https://www.linkedin.com/in/kishore-kumar-977409248/"
                target="_blank"
                rel="noreferrer"
                className="a-icon"
              >
                <img src={Linkedin} alt="" className="c-icon" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your thought?</b> Get in touch? Always available for the
            right oppurtunities.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea
              className="c-textarea"
              rows="5"
              placeholder="message"
              name="message"
            />
            <button className="btn-submit">Submit</button>
            <br />
            {done && "Thank you😄"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
