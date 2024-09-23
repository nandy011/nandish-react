import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"
const Body = () => {
    return (
      <div className="body-continer">
        <div className="search"> search</div>
        <div className="res-contanier">
          {/* <RestaurantCard resName="Meghana Foods" cuisine="Biriyani" /> */}
          {
          resList.map((restaurant) => <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant}/>)   
          }
        </div>
      </div>
    );
  };

  export default Body;