import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = (props) => {
  const { items } = props;

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }

  return (
    <div className="text-left">
      {items.map((item) => (
        <div data-testid="menu-items" key={item?.card?.info?.id} className="flex flex-wrap p-2 border-gray-300 border-b-2">
          <div className="w-3/4">
            <div className="text-md font-bold text-gray-700">{item?.card?.info?.name} - Rs {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</div>
            <div className="text-xs text-gray-600">{item?.card?.info?.description}</div>
          </div>
          <div className="w-1/4 text-center">
            <div className="absolute p-auto">
              <button
                className="bg-white mx-16 my-1 px-1 rounded-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            {item?.card?.info?.imageId && <img className="w-13 ml-auto" src={CDN_URL + item?.card?.info?.imageId} />}
          </div>
        </div>
      ))}
      <span>

      </span>
    </div>
  )
}

export default ItemList;