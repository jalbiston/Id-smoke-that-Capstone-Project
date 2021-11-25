import React from "react";
import { Link, useHistory } from "react-router-dom";
import Dashboard from "./Dashboard";
import Smokeimg from "./smoke.svg"
import Logo from "./Logo.svg"
import { Dropdown, DropdownButton } from "react-bootstrap"

export default function Navbar() {
  return (
    <>
      <header className="navbar">
        <div className="brand">
            <img  src={ Logo } />
            
        </div>
        <div className="title1">
        <h1 className="title">Id Smoke that</h1>
        
        </div>
        <ul className="nav-links">
        <DropdownButton id="dropdown-basic-button" title="Menu">
          <Dropdown.Item href="#/action-1"><Link to="/update-profile" className="btn btn-primary m-3">
            Update profile
          </Link></Dropdown.Item>
          <Dropdown.Item href="/tinder">Would You Smoke That?</Dropdown.Item>
          <Dropdown.Item href="/">Home</Dropdown.Item>
        </DropdownButton>
        </ul>
      </header>
    </>
  );
}
