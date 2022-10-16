<template>
  <div>
    <div
      class="card border-0 shadow-sm rounded-3 overflow-hidden"
      style="width: 18rem"
    >
      <div class="card-body">
        <h5 class="card-title">{{ food_name }}</h5>
        <div class="d-flex justify-content-between">
          <p class="card-text">{{ food_price }} TL</p>

          <a style="margin-left: 30%; cursor: pointer" @click="addBasket">
            <font-awesome-icon
              class="font-icon"
              icon=" fa-solid fa-square-plus "
            />
          </a>
          <img
            style="width: 40%"
            :src="`http://localhost/${product_photo}`"
            class="card-img img-responsive"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: ["food_name", "food_price", "product_photo"],
  data() {
    return {};
  },

  computed: {
    ...mapState(["basket"]),
  },

  methods: {
    addBasket() {
      this.$store.dispatch("addBasket");
    },
  },
};
</script>
<style></style>
