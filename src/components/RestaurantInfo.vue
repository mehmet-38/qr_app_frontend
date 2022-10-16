<template>
  <div
    class="d-flex justify-content-center"
    v-for="rest in restList"
    :key="rest"
  >
    <div class="card mb-3" style="width: 80%">
      <div
        style="
          height: 300px;
          padding-bottom: 0;
          position: relative;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        "
      >
        <img
          :src="`http://localhost/${rest.rest_photo}`"
          class="card-img-top"
          style="
            bottom: 0;
            height: 100%;
            left: 0;
            object-fit: cover;
            position: absolute;
            right: 0;
            top: 0;
            width: 100%;
          "
        />
      </div>

      <div class="card-body">
        <h5 class="card-title">{{ rest.rest_name }}</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      restId: this.$route.params.rest_id,
    };
  },
  computed: {
    ...mapState("restaurantList", ["restList"]),
  },

  mounted() {
    this.$store.dispatch("restaurantList/getRestList", this.restId);
    console.log("rest id ", this.$route.params.rest_id);
  },
};
</script>
<style></style>
