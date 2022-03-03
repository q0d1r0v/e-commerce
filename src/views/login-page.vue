<template>
  <div>
    <div
      style="
        width: 100%;
        height: 100%;
        position: -webkit-sticky;
        position: sticky;
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      <div
        style="
          width: 600px;
          height: 500px;
          border-radius: 10px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        <div>
          <h1 class="mb-5" style="text-align: center">Log In</h1>
          <div style="width: 400px">
            <v-form lazy-validation ref="form" v-model="form">
              <v-text-field
                clearable
                placeholder="Username"
                v-model="form_data.username"
                outlined
                :rules="[(v) => !!v || 'Ushbu bo\'lim to\'ldirilishi shart!']"
              />
              <v-text-field
                v-if="!is_password"
                v-model="form_data.password"
                :rules="[(v) => !!v || 'Ushbu bo\'lim to\'ldirilishi shart!']"
                append-icon="mdi-eye-off"
                @click:append="is_password = !is_password"
                type="password"
                placeholder="Password"
                outlined
              />
              <v-text-field
                v-else
                v-model="form_data.password"
                @click:append="is_password = !is_password"
                placeholder="Password"
                outlined
                append-icon="mdi-eye"
                :rules="[(v) => !!v || 'Ushbu bo\'lim to\'ldirilishi shart!']"
              />
            </v-form>
            <v-btn
              @click="sendForm()"
              style="background: #edf2f5"
              depressed
              block
              height="60px"
              >login</v-btn
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../axios";
export default {
  name: "login-page",

  data() {
    return {
      is_password: false,
      form: true,
      form_data: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    async sendForm() {
      if (this.form && this.form_data.username && this.form_data.password) {
        const response = await axios.post("/");
        console.log(response);
      } else {
        this.$toast.warning("Iltimos ma'lumotlarni to'liq kiriting!");
      }
    },
  },
};
</script>

<style scoped></style>
