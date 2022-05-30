import logo from '../img/logo-rpa.png';
import React from 'react';
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="container-fluid">
      
      <div className="row navbar">
        <div className="col-lg-2 col-md-12 logo">
        <Link
          exact to="/">
          <img src={logo} className="img-fluid" alt="logo" />
        </Link>
        </div>

        <div className="col-lg-10 col-md-12">
          <h1 className="display-4 title-navbar">Portal RPA Latam</h1>
        </div>
      </div>

      <div className="row title-page">
        <p>{props.title}</p>
      </div>

    </div>
  );
}

export default Navbar;