<template>
  <div>
    <AppHeader />
    <div id="main-container">
      <h1>Welcome to the Main Page</h1>
      <p>This is a simple placeholder content between the header and footer.</p>
      <button @click="handleClick">Click Me!</button>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/Header.vue";
import AppFooter from "@/components/Footer.vue";

export default {
  name: "MainPage",
  components: {
    AppHeader,
    AppFooter,
  },
  methods: {
    handleClick() {
      console.log("Button clicked!");
      alert("Hello from MainPage!");
    },
  },
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
