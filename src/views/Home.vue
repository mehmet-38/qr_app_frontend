<template>
  <NavBar />
  <RestaurantCard />

  <!--
      <div class="col-12">
        <Carousel />
      </div>-->

  <!--
  <ul>
    <li v-for="rest in restList" :key="rest">
      <img style="width: 20%" :src="`http://localhost/${rest.rest_photo}`" />
    </li>
  </ul>-->
</template>
<script>
import NavBar from "@/components/NavBar.vue";

import RestaurantCard from "../components/RestaurantCard.vue";

export default {
  components: {
    NavBar,

    RestaurantCard,
  },
};
</script>
