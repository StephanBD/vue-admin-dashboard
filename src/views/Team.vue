<!---------------------------- TEMPLATE ----------->
<template>
  <div class="container">
    <h2>Team</h2>
    <div class="cards">
      <transition appear="" appear-active-class="animate__flipInX">
        <a
          href="#"
          class="card card-1"
          :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
        >
          <div
            class="card-header"
            :class="{
              'light-header': !isDarkMode,
              'dark-header': isDarkMode,
            }"
          >
            <img src="@/assets/slack.png" />
          </div>
          <h3 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">
            Slack
          </h3>
          <p :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">
            Messagin app for all team communication
          </p>
        </a>
      </transition>
      <transition appear="" appear-active-class="animate__flipInX">
        <a
          href="#"
          class="card card-2"
          :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
        >
          <div
            class="card-header"
            :class="{
              'light-header': !isDarkMode,
              'dark-header': isDarkMode,
            }"
          >
            <img src="@/assets/notion.png" />
          </div>
          <h3 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">
            notion
          </h3>
          <p :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">
            All in one space
          </p></a
        >
      </transition>
      <transition appear="" appear-active-class="animate__flipInX">
        <a
          href="#"
          class="card card-3"
          :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
        >
          <div
            class="card-header"
            :class="{
              'light-header': !isDarkMode,
              'dark-header': isDarkMode,
            }"
          >
            <img src="@/assets/figma.svg" />
          </div>
          <h3 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">
            figma
          </h3>
          <p :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">
            Collaboratibe design tool
          </p></a
        >
      </transition>
      <transition appear="" appear-active-class="animate__flipInX">
        <a
          href="#"
          class="card card-4"
          :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
        >
          <div
            class="card-header"
            :class="{
              'light-header': !isDarkMode,
              'dark-header': isDarkMode,
            }"
          >
            <img src="@/assets/contentful.png" />
          </div>
          <h3 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">
            contentful
          </h3>
          <p :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">
            Content managemt system
          </p></a
        >
      </transition>
      <transition appear="" appear-active-class="animate__flipInX">
        <a
          href="#"
          class="card card-5"
          :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
        >
          <div
            class="card-header"
            :class="{
              'light-header': !isDarkMode,
              'dark-header': isDarkMode,
            }"
          >
            <img src="@/assets/dropbox.png" />
          </div>
          <h3 :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">
            dropbox
          </h3>
          <p :class="{ 'light-text': !isDarkMode, 'dark-text': isDarkMode }">
            Storage space in the cloud
          </p></a
        >
      </transition>
    </div>
  </div>
</template>
<!----------------------------- SCRIPTS ---------->
<script>
// import axios from 'axios';
export default {
  name: "Team",
  // components: {},
  //	props: [''],
  data() {
    return {};
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  //	methods: {},
};
</script>
<!----------------------------- STYLES ---------->
<style scoped lang="scss">
.container {
  margin-left: 25px;
}
h2 {
  @include heading-2;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
}
.card {
  height: 400px;
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  margin: 20px;
}
.card-1 {
  animation-delay: 0s;
}
.card-2 {
  animation-delay: 0.5s;
}
.card-3 {
  animation-delay: 1s;
}
.card-4 {
  animation-delay: 1.5s;
}
.card-5 {
  animation-delay: 2s;
}
.light-card {
  background: $white;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  &:hover {
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.35);
  }
}
.dark-card {
  background: $super-dark-blue;
  box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.15);
  &:hover {
    box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.35);
  }
}
.card-header {
  width: 100%;
  height: 150px;
  border-radius: 10px 10px 0 0;
  padding-top: 25px;
}
.light-header {
  background: $light-gray;
}
.dark-header {
  background: $dark-gray;
}
h3 {
  @include heading-3;
}
p {
  margin-top: 0;
  font-size: 15px;
  line-height: 24px;
  text-align: left;
  margin-left: 16px;
  color: $white;
}
img {
  height: 100px;
}
</style>
