import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faUser,
  faSquarePlus,
  faBasketShopping,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
library.add(faUserSecret, faUser, faSquarePlus, faBasketShopping, faTrash);
createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
