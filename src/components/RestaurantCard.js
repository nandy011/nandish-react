import {MEDIA_URL} from "../utils/constants";


const RestaurantCard = (props) => {
    // console.log(props);
    // console.log(props);
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo } = resData?.card.card.info;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={MEDIA_URL + resData.card.card.info.cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData.card.card.info.sla.slaString}</h4>
      </div>
    );
  };

  export default RestaurantCard;