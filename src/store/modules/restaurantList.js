import appAxios from "@/utils/appAxios";
export default {
  state: {
    restList: null,
  },
  mutations: {
    RestList(state, item) {
      state.restList = item;
    },
  },
  actions: {
    getRestList(context, rest_id) {
      appAxios({
        url: `/rest/${rest_id}`,
        method: "GET",
      }).then((response) => {
        context.commit("RestList", response.data);
      });
    },
  },
  namespaced: true,
};
