<template>
  <div v-show="open">
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Sepet</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row" v-for="item in basketList" :key="item">
              <div class="col">{{ item.product_name }}</div>
              <div class="col">{{ item.food_price }}</div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Siparişi Onayla
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import appAxios from "@/utils/appAxios";
export default {
  props: {
    open: Boolean,
  },
  data() {
    return {
      basketList: [],
    };
  },
  mounted() {
    appAxios({
      url: "/basket",
      method: "GET",
    }).then((response) => {
      console.log(response.data);
      this.basketList = response.data;
      console.log("basketList", this.basketList);
    });
  },
};
</script>
<style></style>
