<!---------------------------- TEMPLATE ----------->
<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <RequestAccount />
    <div class="login">
      <img src="@/assets/logo-m.png" alt="" v-show="isDarkMode" />
      <img src="@/assets/logo1.png" alt="" v-show="!isDarkMode" />
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Sign into Design+Code HQ
      </h4>
      <input
        :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
        type="email"
        placeholder="Email"
      />

      <button>Send Email</button>
      <router-link
        to="/recover"
        :class="{ 'white-link': isDarkMode, 'black-link': !isDarkMode }"
        >Forgot your password</router-link
      >
      <ThemeSwitch />
    </div>
  </div>
</template>
<!----------------------------- SCRIPTS ---------->
<script>
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";
export default {
  name: "Recover",
  components: { RequestAccount, ThemeSwitch },
  //	props: [''],

  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>
<!----------------------------- STYLES ---------->
<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}
.login {
  width: 400px;
}
img {
  width: 150px;
}
</style>
