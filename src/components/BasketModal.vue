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
            <div class="row">
              <div class="col-9" style="display: flex; justify-content: center">
                <h5>Masa numarası seciniz</h5>
              </div>
              <div class="col-3">
                <select
                  class="form-select form-select-sm"
                  aria-label="size 3 select example"
                  v-model="tableNumber"
                >
                  <option v-for="count in tableCount" :key="count">
                    {{ count }}
                  </option>
                </select>
              </div>
            </div>

            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">İsim</th>
                    <th scope="col">Fiyat</th>
                    <th scope="col">Adet</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in basketGetters" :key="item.product_id">
                    <td scope="row" class="border-0">
                      <div class="p-2">
                        <img
                          :src="`http://localhost/${item.product_photo}`"
                          alt=""
                          width="70"
                          class="img-fluid rounded shadow-sm"
                        />
                        <div class="ms-2 d-inline-block align-middle">
                          <h5 class="mb-0">{{ item.product_name }}</h5>
                        </div>
                      </div>
                    </td>
                    <td class="border-0 align-middle">
                      <strong>{{ item.food_price }}</strong>
                    </td>
                    <td class="border-0 align-middle"><strong>3</strong></td>
                    <td class="border-0 align-middle">
                      <a
                        href="#"
                        class="text-danger"
                        @click="deleteRow(item.basket_id)"
                        ><font-awesome-icon
                          icon="fa-solid fa-trash"
                          class="me-2"
                      /></a>
                    </td>
                  </tr>
                </tbody>
              </table>
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
            <button type="button" class="btn btn-primary" @click="takeOrder">
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
  data() {
    return {
      orderPrice: null,
      tableNumber: null,
      orderProduct: [],
      isPaid: 0,
    };
  },
  props: {
    open: Boolean,
    basketGetters: Object,
    tableCount: Number,
  },

  methods: {
    deleteRow(basket_id) {
      //this.$store.dispatch("basketList/deleteItem", basket_id);

      appAxios({
        url: `/basket/${basket_id}`,
        method: "DELETE",
      }).then((delete_response) => {
        console.log(delete_response.data);
        this.$store.dispatch("basketList/deleteItem", basket_id);
      });
    },
    async takeOrder() {
      this.basketGetters.forEach((element) => {
        this.orderPrice += element.food_price;
        this.orderProduct.push(element.product_name);
      });

      const orderObject = {
        table_number: this.tableNumber,
        order_price: this.orderPrice,
        rest_id: this.$route.params.rest_id,
      };

      await appAxios({
        url: "/order",
        method: "POST",
        data: orderObject,
      }).then((order_response) => {
        // console.log(order_response.data.order_id);
        appAxios({
          url: "/order-detail",
          method: "POST",
          data: {
            order_id: order_response.data.order_id,
            product_name: this.orderProduct.toString(),
            isPaid: this.isPaid,
          },
        }).then((order_detail_response) => {
          console.log(order_detail_response);
        });
      });

      appAxios({
        url: "/basket",
        method: "DELETE",
      }).then((delete_response) => {
        //console.log(delete_response.data);
        this.$store.commit("basketList/basketList", null);
      });
    },
  },
};
</script>
<style></style>
