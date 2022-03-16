<template>
  <div style="width: 100%; height: 100%">
    <div
      style="
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      <div style="width: 300px">
        <v-img src="../../assets/not-found/not-found.png" />
        <v-btn
          style="background: #3f87ff; color: #fff; border-radius: 10px"
          height="60px"
          block
          depressed
          to="/"
        >
          bosh sahifaga qaytish
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "not-fount-page",
};
</script>

<style scoped></style>
