import Awards from "../components/Awards/Awards";
import Feature from "../components/Feature/Feature";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { AwardData } from "../utils/constant/Awards";
import { featureData } from "../utils/constant/Feature";

const About = () => {
  return (
    <div>
      <Header />
      <div className="feature">
        <h1>Featured Property Types</h1>
        <h6>Find All Type of Property.</h6>
        <div className="feature-box">
          {featureData.map((item, index) => {
            return <Feature key={index} data={item} />;
          })}
        </div>
      </div>

      <div className="award">
        <h6>Our Awards</h6>
        <h2>
          Over 1,24,000+ Happy User Bieng With Us <br /> Still They Love Our
          Services
        </h2>
        <div className="award-box">
          {AwardData.map((item, index) => {
            return <Awards key={index} data={item} />;
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
