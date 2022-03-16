<template>
  <div style="width: 100%; height: 100%">
    <div class="parent_div1">
      <div style="width: 300px">
        <v-btn
          block
          height="55px"
          depressed
          style="
            background: #3f87ff;
            color: #fff;
            font-size: 20px;
            margin-bottom: 30px;
          "
        >
          kirish
        </v-btn>
        <v-btn
          block
          height="55px"
          depressed
          style="background: #3f87ff; color: #fff; font-size: 20px"
        >
          ro'yxatdan o'tish
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "personal-account-page",
};
</script>

<style lang="css">
.parent_div1 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
