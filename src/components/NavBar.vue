<template>
  <div>
    <BasketModal :open="showModal" :basketGetters="basketGetters">
    </BasketModal>
    <nav class="navbar navbar-light" id="nav-bar">
      <a class="navbar-brand ms-5" href="/">
        <img
          src="@/assets/clipart1944380.png"
          alt=""
          width="50"
          height="50"
          class="d-inline-block align-text-top"
        />
      </a>
      <ul class="nav" style="margin-right: 5%">
        <li class="nav-item">
          <a
            class="nav-link active text-dark fw-bold position-relative"
            style="cursor: pointer"
            @click="onModal"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            ><font-awesome-icon
              icon="fa-solid fa-basket-shopping"
              class="me-2 font-icon"
            />
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              v-if="basketGetters?.length > 0"
            >
              {{ basketGetters?.length }}
            </span>
          </a>
        </li>

        <li class="nav-item ms-4" v-if="!localStorage">
          <a
            class="nav-link active text-dark fw-bold"
            aria-current="page"
            href="/login"
            ><font-awesome-icon icon="fa-solid fa-user" class="me-2" />GIRIS
            YAP</a
          >
        </li>
        <li class="nav-item ms-4" v-if="localStorage">
          <a
            class="nav-link active text-dark fw-bold"
            aria-current="page"
            style="cursor: pointer"
            href="/login"
            @click="signOut"
            ><font-awesome-icon icon="fa-solid fa-user" class="me-2" />CIKIS
            YAP</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import BasketModal from "@/components/BasketModal.vue";
export default {
  computed: {
    ...mapState(["basket"]),
    ...mapGetters("basketList", ["basketGetters"]),
  },
  components: { BasketModal },

  data() {
    return {
      showModal: false,
      localStorage: localStorage.getItem("userToken"),
    };
  },
  created() {
    this.$store.dispatch("basketList/getBasket");
  },
  methods: {
    onModal() {
      this.showModal = true;
      this.$store.dispatch("basketList/getBasket");
    },
    signOut() {
      localStorage.clear();
    },
  },
};
</script>
<style></style>
