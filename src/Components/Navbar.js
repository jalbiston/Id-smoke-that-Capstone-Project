import React from "react";
import { Link, useHistory } from "react-router-dom";
import Dashboard from "./Dashboard";
import Smokeimg from "./smoke.svg"

export default function Navbar() {
  return (
    <>
      <header className="navbar">
        <div className="brand">
            <img  src={ Smokeimg } />
            
        </div>
        <div className="title1">
        <h1 className="title">Id Smoke that</h1>
        </div>
        <ul className="nav-links">
          <Link to="/tinder" className="link">
            Smoker Roulette
          </Link>
          <Link to="/" className="link">
            Dashboard
          </Link>
          
        </ul>
      </header>
    </>
  );
}
