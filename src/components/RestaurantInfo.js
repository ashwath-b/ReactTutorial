import { useState, useEffect } from "react";
import { useParams } from "react-router"
import { restUrl } from "../utils/constants"
import Shimmers from "./Shimmers";

const RestaurantInfo = () => {
  const [restInfo, setRestInfo] = useState(null);
  let { resId } = useParams();
  useEffect(()=> {
    fetchData();
  }, [])

  const fetchData = async () => {
    console.log(restUrl + resId);
    let data = await fetch(restUrl + resId);
    let json = await data.json();
    console.log(json?.data?.cards);
    setRestInfo(json?.data?.cards);
  }

  if (restInfo === null) {
    return <Shimmers />
  }

  const { name, costForTwoMessage, cuisines, avgRating, sla } = restInfo[2]?.card?.card?.info;
  const items = restInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
  console.log(items);
  return (
    <div className="info">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
      <h3>Rating: {avgRating} | ETA: #{sla.slaString}</h3>
      <ul>
        {items.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs {item?.card?.info?.price/100}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RestaurantInfo;
