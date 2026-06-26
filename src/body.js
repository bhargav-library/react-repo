import { useEffect,useState } from "react";

const Body=() =>{
    const[restaurant, setRestaurant]=useState([]);
         useEffect(() => {
           fetchData()
         },[]);
         const fetchData = async () => {
  
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.3611293&lng=92.7020755&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      
    );
    const json = await data.json();

    const restaurantList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setRestaurant(restaurantList);
  }

  return (

<div className="restaurant-list">
    {restaurant.map((res) => (
      <div key={res.info.id}>
        <h3>{res.info.name}</h3>
        <p>{res.info.avgRating} ⭐</p>
        <p>{res.info.cuisines.join(", ")}</p>
      </div>
    ))}
  </div>
);   
};

export default Body;