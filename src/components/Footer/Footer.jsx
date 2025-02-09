import React from "react";
import "./Footer.css";
import { footerData } from "../../utils/constant/Footer";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={footerData.companyName} alt="Rent up" />
          <p>{footerData.description}</p>
          <div className="subscribe">
            <input type="email" placeholder={footerData.emailPlaceholder} />
            <button>{footerData.subscribeText}</button>
          </div>
        </div>

        <div className="footer-links">
          <div className="column">
            <h3>LAYOUTS</h3>
            <ul>
              {footerData.layouts.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="column">
            <h3>ALL SECTIONS</h3>
            <ul>
              {footerData.sections.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="column">
            <h3>COMPANY</h3>
            <ul>
              {footerData.companyLinks.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{footerData.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
