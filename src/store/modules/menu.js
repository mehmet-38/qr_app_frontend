import appAxios from "@/utils/appAxios";
export default {
  state: {
    menu: null,
  },
  getters: {},
  mutations: {
    menu(state, item) {
      state.menu = item;
    },
  },
  actions: {
    getMenu(context, menu_id) {
      appAxios({
        url: `/menus/${menu_id}`,
        method: "GET",
      }).then((menu_response) => {
        context.commit("menu", menu_response.data);
      });
    },
  },
  namespaced: true,
};
