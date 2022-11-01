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

          <a
            style="margin-left: 30%; cursor: pointer"
            @click="addBasket(food_name, product_id)"
          >
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
import appAxios from "@/utils/appAxios";
export default {
  props: ["food_name", "food_price", "product_photo", "product_id"],
  data() {
    return {
      urun_id: this.product_id,
      urun_name: this.food_name,
    };
  },

  computed: {
    ...mapState(["basket"]),
  },

  methods: {
    addBasket(product_name, product_id) {
      this.$store.dispatch("addBasket");

      const BasketObject = {
        product_id: product_id,
        product_name: product_name,
      };
      appAxios({
        url: "/basket",
        method: "POST",
        data: BasketObject,
      }).then((basket_response) => {
        console.log(basket_response);

        console.log(product_id, product_name);
      });
    },
  },
};
</script>
<style></style>
