<template>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-xl-9 mx-auto">
          <div
            class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden"
          >
            <div class="card-img-2 d-none d-md-flex">
              <!-- Background image for card set in CSS! -->
            </div>
            <div class="card-body p-4 p-sm-5">
              <h5 class="card-title text-center mb-5 fw-light fs-5">Login</h5>

              <input
                type="email"
                class="form-control mb-3"
                required
                placeholder="Email"
                v-model="email"
                name="email"
              />

              <input
                type="password"
                class="form-control mb-3"
                required
                placeholder="Password"
                v-model="password"
                name="password"
              />

              <div class="d-grid mb-2">
                <button
                  class="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                  @click="Login"
                >
                  Login
                </button>
              </div>
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
      email: "",
      password: "",
    };
  },
  methods: {
    Login() {
      const LoginObject = {
        email: this.email,
        password: this.password,
      };

      appAxios({
        url: "/login",
        method: "POST",
        data: LoginObject,
      })
        .then((login_response) => {
          console.log(login_response.data.token.substr(3));

          localStorage.setItem(
            "userToken",
            login_response.data.token.substr(3)
          );
        })
        .then((data_response) => {
          //console.log(data_response);
        });
    },
  },
};
</script>
