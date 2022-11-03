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
                      <a href="#" class="text-danger"
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
export default {
  props: {
    open: Boolean,
    basketGetters: Object,
  },
};
</script>
<style></style>
