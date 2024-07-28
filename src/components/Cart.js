import { useSelector, useDispatch } from "react-redux"
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  // console.log(items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="w-6/12 mx-auto text-center">
      <span className="p-2 m-2 font-bold text-lg">Cart</span>
      <span>
        <button
          className="p-2 m-2 bg-red-400 rounded-md"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </span>
      <div>
        Cart is Empty. Kindly add items to cart.
      </div>
      <div >
        <ItemList items={items} />
      </div>
    </div>
  )
}

export default Cart