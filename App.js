import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://seeklogo.com/images/C/creative-food-company-logo-2DFFD76692-seeklogo.com.png"
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

const RestaurantCard = (props) => {
console.log(props);

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHlggjJTT_82lOAdbMOC9A4L9vluWstyhqGw&s"
      />
      <h3>Meghana Biriyani</h3>
      <h4>Biriyani,Andhra,South Indian,North Indian</h4>
      <h4>4.4 ratings</h4>
      <h4>30m</h4>

    </div>
  );
};

const Body = () => {
  return (
    <div className="body-continer">
      <div className="search"> search</div>
      <div className="res-contanier">
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppComponent = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
