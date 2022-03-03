<template>
  <div>
    <div class="pa-3">
      <v-data-table :headers="headers" hide-default-footer disable-pagination />
    </div>
  </div>
</template>

<script>
export default {
  name: "users-page",

  data() {
    return {
      headers: [
        {
          text: "ID",
          value: "id",
          align: "center",
        },
        {
          text: "Fullname",
          value: "fullname",
          align: "center",
        },
        {
          text: "Username",
          value: "username",
          align: "center",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
