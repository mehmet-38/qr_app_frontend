import appAxios from "@/utils/appAxios";
export default {
  state: {
    basketList: null,
  },
  getters: {
    basketGetters: (state) => {
      return state.basketList;
    },
  },
  mutations: {
    basketList(state, item) {
      state.basketList = item;
    },
    deleteBasketItem(state, basket_id) {
      state.basketList = state.basketList.filter(
        (item) => item.basket_id !== basket_id
      );
    },
  },
  actions: {
    getBasket(context) {
      appAxios({
        url: "/basket",
        method: "GET",
      }).then((response) => {
        context.commit("basketList", response.data);
      });
    },
    deleteItem(context, basket_id) {
      context.commit("deleteBasketItem", basket_id);
    },
  },
  namespaced: true,
};
