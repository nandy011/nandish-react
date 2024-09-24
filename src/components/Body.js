import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  console.log("listOfRestaurants", listOfRestaurants);

  useEffect(() => {
    console.log("useEffect");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return (
    <div className="body-continer">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("sdsfdfs", listOfRestaurants);
            const filterList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 5
            );
            setListOfRestaurants(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-contanier">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
