import { useState, useEffect } from "react";

import { motion } from "framer-motion";

export const Technology = ({ data }) => {
  const [currentTechnology, setCurrentTechnology] = useState(data[0]);

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
      return "/assets/technology/background-technology-mobile.jpg";
    } else if (windowSize >= 768 && windowSize < 1216) {
      return "/assets/technology/background-technology-tablet.jpg";
    } else {
      return "/assets/technology/background-technology-desktop.jpg";
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
      <div className="technology">
        <div className="numbered-title tablet">
          <span>03</span>
          <p>space launch 101</p>
        </div>
        <div className="columns">
          <div className="column content-column">
            <div className="content-wrapper">
              <div className="content">
                <div className="navText">the technology...</div>
                <div className="h3">{currentTechnology.name}</div>
                <p>{currentTechnology.description}</p>
              </div>
              <div className="pagination">
                {data.map((item, index) => (
                  <span
                    className={`pagination-bullet ${
                      currentTechnology === item ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => setCurrentTechnology(data[index])}
                  >
                    {index + 1}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="column image-column">
            <div className="image-wrapper">
              <img
                src={
                  windowSize < 1216
                    ? currentTechnology.images.landscape
                    : currentTechnology.images.portrait
                }
                alt={currentTechnology.name}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
