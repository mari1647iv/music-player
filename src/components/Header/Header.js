import React from "react";
import "./Header.css";
import { ArrowLeft, Calendar } from "react-feather";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";


function Header(props) {
  const { location } = props;

  return (
    <header>
      <div className="title-container">
      {location==="main"?"":<Link to="/main"><ArrowLeft size={55} color="#cecece" strokeWidth="1.5px"/></Link>}
      <Link to="/" className="link">
      <div className="title">
        <p>Frontend Project</p>
        <h1>Music Player</h1>
      </div>
      </Link>
      </div>
      <img src={Logo} className="logo" alt="Service logo" />
      <Link to="/events"><Calendar size={36} color={location==="events"?"#00FFC2":"#cecece"}/></Link>
    </header>
  );
}

export default Header;