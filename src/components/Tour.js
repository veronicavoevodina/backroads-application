import React from 'react';
import { tours } from '../Data';

const Tour = () => {
  return (
    <div className="section-center featured-center">
      {tours.map((link) => {
        const { id, images, date, title, info, location, duration, price } =
          link;
        return (
          <article className="tour-card" key={id}>
            <div className="tour-img-container">
              <img src={images} className="tour-img" alt="" />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{title}</h4>
              </div>
              <p>{info}</p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{' '}
                  {location}
                </p>
                <p>{duration}</p>
                <p>{price}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Tour;
