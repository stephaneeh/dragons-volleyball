import React from "react";
import logo from "../assets/dragons-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="links">
        <a href="/">Home</a>
        <a href="/About">About</a>
        <a href="/Training">Training</a>
        <a href="/Chalice">Chalice</a>
        <a href="/PVL">PVL</a>
        <a href="/Metro">Metro League</a>
        <a href="/Tournaments">Tournaments</a>
      </div>
    </nav>
  );
};

export default Navbar;
