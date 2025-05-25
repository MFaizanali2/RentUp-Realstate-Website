import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Location from "../components/Location/Location";
import { LocationData } from "../utils/constant/Location";

const Blog = () => {
  return (
    <div>
      <Header />
      <div className="location">
        <h2>Explore By Location</h2>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </h6>
        <div className="property-box">
          {LocationData.map((item, index) => {
            return <Location key={index} data={item} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
