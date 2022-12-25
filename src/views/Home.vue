<template>
  <NavBar />
  <RestaurantCard />
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
