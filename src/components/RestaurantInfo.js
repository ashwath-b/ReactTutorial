import { useState, useEffect } from "react";
import { useParams } from "react-router"
import { restUrl } from "../utils/constants"
import Shimmers from "./Shimmers";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantInfo = () => {
  const [restInfo, setRestInfo] = useState(null);
  const [showIndex, setShowIndex] = useState(0);
  let { resId } = useParams();

  useEffect(()=> {
    fetchData();
  }, [])

  const fetchData = async () => {
    let data = await fetch(restUrl + resId);
    let json = await data.json();
    setRestInfo(json?.data?.cards);
  }

  if (restInfo === null) {
    return <Shimmers />
  }
  // console.log(restInfo.length);
  const { name, costForTwoMessage, cuisines, avgRating, sla } = restInfo[2]?.card?.card?.info;
  const items = restInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
  const categories = restInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => (
    c?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ));

  return (
    <div className="p-4 m-4 border border-solid bg-gray-200 text-center">
      <h1 className="font-bold text-lg mb-4">{name}</h1>
      <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
      <h3>Rating: {avgRating} | ETA: #{sla.slaString}</h3>
      <ul>
        {categories.map(
          (category, index) =>
            <RestaurantCategory
              key={category?.card?.card?.title}
              category={category?.card?.card}
              showItems={index === showIndex}
              setShowIndex={() => setShowIndex(index)}
            />
          )
        }
      </ul>
    </div>
  )
}

export default RestaurantInfo;
