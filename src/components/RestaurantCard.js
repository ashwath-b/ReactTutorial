import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props);
  const { name, cloudinaryImageId, avgRating, cuisines, sla, totalRatingsString } = props.resData.info;
  return (
    <div data-testid="rest-card" className="m-2 p-2 w-[200px] border border-solid border-black bg-orange-100 rounded-2xl hover:bg-orange-200">
      <img
        className="rounded-md"
        alt="rest-logo"
        src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-1 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars {"(" + totalRatingsString + ")"}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  )
}

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="p-2 ml-4 mt-2 rounded-lg bg-black text-xs text-white absolute">
          Top
        </label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;