<template>
  <NavBar :tableCount="tableCount" />
  <!-- <RestaurantInfo /> -->

  <div>
    <div class="container mt-5">
      <div class="row">
        <h3 class="menu-text">Menuler</h3>
        <div
          class="col-lg-3 col-md-6 col-sm-3 menu-card"
          v-for="item in menu"
          :key="item"
        >
          <MenuCard
            v-bind:food_name="item.food_name"
            v-bind:food_price="item.food_price"
            v-bind:product_photo="item.product_photo"
            v-bind:product_id="item.product_id"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MenuCard from "@/components/MenuCard.vue";
import { mapState } from "vuex";
import NavBar from "@/components/NavBar.vue";
import RestaurantInfo from "@/components/RestaurantInfo.vue";
import BasketModal from "@/components/BasketModal.vue";
import appAxios from "@/utils/appAxios";

export default {
  components: { MenuCard, NavBar, RestaurantInfo, BasketModal },
  data() {
    return {
      tableCount: null,
    };
  },

  computed: {
    ...mapState("menu", ["menu"]),
  },
  methods: {},
  mounted() {
    this.$store.dispatch("menu/getMenu", this.$route.params.menus_id);
    //console.log(this.$route.params.rest_id);
    appAxios({
      url: `/rest-table/${this.$route.params.rest_id}`,
      method: "GET",
    }).then((table_reponse) => {
      this.tableCount = table_reponse.data.table_count;
    });
  },
};
</script>
