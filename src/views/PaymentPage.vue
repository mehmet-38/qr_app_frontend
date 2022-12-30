<template lang="">
  <NavBar />
  <!-- This script got from frontendfreecode.com -->
  <div class="row mt-4">
    <div class="col-lg-6 mx-auto">
      <div class="card">
        <div class="card-header">
          <!-- End -->
          <!-- Credit card form content -->
          <div class="tab-content">
            <!-- credit card info-->
            <div id="credit-card" class="tab-pane fade show active pt-3">
              <form role="form">
                <div class="form-group">
                  <label for="username">
                    <h6>İsim Soyisim</h6>
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Kart Sahibi"
                    required
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="cardNumber">
                    <h6>Kart Numarası</h6>
                  </label>
                  <div class="input-group">
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Kart Numarası"
                      class="form-control"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-8">
                    <div class="form-group">
                      <label>
                        <span class="hidden-xs">
                          <h6>Tarih</h6>
                        </span>
                      </label>
                      <div class="input-group">
                        <input
                          type="number"
                          placeholder="MM"
                          name=""
                          class="form-control"
                          required
                        />
                        <input
                          type="number"
                          placeholder="YY"
                          name=""
                          class="form-control"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group mb-4">
                      <label
                        data-toggle="tooltip"
                        title="Three digit CV code on the back of your card"
                      >
                        <h6>
                          CVV <i class="fa fa-question-circle d-inline"></i>
                        </h6>
                      </label>
                      <input type="text" required class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <button
                    type="button"
                    class="subscribe btn btn-primary btn-block shadow-sm"
                    @click="Payment"
                  >
                    Ödeme Onayla
                  </button>
                </div>
              </form>
            </div>
            <!-- End -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import appAxios from "@/utils/appAxios";
export default {
  components: { NavBar },
  props: ["isPaid", "id"],
  data() {
    return {
      changeIsPaid: 1,
    };
  },
  methods: {
    Payment() {
      appAxios({
        url: "isPaid",
        method: "POST",
        data: {
          isPaid: this.changeIsPaid,
          id: this.id,
        },
      }).then((paid_response) => {
        console.log(paid_response);
      });
    },
  },
};
</script>
<style lang=""></style>
