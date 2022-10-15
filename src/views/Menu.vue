<template>
  <NavBar />
  <div>
    <h3>Menuler</h3>
    <div class="container mt-5">
      <div class="row">
        <div
          class="col-lg-3 col-md-6 col-sm-3"
          v-for="item in menu"
          :key="item"
        >
          <MenuCard
            v-bind:food_name="item.food_name"
            v-bind:food_price="item.food_price"
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
export default {
  components: { MenuCard, NavBar },
  computed: {
    ...mapState("menu", ["menu"]),
  },
  mounted() {
    this.$store.dispatch("menu/getMenu", this.$route.params.menus_id);
  },
};
</script>
<style></style>
