<template lang="">
  <NavBar />
  <div class="container mt-4" style="display: flex; justify-content: center">
    <div class="card w-75">
      <div class="card-header">Siparişlerim</div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>Ürünler</th>
              <th>Fiyat</th>
              <th>İşlem</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orderList" :key="order">
              <td>{{ order.product_name }}</td>
              <td>{{ order.order_price }} TL</td>
              <td>
                <button
                  :class="
                    order.isPaid == 1 ? 'btn btn-danger' : 'btn btn-success'
                  "
                  @click="goPaymentPage(order.isPaid, order.id)"
                >
                  Ödeme Yap
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import appAxios from "@/utils/appAxios";
export default {
  components: { NavBar },
  data() {
    return {
      orderList: [],
    };
  },
  mounted() {
    appAxios({
      url: "/order",
      method: "GET",
    }).then((order_response) => {
      this.orderList = order_response.data.orders;
    });
  },
  methods: {
    goPaymentPage(isPaid, id) {
      if (isPaid == 0) {
        this.$router.push({
          name: "payment",
          params: { isPaid: isPaid, id: id },
        });
      }

      //console.log(isPaid);
    },
  },
};
</script>
<style lang=""></style>
