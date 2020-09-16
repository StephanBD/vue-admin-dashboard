<!---------------------------- TEMPLATE ----------->
<template>
  <transition name="slide-in-right" enter-active-class="animate__slideInRight">
    <div
      v-show="show"
      class="request"
      :class="{ 'light-request': isDarkMode, 'dark-request': !isDarkMode }"
    >
      Don´t have a Design+Code HQ account?
      <router-link to="/request">Request an account</router-link>
    </div>
  </transition>
</template>
<!----------------------------- SCRIPTS ---------->
<script>
// import axios from 'axios';
export default {
  name: "RequestAccount",
  // components: {},
  //	props: [''],
  data() {
    return {
      show: false,
    };
  },

  mounted() {
    this.show = true;
  },

  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>
<!----------------------------- STYLES ---------->
<style scoped lang="scss">
.request {
  position: absolute;
  top: 40px;
  right: 40px;
  color: rgba(255, 255, 255, 0.3);
}
.light-request {
  color: rgba(255, 255, 255, 0.3);
  a {
    color: #fff;
  }
}
.dark-request {
  color: rgba(0, 0, 0, 0.3);
  a {
    color: #000;
  }
}
</style>
