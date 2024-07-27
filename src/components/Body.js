import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmers from "./Shimmers";
import { APP_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantsArr, setRestaurantsArr] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [searchStr, setSearchStr] = useState("");

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      let data = await fetch(APP_URL);
      let json = await data.json();
      setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setRestaurantsArr(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch(err) {
      console.log(err);
    }
  }

  const RestaurantPromotedCard = withPromotedLabel(RestaurantCard);

  return (
    <div className="p-2 m-2 border border-solid border-[#f0f0f0] bg-orange-100">
      {console.log(restaurants)}
      <div className="flex items-center">
        <div className="p-4 m-4">
          <input
            type="text"
            placeholder="Search for restaurants"
            className="border border-solid border-black rounded-md"
            value={searchStr}
            onChange={(e) => {
              setSearchStr(e.target.value);
              text = searchStr.toLowerCase();
              filteredList = text === "" ? restaurantsArr : restaurantsArr.filter(res => res.info.name.toLowerCase().includes(searchStr.toLowerCase()))
              setRestaurants(filteredList);
            }}
          />
        </div>
        <button
          className="px-2 h-6 bg-blue-300 rounded-2xl"
          onClick={() => {
            filteredList = restaurantsArr.filter(res => (res.info.avgRating > 4.3))
            setRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {restaurants.length === 0 ? <Shimmers /> :
        <div className="flex flex-wrap">
          {restaurants.map((restaurant) => (
            <Link key={restaurant?.info?.id} to={"restaurant/" + restaurant?.info?.id}>
              {restaurant?.info?.avgRating > 4.3 ? (
                <RestaurantPromotedCard resData={restaurant} />
              ) : (
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
              )}
            </Link>
          ))}
        </div>
      }
    </div>
  )
}

export default Body;