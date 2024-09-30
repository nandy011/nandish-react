import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL}></img>
      </div>

      <div className="nav-item">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/about">About Us</Link></li>
          <li>
          <Link to="/contact">Contact US</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnLogin === "Login"
                ? setBtnLogin("Logout")
                : setBtnLogin("Login");
              console.log(btnLogin);
            }}
          >
            {btnLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
