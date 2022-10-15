<template>
  <div>
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">{{ food_name }}</h5>
        <p class="card-text">{{ food_price }} TL</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["food_name", "food_price"],
};
</script>
<style></style>
