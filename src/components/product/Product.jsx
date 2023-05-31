import PropTypes from "prop-types";
import "./Product.css";

const Product = ({ title, image, price, onClick }) => {
  return (
    <div className="prod-card">
      <img src={image} alt={title} />
      <div className="prod-info">
        <h5>{title}</h5>
        <h3>€{price}</h3>
        <button className="btn" onClick={onClick}>
          Istrinti
        </button>
      </div>
    </div>
  );
};

Product.protoTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
};

export default Product;
