<template>
  <div>
    <v-navigation-drawer v-if="show" absolute permanent temporary width="100%">
      <div style="position: absolute; right: 10px; top: 20px">
        <v-btn
          @click="closeDrawer()"
          color="#fff"
          style="background: red; z-index: 1"
          small
          icon
          depressed
        >
          <v-icon small> mdi-close </v-icon>
        </v-btn>
      </div>
      <h1 style="font-size: 30px" class="ml-3 mt-3">Menu</h1>
      <div style="width: 100%; display: flex">
        <v-row style="display: flex" class="ma-0 pa-0">
          <v-col
            v-for="(item, id) of items"
            :key="id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card
              class="ma-0 pa-0"
              :style="
                item.id === item_id
                  ? 'border: 3px solid #454545; border-radius: 10px; background: #327dff'
                  : 'border-radius: 10px; box-shadow: none; display: flex'
              "
              :to="item.path"
              @click="showItem(item)"
            >
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: 100%;
                  height: 130px;
                  background: #327dff;
                  border-radius: 10px;
                  color: #fff;
                "
              >
                <span style="font-size: 25px; font-weight: bold">{{
                  item.title
                }}</span>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "nav-bar",

  computed: {
    ...mapGetters({ show: "navigationDrawer/show" }),
    ...mapGetters({ item_id: "items/item_id" }),
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Elektor jhozlari",
          path: "/items",
        },
        {
          id: 2,
          title: "Smartfonlar",
          path: "/items",
        },
        {
          id: 3,
          title: "Noutbuklar",
          path: "/items",
        },
        {
          id: 4,
          title: "Oshxona anjomlari",
          path: "/items",
        },
        {
          id: 5,
          title: "Sport anjomlari",
          path: "/items",
        },
        {
          id: 6,
          title: "Avto jhozlar anjomlari",
          path: "/items",
        },
      ],
    };
  },
  methods: {
    showItem(item) {
      this.$store.dispatch("items/changeItem", {
        data: item,
      });
      this.$store.dispatch("navigationDrawer/hideDrawer");
    },
    closeDrawer() {
      this.$store.dispatch("navigationDrawer/hideDrawer");
    },
  },
};
</script>

<style scoped></style>
