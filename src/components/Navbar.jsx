import { NavLink, Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const logoPath = process.env.PUBLIC_URL + "/assets/shared/logo.svg";

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/Space-tourism" alt="home">
          <img src={logoPath} alt="Logo" />
        </Link>
      </div>
      <div className="line hide-mobile hide-tablet"></div>
      <nav className={`nav-items ${isOpen ? "open" : ""}`}>
        <NavLink className="nav-item" to="/Space-tourism" onClick={handleClose}>
          <div className="is-flex is-centered">
            <span className="hide-tablet">00</span>
            <p>Home</p>
          </div>
          {pathname === "/Space-tourism" ||
            (pathname === "/Space-tourism/" && (
              <motion.div className="underline" layoutId="underline" />
            ))}
        </NavLink>
        <NavLink className="nav-item" to="/destination" onClick={handleClose}>
          <div className="is-flex is-centered">
            <span className="hide-tablet">01</span>
            <p>Destination</p>
          </div>
          {pathname === "/destination" && (
            <motion.div className="underline" layoutId="underline" />
          )}
        </NavLink>
        <NavLink className="nav-item" to="/crew" onClick={handleClose}>
          <div className="is-flex is-centered">
            <span className="hide-tablet">02</span>
            <p>Crew</p>
          </div>
          {pathname === "/crew" && (
            <motion.div className="underline" layoutId="underline" />
          )}
        </NavLink>
        <NavLink className="nav-item" to="/technology" onClick={handleClose}>
          <div className="is-flex is-centered">
            <span className="hide-tablet">03</span>
            <p>technology</p>
          </div>
          {pathname === "/technology" && (
            <motion.div className="underline" layoutId="underline" />
          )}
        </NavLink>
      </nav>
      <Hamburger toggled={isOpen} toggle={setIsOpen} />
    </div>
  );
};
