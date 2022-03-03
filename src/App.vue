<template>
  <v-app>
    <v-app-bar
      app
      style="background: #fff; color: #505050; max-width: 1920px; margin: auto"
      class="elevation-0"
    >
      <h1>Dashboard-app</h1>
      <v-spacer></v-spacer>
      <div style="width: 250px" class="mr-5">
        <v-text-field
          class="mt-6"
          dense
          placeholder="Search..."
          outlined
          append-icon="mdi-magnify"
        />
      </div>
      <v-btn to="/login" text icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view
        style="
          background: #edf2f5;
          height: 100%;
          max-width: 1920px;
          margin: auto;
          color: #505050;
        "
      />
    </v-main>

    <div>
      <v-navigation-drawer
        app
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
      >
        <v-list-item
          style="display: flex; align-items: center; justify-content: center"
        >
          <v-btn v-if="!mini" block class="elevation-0" @click="mini = !mini">
            <v-icon color="color: #505050;"> mdi-arrow-left </v-icon>
          </v-btn>

          <v-btn v-if="mini" class="elevation-0" @click="mini = !mini">
            <v-icon color="color: #505050;"> mdi-arrow-right </v-icon>
          </v-btn>
        </v-list-item>

        <v-divider />

        <v-list dense>
          <v-list-item
            v-for="(item, id) of items"
            :key="id"
            :to="item.path"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title> {{ item.title }} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: true,
    mini: true,

    items: [
      {
        id: 1,
        title: "Home",
        icon: "mdi-home",
        path: "/",
      },
      {
        id: 2,
        title: "Users",
        icon: "mdi-account-multiple-outline",
        path: "/users",
      },
    ],
  }),
};
</script>

<style></style>
