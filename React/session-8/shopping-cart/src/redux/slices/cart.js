import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalPrice: 0,
    totalItems: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      let productToAdd = action.payload;
      let cartProducts = state.products.map((product) => ({ ...product }));

      const productAlreadyPresentInCartIndex = cartProducts?.findIndex(
        (productInCart) => productInCart.id == productToAdd.id
      );

      if (productAlreadyPresentInCartIndex != -1) {
        cartProducts[productAlreadyPresentInCartIndex].quantity += 1;
      } else {
        cartProducts.push({ ...productToAdd, quantity: 1 });
      }

      return {
        ...state,
        products: cartProducts,
        totalPrice: state?.totalPrice + +productToAdd?.price.split("$")[0],
        totalItems: state?.totalItems + 1,
      };
    },
    deleteProduct: (state, action) => {
      const idToDelete = action?.payload;
      let cartProducts = state.products.map((product) => ({ ...product }));
      const productIndexToDeleteFromCart = cartProducts?.findIndex(
        (product) => product.id == idToDelete
      );

      const productToDelete = cartProducts[productIndexToDeleteFromCart];
      if (cartProducts[productIndexToDeleteFromCart].quantity == 1) {
        cartProducts = cartProducts?.filter(
          (product) => product.id != idToDelete
        );
      } else {
        cartProducts[productIndexToDeleteFromCart].quantity =
          cartProducts[productIndexToDeleteFromCart].quantity - 1;
      }

      return {
        ...state,
        products: cartProducts,
        totalPrice: state?.totalPrice - +productToDelete?.price?.split("$")[0],
        totalItems: state?.totalItems - 1,
      };
    },
  },
});

const { addProduct, deleteProduct } = cartSlice.actions;

export { addProduct, deleteProduct };

export default cartSlice.reducer;
