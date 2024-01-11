import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
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
      return "/assets/home/background-home-mobile.jpg";
    } else if (windowSize >= 768 && windowSize < 1216) {
      return "/assets/home/background-home-tablet.jpg";
    } else {
      return "/assets/home/background-home-desktop.jpg";
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
      <div className="home">
        <div className="content-wrapper">
          <div className="columns">
            <div className="column">
              <div className="h5">SO, YOU WANT TO TRAVEL TO</div>
              <div className="h1">Space</div>
              <p>
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
            <div className="column circle-wrapper">
              <Link to="/destination">
                <div className="circle">Explore</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
