import React from "react";
import './Package.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PackageData } from "../../utils/constant/Package";

const Package = () => {
  return (
    <div className="pricing-container">
      {PackageData.map((item, index) => (
        <div className="pricing-card" key={index}>
          <div className="badge">{item.badge}</div>
          <h2 className="plan-name">{item.title}</h2>
          <h1 className="price">${item.price}</h1>
          <p className="sub-title">{item.SubTitle}</p>
          <ul className="features">
            {item.features.map((feature, i) => (
              <li key={i}>
                <FontAwesomeIcon icon={feature.icon} className="feature-icon" />{" "}
                {feature.text}
              </li>
            ))}
          </ul>
          <button className="start-btn">{item.btn}</button>
        </div>
      ))}
    </div>
  );
};

export default Package;
