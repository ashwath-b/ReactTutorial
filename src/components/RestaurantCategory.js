import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { category } = props;
  const items = category?.itemCards;
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => setShowItems(!showItems);
  return (
    <div className="w-6/12 mx-auto">
      <div className="my-2 p-4 bg-gray-200 shadow-lg text-center flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold">{category?.title} ({items.length})</span>
        <span>⬇️</span>
      </div>
      <div>
        {showItems && <ItemList items={items} />}
      </div>
    </div>
  )
}

export default RestaurantCategory;