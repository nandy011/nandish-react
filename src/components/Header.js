import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL}></img>
      </div>

      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact US</li>
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
