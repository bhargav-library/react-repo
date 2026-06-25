import { useEffect,useState } from "react";
const Body=() =>{
    const[restaurant, setRestaurant]=useState([]);
         useEffect(() => {
           fetchData()
         },[]);
         const fetchData = async () => {
            const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.3611293&lng=92.7020755&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
                const json = await data.json();
                console.log(json);
                setRestaurant(json.data.cards);
}
    return(
        <div className="body">
         </div>
    )
}
export default Body;