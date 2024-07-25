import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logos">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-links">
        <ul className="nav-items">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Address</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;