<template>
  <div class="container mt-5">
    <div class="row">
      <h3 class="rest-text">Restorantlar</h3>
      <div
        class="col-lg-3 col-md-6 col-sm-3 rest-card"
        v-for="rest in restList"
        :key="rest"
      >
        <div class="card" style="width: 18rem">
          <a
            style="cursor: pointer"
            class="img-responsive"
            @click="clickRestaurant(rest.menus_id, rest.rest_id)"
          >
            <img
              style="width: 100%; height: 150px"
              :src="`http://localhost/${rest.rest_photo}`"
              class="card-img-top"
          /></a>
          <div class="card-body">
            <h5 class="card-title">{{ rest.rest_name }}</h5>
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
      restList: [],
    };
  },

  created() {
    appAxios({
      url: "/rest",
      method: "GET",
    }).then((response) => {
      //console.log(response.data);
      this.restList = response.data;
    });
  },

  methods: {
    clickRestaurant(menus_id, id) {
      if (!localStorage.getItem("userToken")) {
        this.$router.push({
          name: "login",
        });
      } else {
        //alert("giris yapılısınız");
        this.$router.push({
          name: "menu",
          params: {
            menus_id: menus_id,
            rest_id: id,
          },
        });
        //console.log(id);
      }
    },
  },
};
</script>
