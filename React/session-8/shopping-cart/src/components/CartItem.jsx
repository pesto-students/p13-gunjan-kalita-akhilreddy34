import { useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "../redux/slices/cart";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addProduct(props?.product));
  };
  const handleDeleteFromCart = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(props?.product?.id));
  };
  return (
    <div class="card" style={{ width: "20rem" }}>
      <img
        src={props?.product?.imageSrc}
        class="card-img-top"
        alt={props?.product?.imageAlt}
        height="500px;"
      />
      <div class="card-body">
        <h5 class="card-title">{props?.product?.title}</h5>
        <p class="card-text">{props?.product?.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{props?.product?.price}</li>
      </ul>
      <div class="card-body">
        <a href="" class="card-link" onClick={(e) => handleAddToCart(e)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
        </a>
        <span style={{ padding: "10px" }}>{props?.product?.quantity}</span>
        <a href="#" class="card-link" onClick={(e) => handleDeleteFromCart(e)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-dash-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CartItem;
