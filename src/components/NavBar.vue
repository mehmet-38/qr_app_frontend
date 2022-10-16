<template>
  <div>
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
          <a class="nav-link active text-dark fw-bold position-relative"
            ><font-awesome-icon
              icon="fa-solid fa-basket-shopping"
              class="me-2 font-icon"
            />
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              v-if="basket != 0"
            >
              {{ basket }}
            </span>
          </a>
        </li>
        <li class="nav-item ms-4">
          <a
            class="nav-link active text-dark fw-bold"
            aria-current="page"
            href="/register"
            ><font-awesome-icon icon="fa-solid fa-user" class="me-2" />GIRIS
            YAP</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["basket"]),
  },
};
</script>
<style></style>
