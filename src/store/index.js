import { createStore } from "vuex";
import menu from "./modules/menu";
import restaurantList from "./modules/restaurantList";

import appAxios from "@/utils/appAxios";
export default createStore({
  state: {
    basket: 0,
  },
  getters: {},
  mutations: {
    basket(state) {
      state.basket++;
    },
  },
  actions: {
    addBasket(context) {
      context.commit("basket");
    },
  },
  modules: {
    menu,
    restaurantList,
  },
});
