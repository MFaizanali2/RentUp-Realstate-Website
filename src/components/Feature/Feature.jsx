import React from "react";
import "./Feature.css";

const Feature = ({ data }) => {
    const {head, para, title, subTitle, imgUrl } = data
    // console.log(data)
    return (
        <div className="feature-wrapper">               
                <div className="feature-content">
                    <img src={imgUrl} alt="" />
                    <h6>{title}</h6>
                    <p>{subTitle}</p>
                </div>
        </div>
    );
};

export default Feature;
