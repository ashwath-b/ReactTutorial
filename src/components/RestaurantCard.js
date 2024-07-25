import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, avgRating, cuisines, sla, totalRatingsString } = props.resData.info;
  return (
    <div className="rest-card">
      <img
        className="rest-logo"
        alt="rest-logo"
        src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars {"(" + totalRatingsString + ")"}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  )
}

export default RestaurantCard;