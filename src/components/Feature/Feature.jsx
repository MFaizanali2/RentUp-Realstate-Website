
import "./Feature.css";

// eslint-disable-next-line react/prop-types
const Feature = ({ data }) => {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const { head, para, title, subTitle, imgUrl } = data;
    // console.log(data)
    return (
        <div className="feature-wrapper">               
                <div className="feature-content">
                    <img src={imgUrl} alt="" />
                    <h6>{title}</h6>
                    <p>{subTitle}</p>
                </div>
        </div>
    );
};

export default Feature;
