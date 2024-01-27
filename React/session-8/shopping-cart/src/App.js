import { useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Products from "./components/Products";
function App() {
  const { totalItems } = useSelector((state) => state.cart);

  const cartButton = (
    <button type="button" class="btn btn-primary position-relative">
      Cart
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {totalItems}
        <span class="visually-hidden">unread messages</span>
      </span>
    </button>
  );

  const navBar = (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">
              <Link to="/">Products</Link>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );

  return (
    <BrowserRouter>
      {navBar}
      <div class="position-fixed top-0 end-0 mt-2 me-2">
        <Link to="/cart">{cartButton}</Link>
      </div>

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
