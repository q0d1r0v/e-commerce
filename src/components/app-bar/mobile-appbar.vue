<template>
  <div>
    <div class="parent_div">
      <div>
        <v-btn to="/" icon large class="mx-3 pa-1">
          <v-img
            class="mb-1"
            src="../../assets/mobile-app-bar-icons/home-noactive.svg"
          />
        </v-btn>
        <v-btn to="/catolog" icon large class="mx-3 pa-1">
          <v-img src="../../assets/mobile-app-bar-icons/search-noactive.svg" />
        </v-btn>
        <v-btn to="/favourite" icon large class="mx-3 pa-1">
          <v-img
            src="../../assets/mobile-app-bar-icons/favorite-noactive.svg"
          />
        </v-btn>
        <v-btn to="/add-to-cart" icon large class="mx-3 pa-1">
          <v-img src="../../assets/mobile-app-bar-icons/bag-noactive.svg" />
        </v-btn>
        <v-btn to="/personal-account" icon large class="mx-3 pa-1">
          <v-img src="../../assets/mobile-app-bar-icons/user-noactive.svg" />
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mobile-appbar",
};
</script>

<style lang="css">
.parent_div {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #327dff;
  box-shadow: 0px 0px 18px -5px #005efe;
  color: #fff;
}
</style>
