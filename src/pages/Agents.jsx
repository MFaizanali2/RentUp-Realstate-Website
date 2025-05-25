import Customer from "../components/Customer/Customer";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { CustomerData } from "../utils/constant/Customer";

const Agents = () => {
  return (
    <div>
      <Header />
      <div className="customer">
        <h2>Our Featured Agents</h2>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </h6>
        <div className="customer-box">
          {CustomerData.map((item, index) => {
            return <Customer key={index} data={item} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Agents;
