import  {LOGO_URL} from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div>
          <img
            className="logo"
            src={LOGO_URL}
          ></img>
        </div>
  
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact US</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;