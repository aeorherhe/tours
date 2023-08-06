/* eslint-disable react/prop-types */
import { SingleTour } from "./subs/SingleTour";

export const Tours = ({ tours, removeTour }) => {
  return (
    <section className="tours-stn">
      <h1>Tours</h1>
      <div className="tours-grid">
        {tours.map((tour) => {
          return <SingleTour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};
