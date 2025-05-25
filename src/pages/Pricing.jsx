import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Package from "../components/Package/Package";

const Pricing = () => {
  return (
    <div>
      <Header />
      <div className="package">
        <h2>Our Featured Agents</h2>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </h6>
        <div className="package-box">
          <Package />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
