
import "./Location.css";


// eslint-disable-next-line react/prop-types
const Location = ({ data}) => {
  // eslint-disable-next-line react/prop-types
  const { city, imgUrl, purpose } = data;
  return (
    <div className="card-container">
      <div className="card">
        <img src={imgUrl} alt="City-image" className="card-image"/>
        <div className="card-content">
          <h5>{city}</h5>
          <p>{purpose}</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
