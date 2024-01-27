import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../redux/slices/cart";

const Product = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();

    dispatch(addProduct(props));
  };

  return (
    <div class="card" style={{ width: "20rem" }}>
      <img
        src={props.imageSrc}
        class="card-img-top"
        alt={props?.imageAlt}
        height="500px;"
      />
      <div class="card-body">
        <h5 class="card-title">{props?.title}</h5>
        <p class="card-text">{props?.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{props?.price}</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link" onClick={(e) => handleAddToCart(e)}>
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default Product;
