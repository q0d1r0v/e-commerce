<template>
  <div>
    <h1>this is items page</h1>
    {{ item }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "items-page",

  computed: {
    ...mapGetters({ item: "items/item" }),
  },
};
</script>

<style scoped></style>
