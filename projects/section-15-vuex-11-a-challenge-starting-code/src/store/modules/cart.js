export default {
  namespaced: true,
  state() {
    return { items: [], total: 0, qty: 0 };
  },
  getters: {
    cart(state) {
      return state;
    },
    products(state) {
      return state.items;
    },
    totalSum(state) {
      return state.total;
    },
    quantity(state) {
      return state.qty;
    },
  },
  mutations: {
    addProductToCart(state, payload) {
      const productInCartIndex = state.items.findIndex(
        (ci) => ci.productId === payload.id
      );
      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: payload.id,
          title: payload.title,
          image: payload.image,
          price: payload.price,
          qty: 1,
        };
        state.items.push(newItem);
      }
      state.qty++;
      state.total += payload.price;
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
  actions: {
    addProductToCart(context, payload) {
      const productId = payload.id;
      const products = context.rootGetters['product/products'];
      const product = products.find((prod) => prod.id === productId);
      context.commit('addProductToCart', product);
    },
    removeProductFromCart(context, payload) {
      context.commit('removeProductFromCart', payload);
    },
  },
};
