import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  console.log("listOfRestaurants", listOfRestaurants);

  return (
    <div className="body-continer">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("sdsfdfs");
            const filterList = listOfRestaurants.filter(
              (res) => res.card.card.info.avgRating > 4
            );
            setListOfRestaurants(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-contanier">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
