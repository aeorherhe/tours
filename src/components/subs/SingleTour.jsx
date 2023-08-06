/* eslint-disable react/prop-types */
import { useState } from "react";

export const SingleTour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour-card">
      <img src={image} alt={name} className="tour-img" />
      <p className="price">${price}</p>
      <div className="info-ctn">
        <h2>{name}</h2>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            type="button"
            className="read-more btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button type="button" className="btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </div>
    </article>
  );
};
