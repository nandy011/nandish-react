import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterOfRestaurants, setfilterOfRestaurants] = useState([]);

  console.log("listOfRestaurants", listOfRestaurants);
  const [searchText, setSearchText] = useState("");

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
    setfilterOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // Condtional Rendering
  //   if(listOfRestaurants.length === 0){
  //     return <Shimmer />
  //   }

  // we can write above code in inside return only direct
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-continer">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);
              console.log(listOfRestaurants);

              const filtteredRest = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              console.log("filtteredRest", filtteredRest);

              setfilterOfRestaurants(filtteredRest);
            }}
          >
            search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            console.log("sdsfdfs", listOfRestaurants);
            const filterList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setfilterOfRestaurants(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filterOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
