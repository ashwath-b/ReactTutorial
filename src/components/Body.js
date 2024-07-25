import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState(resData);

  return (
    <div className="body">
      <button
        className="filter"
        onClick={() => {
          filteredList = restaurants.filter(res => (res.info.avgRating > 4.3))
          setRestaurants(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="rest-info">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
        ))}
      </div>
    </div>
  )
}

export default Body;