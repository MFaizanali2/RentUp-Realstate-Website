import React from "react";
import "./Customer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Customer = ({data}) => {
    const {name, city, imgUrl, num} = data
  return (
    <div className="card">
      <div className="listing-badge">{num} Listings</div>
      <div className="profile-image">
        <img src={imgUrl} alt="Profile"/>
      </div>
      <p className="address">
        <i className="fas fa-map-marker-alt"></i> {city}
      </p>
      <h3 className="name">{name}</h3>
      <div className="social-icons">
        <FontAwesomeIcon icon={faFacebook} className="icon" />
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
        <FontAwesomeIcon icon={faTwitter} className="icon" />
        <FontAwesomeIcon icon={faInstagram} className="icon" />
      </div>
      <div className="buttons">
        <button className="message-btn">
          <FontAwesomeIcon icon={faEnvelope} /> Message
        </button>
        <button className="call-btn">
          <FontAwesomeIcon icon={faPhone} />
        </button>
      </div>
    </div>
  );
};

export default Customer;
