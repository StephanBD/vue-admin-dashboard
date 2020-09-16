<!---------------------------- TEMPLATE ----------->
<template>
  <div
    class="toggle"
    @click="toggleDarkMode"
    :class="{ 'light-toggle': isDarkMode, 'dark-toggle': isDarkMode }"
  >
    <div
      class="toggle-switch"
      :class="{ 'toggle-left': !isDarkMode, 'toggle-right': isDarkMode }"
    >
      <img src="@/assets/sun.png" alt="" v-if="!isDarkMode" />
      <img src="@/assets/moon.png" alt="" v-else />
    </div>
  </div>
</template>
<!----------------------------- SCRIPTS ---------->
<script>
// import axios from 'axios';
export default {
  name: "ThemeSwitch",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },

  methods: {
    toggleDarkMode() {
      // this.isDarkMode = !this.isDarkMode;
      // document.body.style.background = this.isDarkMode ? "#212c4f" : "#f0f3f5";
      this.$store.commit("toggleDarkMode");
    },
  },
};
</script>
<!----------------------------- STYLES ---------->
<style scoped lang="scss">
.toggle {
  border-radius: 10px;
  width: 175px;
  box-sizing: border-box;
  margin: 50px auto;
  display: flex;
}
.light-toggle {
  background: linear-gradient(360deg, #f7fcfc18 0%, #fafcfa57 100%);
  // background: linear-gradient(346.78deg, red 0%, yellow 100%);
  border: 1px solid rgba(0, 0, 0, 0.4);
  box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.1);
}
.dark-toggle {
  background: linear-gradient(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: inset 0px 5px 10px rgba(255, 255, 255, 0.1);
}
img {
  height: 20px;
}
.toggle-switch {
  border-radius: 8px;
  margin: 2px;
  padding: 15px 35px;
}
.toggle-left {
  transform: translateX(0);
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.toggle-right {
  transform: translateX(85%);
  background: $dark-blue;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
