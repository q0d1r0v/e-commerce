<template>
  <div>
    <div>
      <v-row class="ma-0 pa-0">
        <v-col cols="12">
          <div
            style="
              background-color: #fff;
              border-radius: 10px;
              height: 300px;
              cursor: pointer;
            "
            class="ma-3"
          ></div>
        </v-col>
        <v-col cols="12" sm="4" md="3" v-for="(item, id) of items" :key="id">
          <div
            style="
              background-color: #fff;
              border-radius: 10px;
              height: 200px;
              cursor: pointer;
            "
            class="ma-3"
          ></div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  components: {},

  data() {
    return {
      items: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 3,
        },
      ],
    };
  },
};
</script>
