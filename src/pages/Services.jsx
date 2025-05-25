import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Property from "../components/Property/Property";
import { PropertyData } from "../utils/constant/Property";

const Services = () => {
  return (
    <div>
      <Header />
      <div className="property">
        <h1>Recent Property Listed</h1>
        <h6>Discover this spacious and modern 2BHK apartment located ,</h6>
        <h6> in the heart of the city. Featuring 1200 sqft of elegantly.</h6>
        <h6> designed space, it offers comfort and convenience.</h6>
        <div className="property-box">
          {PropertyData.map((item, index) => {
            return <Property key={index} data={item} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
