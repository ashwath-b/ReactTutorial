import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="p-2 m-2 flex justify-between border border-solid border-black bg-green-200">
      <div className="logos">
        <img className="w-20" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">Address</li>
          <button className="px-2" onClick={() => {
            setBtnName(btnName === "Login" ? "Logout" : "Login")
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header;