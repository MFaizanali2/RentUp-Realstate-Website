import React from 'react'
import { BannerText1 } from '../utils/constant/bannerText'
import { featureData } from '../utils/constant/Feature'
import { PropertyData } from '../utils/constant/Property'
import { AwardData } from '../utils/constant/Awards'
import { CustomerData } from '../utils/constant/Customer'
import { LocationData } from '../utils/constant/Location'


import Banner from '../components/Banner/Banner'
import Header from '../components/Header/Header'
import Feature from '../components/Feature/Feature'
import Property from '../components/Property/Property'
import Awards from '../components/Awards/Awards'
import Location from '../components/Location/Location'
import Customer from '../components/Customer/Customer'
import Package from '../components/Package/Package'
import Question from '../components/Question/Question'
import Footer from '../components/Footer/Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <Banner data={BannerText1} />
            <div className="feature">
                <h1>Featured Property Types</h1>
                <h6>Find All Type of Property.</h6>
                <div className="feature-box">
                    {featureData.map((item, index) => {
                        return (
                            <Feature key={index} data={item} />
                        )
                    })}
                </div>
            </div>

            <div className="property">
                <h1>Recent Property Listed</h1>
                <h6>Discover this spacious and modern 2BHK apartment located ,</h6>
                <h6> in the heart of the city. Featuring 1200 sqft of elegantly.</h6>
                <h6> designed space, it offers comfort and convenience.</h6>
                <div className="property-box">
                    {PropertyData.map((item, index) => {
                        return (
                            <Property key={index} data={item} />
                        )
                    })}
                </div>
            </div>

            <div className="award">
                <h6>Our Awards</h6>
                <h2>Over 1,24,000+ Happy User Bieng With Us <br /> Still They Love Our Services</h2>
                <div className="award-box">
                    {AwardData.map((item, index) => {
                        return (
                            <Awards key={index} data={item} />
                        )
                    })}
                </div>
            </div>

            <div className="location">
                <h2>Explore By Location</h2>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h6>
                <div className="property-box">
                    {LocationData.map((item, index) => {
                        return (
                            <Location key={index} data={item} />
                        )
                    })}
                </div>
            </div>

            <div className="customer">
                <h2>Our Featured Agents</h2>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h6>
                <div className="customer-box">
                    {CustomerData.map((item, index) => {
                        return (
                            <Customer key={index} data={item} />
                        )
                    })}
                </div>
            </div>

            <div className="package">
                <h2>Our Featured Agents</h2>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h6>
                <div className="package-box">
                    <Package />
                </div>
            </div>

            <Question />
            <Footer />
        </div>
    )
}

export default Home
