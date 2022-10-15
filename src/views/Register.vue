<template>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-xl-9 mx-auto">
          <div
            class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden"
          >
            <div class="card-img-left d-none d-md-flex">
              <!-- Background image for card set in CSS! -->
            </div>
            <div class="card-body p-4 p-sm-5">
              <h5 class="card-title text-center mb-5 fw-light fs-5">
                Register
              </h5>

              <input
                type="text"
                class="form-control mb-3"
                placeholder="Name"
                required
                autofocus
                v-model="name"
                name="name"
              />

              <input
                type="text"
                class="form-control mb-3"
                required
                placeholder="surname"
                v-model="surname"
                name="surname"
              />

              <hr />

              <input
                type="email"
                class="form-control mb-3"
                required
                placeholder="Email"
                v-model="email"
                name="email"
              />

              <div class="row">
                <div class="col">
                  <input
                    type="password"
                    class="form-control mb-3"
                    required
                    placeholder="Password"
                    v-model="password"
                    name="password"
                  />
                </div>
                <div class="col">
                  <input
                    type="password"
                    class="form-control mb-3"
                    required
                    placeholder="Confirm Password"
                    v-model="ConfirmPassword"
                    name="ConfirmPassword"
                  />
                </div>
              </div>

              <div class="d-grid mb-2">
                <button
                  class="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                  @click="Register"
                >
                  Register
                </button>
              </div>

              <a class="d-block text-center mt-2 small" @click="GoLogin"
                >Have an account? Sign In</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
<script>
import appAxios from "@/utils/appAxios";

export default {
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      password: "",
      ConfirmPassword: "",
    };
  },
  methods: {
    GoLogin() {
      this.$router.push({
        name: "login",
      });
    },

    Register() {
      const registerObject = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
      };
      if (this.password == this.ConfirmPassword) {
        appAxios({
          url: "/register",
          method: "POST",
          data: registerObject,
        }).then((response) => {
          console.log(response);
          alert("Kayıt işlemi başarılı");
          this.$router.push({
            name: "login",
          });
        });
      } else alert("Sifreleri kontrol ediniz");
    },
  },
};
</script>
