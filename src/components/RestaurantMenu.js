import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {MENU_API} from "../utils/constants"
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {
    const [restInfo, setRestInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);
    
    const {resId} = useParams();
    console.log(resId);
    
    

    const fetchData = async () => { 
        const data = await fetch(MENU_API+resId)
        const json = await data.json();
        console.log(json.data.cards);
        setRestInfo(json.data)
    };
    if (restInfo === null) return <Shimmer />
    const {text} = restInfo?.cards[0]?.card?.card;
    const {areaName, cuisines,slaString,costForTwoMessage} = restInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    
    return (
        <div className="menu">
            <h1>{text}</h1>
            <p>{areaName}</p>
            <p>{cuisines.join(',')} {costForTwoMessage}</p>
            <h2> Menu</h2>
            <ul>
                {itemCards.map((item) => (<li key={item.card.info.id}>{item.card.info.name}-{item.card.info.price/100}</li>))}
            </ul>
        </div>
    )
};


export default RestaurantMenu;