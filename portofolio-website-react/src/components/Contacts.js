import React, { useRef } from 'react';
import './Contacts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';
export default function Contacts() {

  function refreshPage() {
    window.location.reload(false);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
 
    emailjs.sendForm('service_88ziwsr', 'template_5ty8935', form.current, 'MXZpCdpJz8PVU2j9_')
      .then((result) => {
        console.log("Result:" + result)
        alert("Successfully sent the email!")
        refreshPage()
      }, (error) => {
        console.log("Error:" + error)
      });
  };

  return (
    <div className="all-container">
      <div className="contacts-container">
        <div className="left-container">
          <h1>Send Me A Message</h1>
        </div>
        <div className="right-container">
        <form ref={form} onSubmit={sendEmail}>
          <div className="name-container">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="nameTxt" placeholder='Your name'/>
          </div>
          <div className="from-container">
            <label htmlFor="from">From</label>
            <input type="email" pattern=".+@gmail\.com" name="from" id="fromTxt" placeholder='Your gmail'/>
          </div>
          <div className="message-container">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="What's on your mind" rows="8" cols="50" required></textarea>
          </div>
          <div className="submit-container">
            <button type='submit'>Submit</button>
          </div>
        </form>
        </div>
      </div>
      <div className="footer">
        <ul className="contact-list">
          <li>
            <FontAwesomeIcon icon={faPhone} id="phone-icon" />
            <span className="contact-text">+6281395224240</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} id="email-icon" />
            <span className="contact-text">pudge842@gmail.com</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} id="git-icon" />
            <a href="https://github.com/Sinanaas"><span className="contact-text">Sinanaas</span></a>
            
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} id="insta-icon" />
            <a href="https://www.instagram.com/sinanaas/"><span className="contact-text">@sinanaas</span></a>
          </li>
          <li>
            <FontAwesomeIcon icon={faXTwitter} id="twitter-icon" />
            <a href="https://twitter.com/Sinanaas"><span className="contact-text">@Sinanaas</span></a>
            
          </li>
        </ul>
      </div>
    </div>
  )
}
