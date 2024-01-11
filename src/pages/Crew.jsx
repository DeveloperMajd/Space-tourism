import { useState, useEffect } from "react";

export const Crew = ({ data }) => {
  const [currentCrew, setCurrentCrew] = useState(data[0]);

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
      return "/assets/crew/background-crew-mobile.jpg";
    } else if (windowSize >= 768 && windowSize < 1216) {
      return "/assets/crew/background-crew-tablet.jpg";
    } else {
      return "/assets/crew/background-crew-desktop.jpg";
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
      <div className="crew">
        <div className="columns">
          <div className="column content-column">
            <div className="numbered-title tablet">
              <span>02</span>
              <p>meet you crew</p>
            </div>
            <div className="content">
              <div className="h4">{currentCrew.role}</div>
              <div className="h3">{currentCrew.name}</div>
              <p>{currentCrew.bio}</p>
            </div>
            <div className="pagination tablet">
              {data.map((item, index) => (
                <span
                  className={`pagination-bullet ${
                    currentCrew === item ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => setCurrentCrew(data[index])}
                />
              ))}
            </div>
          </div>

          <div className="column image-column">
            <div className="numbered-title mobile">
              <span>02</span>
              <p>meet you crew</p>
            </div>
            <div className="image-wrapper">
              <img
                src={process.env.PUBLIC_URL + currentCrew.images.png}
                alt={currentCrew.name}
              />
              <div className="line" />
            </div>
            <div className="pagination mobile">
              {data.map((item, index) => (
                <span
                  className={`pagination-bullet ${
                    currentCrew === item ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => setCurrentCrew(data[index])}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
