import PropTypes from "prop-types";
import "./empty.scss";

const Empty = ({ img, title, description }) => {
  return (
    <div className="empty">
      <div className="empty__img">
        <img src={img} alt="" />
      </div>
      <div className="empty__text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

Empty.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Empty;
