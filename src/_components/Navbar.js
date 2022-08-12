import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faItalic } from '@fortawesome/free-solid-svg-icons'


const Navbar = ({ title, mode, toggleMode}) => {

  
 
  return (
    <>
  
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

      
         
       
          <div className={`form-check form-switch text-${mode === "light" ? "dark" : "light"}`}>
                        <input className="form-check-input"  type="checkbox" onClick={toggleMode} id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${mode === "light" ? "Dark Mode": "Light Mode"}`}</label>
                    </div>
                    </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  title:PropTypes.string,
  about:PropTypes.string,
  mode:PropTypes.string,
  toggleMode: PropTypes.func,
}

// Navbar.defaultProps = {
//   about: "about text"
// }


export default Navbar;
