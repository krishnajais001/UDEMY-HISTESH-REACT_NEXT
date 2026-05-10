import React from "react";

function NavBar() {
  return (
    <>
      <nav className="navbar">
            <h1 id="logo">BrandLogo</h1>
            <ul className="menu">
                <li className="menu-tems">Home</li>
                <li className="menu-tems">Features</li>
                <li className="menu-tems">Pricing</li>
                <li className="menu-tems">Contact</li>
            </ul>
            
            <button className="btn">Get Started</button>
      </nav>
    </>
  );
}

export default NavBar;