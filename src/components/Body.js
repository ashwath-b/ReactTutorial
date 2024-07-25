import RestaurantCard from "./RestaurantCard";
import Shimmers from "./Shimmers";
import { useState, useEffect } from "react";

const Body = () => {
  const [restaurantsArr, setRestaurantsArr] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [searchStr, setSearchStr] = useState("");

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      let json = await data.json();
      setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setRestaurantsArr(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search for restaurants"
            className="serach-box"
            value={searchStr}
            onChange={(e) => {
              setSearchStr(e.target.value);
              filteredList = restaurantsArr.filter(res => res.info.name.toLowerCase().includes(searchStr.toLowerCase()))
              setRestaurants(filteredList);
            }}
          />
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = restaurants.filter(res => (res.info.avgRating > 4.3))
            setRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {restaurants.length === 0 ? <Shimmers /> :
        <div className="rest-info">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
          ))}
        </div>
      }
    </div>
  )
}

export default Body;