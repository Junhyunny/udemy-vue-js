export default {
  state() {
    return { items: [], total: 0, qty: 0 };
  },
  getters: {
    cart(state) {
      return state;
    },
  },
  mutations: {
    addProductToCart(state, payload) {
      const productInCartIndex = state.items.findIndex(
        (ci) => ci.productId === payload.productData.id
      );
      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: payload.productData.id,
          title: payload.productData.title,
          image: payload.productData.image,
          price: payload.productData.price,
          qty: 1,
        };
        state.items.push(newItem);
      }
      state.qty++;
      state.total += payload.productData.price;
    },
    removeProductFromCart(state, payload) {
      const productInCartIndex = state.items.findIndex(
        (cartItem) => cartItem.productId === payload.prodId
      );
      const prodData = state.items[productInCartIndex];
      state.items.splice(productInCartIndex, 1);
      state.qty -= prodData.qty;
      state.total -= prodData.price * prodData.qty;
    },
  },
};
