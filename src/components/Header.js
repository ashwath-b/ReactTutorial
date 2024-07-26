import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logos">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-links">
        <ul className="nav-items">
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
          <li>Address</li>
          <button className="btn-login" onClick={() => {
            setBtnName(btnName === "Login" ? "Logout" : "Login")
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header;