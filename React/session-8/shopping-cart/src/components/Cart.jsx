import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const { products, totalPrice, totalItems } = useSelector(
    (state) => state.cart
  );
  return (
    <>
      {products.length ? (
        <div>
          {products?.map((product) => (
            <CartItem product={product} />
          ))}
          <ul>
            <li>totalItems:{totalItems}</li>
            <li>totalPrice:{totalPrice}$ </li>
          </ul>
        </div>
      ) : (
        <h1>cart is empty please add dome items </h1>
      )}
    </>
  );
};

export default Cart;
