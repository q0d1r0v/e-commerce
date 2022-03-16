<template>
  <div>
    <div class="parent_div">
      <v-card to="/">
        <div>
          <div class="logo_child_div">
            <v-img src="../../assets/appbar-logo/ecommerce-logo.png"></v-img>
          </div>
          <logo />
        </div>
      </v-card>
      <div class="catolog" @click="showDrawer()">
        <span>MENU</span>
        <div class="ml-3">
          <v-img src="../../assets/appbar-icons/catolog.svg"></v-img>
        </div>
      </div>
      <div class="buttons">
        <div style="width: 200px">
          <v-text-field
            outlined
            hide-details
            label="Qidirish..."
            style="
              border-radius: 10px;
              border: 1px solid #fff;
              color: #fff;
              background: #fff;
              margin-right: 3px;
            "
            append-icon="mdi-magnify"
            dense
          />
        </div>
        <v-btn to="/favourite" icon large dark class="mx-2 pa-1">
          <v-img
            src="../../assets/mobile-app-bar-icons/favorite-noactive.svg"
          />
        </v-btn>
        <v-btn to="/add-to-cart" icon large dark class="mr-2 pa-1">
          <v-img src="../../assets/appbar-icons/bag-noactive.svg" />
        </v-btn>
        <v-btn to="/personal-account" icon large class="pa-1">
          <v-img src="../../assets/appbar-icons/user-noactive.svg" />
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
const logo = () => import("../../assets/logo.png");
export default {
  name: "desktop-appbar",
  components: { logo },

  computed: {},
  methods: {
    showDrawer() {
      this.$store.dispatch("navigationDrawer/showDrawer");
    },
  },
};
</script>

<style lang="css">
.parent_div {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  background: #327dff;
  color: #fff;
  box-shadow: 0px 0px 18px -5px #005efe;
  -webkit-user-select: none;
  padding: 10px;
}
.logo {
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  cursor: pointer;
}
.logo_child_div {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 50px;
  padding: 10px;
  border-radius: 10px;
}
.catolog {
  cursor: pointer;
  border: 1px solid #fff;
  width: 182px;
  height: 45px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  margin-left: 100px;
  transition: all 0.3s;
}
.catolog:active {
  background: #3f87ff;
}
.buttons {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
}
.search {
  width: 100%;
  height: 100%;
  border: 1px solid red;
}
</style>
