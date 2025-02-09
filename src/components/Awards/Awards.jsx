import React from "react";
import "./Awards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Awards = ({ data }) => {
    const {title, SubTitle, icons} = data
    // console.log(data)
    return (
        <div className="award-wrapper">               
                <div className="award-content">
                    <div className="award-icons">
                    <FontAwesomeIcon icon={icons} className="icons"/>
                    </div>
                    <h1>{title}</h1>
                    <p>{SubTitle}</p>
                </div>
        </div>
    );
};

export default Awards;
