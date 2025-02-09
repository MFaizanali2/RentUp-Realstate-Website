import React from "react";
import "./Property.css";

const Property = ({ data }) => {
    const { title, city, imgUrl, price, purpose } = data
    return (
        <div className="card">
            <div className="card-image">
                <img src={imgUrl} alt="Apartment" />
                <button className="heart-button">
                    <i class="fa-regular fa-heart"></i>
                </button>
            </div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-subtitle"><i class="fa-solid fa-location-dot"></i> {city}</p>
                <div className="pBtn">
                    <button className="card-button">${price}</button>
                    <button className="card-button">{purpose}</button>
                </div>
            </div>
        </div>
    );
};

export default Property;