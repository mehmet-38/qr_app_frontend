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
  },
  actions: {
    getBasket(context) {
      appAxios({
        url: "/basket",
        method: "GET",
      }).then((response) => {
        context.commit("basketList", response.data);

        //console.log(response.data);
        //this.basketList = response.data;
        //console.log("basketList", this.basketList);
      });
    },
  },
  namespaced: true,
};
