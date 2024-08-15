import { useState, useEffect, useRef } from "react";
import "./NavbarStyle.css";
import LogoIcon from "./../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="nav_container">
      <div className="nav_container_top">
        <div className="nav_container_top_sub_block">
          <div className="nav_container_top_sub_block_left">
            <img src={LogoIcon} alt="" />
          </div>
          <ul className="nav_container_top_sub_block_right">
            <li>
              <i className="fa fa-envelope"></i> info@slimlinekitchens.com
            </li>
            <li>
              <i className="fa fa-phone"></i> +91-9650100908
            </li>
            <li>
              <i className="fa fa-facebook-f"></i>
            </li>
            <li>
              <i className="fa fa-linkedin"></i>
            </li>
            <li>
              <i className="fa fa-twitter"></i>
            </li>
            <li>
              <i className="fa fa-instagram"></i>
            </li>
            <li>
              <i className="fa fa-youtube-play"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav_container_bottom">
        <div className="nav_container_bottom_sub_block">
        <ul className={`navbar_links ${menuOpen ? "active" : ""}`}>
      <li>
        <a href="#" onClick={toggleMenu}>
          HOME
        </a>
      </li>
      <li className="dropdown" ref={dropdownRef}>
        <a href="#products" onClick={toggleDropdown}>
          PRODUCTS{" "}
          <i
            className={`fa fa-angle-down ${dropdownOpen ? "rotate-icon" : ""}`}
            style={{ fontSize: "17px", paddingLeft: "4px" }}
          ></i>
        </a>
        {dropdownOpen && (
          <ul className="dropdown-menu">
            <li>
              <a href="#forlife" onClick={closeDropdown}>
                FORLIFE
              </a>
            </li>
            <li>
              <a href="#krysta" onClick={closeDropdown}>
                KRYSTA
              </a>
            </li>
            <li>
              <a href="#slimline" onClick={closeDropdown}>
                Slimline 304
              </a>
            </li>
            <li>
              <a href="#modular" onClick={closeDropdown}>
                Modular Hardware
              </a>
            </li>
            <li>
              <a href="#prime" onClick={closeDropdown}>
                Prime
              </a>
            </li>
          </ul>
        )}
      </li>
      <li>
        <a href="#about" onClick={toggleMenu}>
          ABOUT
        </a>
      </li>
      <li>
        <a href="#contact" onClick={toggleMenu}>
          CONTACT
        </a>
      </li>
    </ul>
          <div className="menu_btn" onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
