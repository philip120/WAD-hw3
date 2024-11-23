<template>
  <div>
    <Header />
      <div id="main-container-signup">
        <form id="signup-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" class="submit-button">Sign Up</button>
        </form>
      </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "SignupPage",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
</style>
