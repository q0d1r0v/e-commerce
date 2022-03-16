<template>
  <div>
    <div class="top-parent-div">
      <div style="display: flex; align-items: center">
        <v-btn
          @click="$store.dispatch('navigationDrawer/showDrawer')"
          icon
          large
          class="mx-2 pa-3"
        >
          <v-img src="../../assets/appbar-icons/catolog.svg"></v-img>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top-mobile-appbar",
};
</script>

<style lang="css">
.top-parent-div {
  width: 100%;
  height: 70px;
  display: flex;
  background: #327dff;
  box-shadow: 0px 0px 18px 0px #005efe;
  color: #fff;
}
</style>
