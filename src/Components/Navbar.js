import React from "react";
import { Link, useHistory } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function Navbar() {
  return (
    <>
      <header className="navbar">
        <div className="brand">MIN ELSKER DIE MICHAEL❤😘</div>
        <ul className="nav-links">
          {/* <Link to="/tinder" className="link">
            Tinder
          </Link>
          <Link>
            Dashboard
          </Link>
          <Link to="/tinder" className="link">
            Tinder
          </Link>
          <Link to="/tinder" className="link">
            Tinder
          </Link> */}
        </ul>
      </header>
    </>
  );
}
