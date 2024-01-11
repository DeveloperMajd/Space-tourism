import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Destination = ({ data }) => {
  const [currentDestination, setCurrentDestination] = useState(data[0]);

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const getBackgroundImage = () => {
    if (windowSize < 768) {
      return "/assets/destination/background-destination-mobile.jpg";
    } else if (windowSize >= 768 && windowSize < 1216) {
      return "/assets/destination/background-destination-tablet.jpg";
    } else {
      return "/assets/destination/background-destination-desktop.jpg";
    }
  };

  return (
    <>
      <div className="background-wrapper">
        <img
          src={process.env.PUBLIC_URL + getBackgroundImage()}
          alt="Background"
        />
      </div>
      <div className="destination">
        <div className="numbered-title">
          <span>01</span>
          <p>pick your destination</p>
        </div>
        <div className="columns">
          <div className="column img-column">
            <div className="image-wrapper">
              <img
                src={process.env.PUBLIC_URL + currentDestination.images.png}
                alt={currentDestination.name}
              />
            </div>
          </div>
          <div className="column content-column">
            <ul className="nav-items subnav">
              {data.map((destination) => (
                <li
                  className={`nav-item subnav ${
                    destination === currentDestination ? "active" : ""
                  }`}
                  key={destination.name}
                  onClick={() => setCurrentDestination(destination)}
                >
                  <p>{destination.name}</p>
                  {destination === currentDestination && (
                    <motion.div
                      className="underline"
                      layoutId="sub-underline"
                    />
                  )}
                </li>
              ))}
            </ul>
            <div className="h2">{currentDestination.name}</div>
            <p className="description">{currentDestination.description}</p>

            <div className="line"></div>
            <div className="num-data">
              <div>
                <div className="subHeading-2">AVG. DISTANCE</div>
                <div className="subHeading-1">
                  {currentDestination.distance}
                </div>
              </div>
              <div>
                <div className="subHeading-2">Est. travel time</div>
                <div className="subHeading-1">{currentDestination.travel}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
