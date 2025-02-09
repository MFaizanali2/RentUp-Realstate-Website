import React from 'react'
import './Banner.css'

const Banner = ({ data }) => {
    const { title, subTitle, imgUrl } = data
    return (
        <div>
            <div className="banner-wrapper">
                <img src={imgUrl} alt="" />
                <div className='banner-text'>
                    <h1>{title}</h1>
                    <h6>{subTitle}</h6>
                    <div className="filter-bar">
                        <div className="filter-item">
                            <label>City/Street</label>
                            <input type="text" placeholder="Location" />
                        </div>
                        <div className="filter-item">
                            <label>Property Type</label>
                            <input type="text" placeholder="Property Type" />
                        </div>
                        <div className="filter-item">
                            <label>Price Range</label>
                            <input type="text" placeholder="Price Range" />
                        </div>
                        <div className="filter-advanced">
                            <button className="advanced-btn">Advance Filter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
