import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [openmenu, setOpenmenu] = useState(false);
  const handleClick = () => {
    openmenu ? setOpenmenu(false) : setOpenmenu(true);
  };
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h3 className="title">Shortly</h3>
        <ul className="navbar-items">
          <li className="navbar-item">Features</li>
          <li className="navbar-item">Pricing</li>
          <li className="navbar-item">Resources</li>
        </ul>
      </div>
      <div>
        {openmenu ? (
          <AiOutlineClose className="menu" onClick={handleClick} size={30} />
        ) : (
          <AiOutlineMenu className="menu" onClick={handleClick} size={30} />
        )}
      </div>

      <div className="navbar-right">
        <button className="login button">Login</button>
        <button className="signup button">Sign Up</button>
      </div>
      {openmenu && (
        <div className="menubar">
          <div className="menubar-top">
            <ul className="menubar-items">
              <li className="menubar-item">Features</li>
              <li className="menubar-item">Pricing</li>
              <li className="menubar-item">Resources</li>
            </ul>
          </div>
          <div className="menubar-bottom">
            <ul className="menubar-items">
              <li className="menubar-item">
                <button className="login button">Login</button>
              </li>
              <li className="menubar-item">
                <button className="signup button">Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
