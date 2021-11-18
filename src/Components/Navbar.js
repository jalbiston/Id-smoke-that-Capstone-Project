import React from "react";
import { Link, useHistory } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function Navbar() {
  return (
    <>
      <header className="navbar">
        <div className="brand">MIN ELSKER DIE MICHAEL❤😘</div>
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
