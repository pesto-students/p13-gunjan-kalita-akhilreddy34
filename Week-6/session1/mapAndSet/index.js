const productViews = new WeakMap();
const cartItems = new WeakSet();
const productViewsMap = new Map();
const cartItemsMap = new Map();

function incrementProductViews(productId) {
  const keyObject = getKeyObject(productViewsMap, productId);
  let productEntry = productViews.get(keyObject);

  if (productViews.has(keyObject)) {
    productEntry.count++;
  } else {
    productEntry = { count: 1 };
    productViews.set(keyObject, productEntry);
  }

  return `Product ID ${productId} is viewed for ${productEntry.count} time`;
}

function addToCart(productId) {
  const keyObject = getKeyObject(cartItemsMap, productId);
  let productEntry = cartItems.has(keyObject);
  if (!productEntry) {
    cartItems.add(keyObject);
    return "Product added to cart";
  } else return "Product already in cart";
}

function getKeyObject(map, keyName) {
  if (!map.has(keyName)) map.set(keyName, { id: keyName });
  return map.get(keyName);
}
