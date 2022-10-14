<template>
  <div>
    <div class="row">
      <div class="col-12">
        <NavBar />
      </div>

      <div class="col-12" style="margin-top: 5%">
        <RestaurantCard />
      </div>
      <!--
      <div class="col-12">
        <Carousel />
      </div>-->
    </div>
  </div>
  <!--
  <ul>
    <li v-for="rest in restList" :key="rest">
      <img style="width: 20%" :src="`http://localhost/${rest.rest_photo}`" />
    </li>
  </ul>-->
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Carousel from "@/components/Carousel.vue";
import RestaurantCard from "../components/RestaurantCard.vue";

export default {
  components: {
    NavBar,
    Carousel,
    RestaurantCard,
  },

  methods: {
    getRestData() {},
  },
};
</script>
