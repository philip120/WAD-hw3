<template>
  <div id="main-container-signup">
    <form id="signup-form" @submit.prevent="handleSignup">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          v-model="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          v-model="password"
          placeholder="Enter your password"
          required
        />
      </div>
      <button type="submit" class="submit-button">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignupPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSignup() {
      if (this.email && this.password) {
        console.log("User Signed Up", {
          email: this.email,
          password: this.password,
        });
        alert(`Sign-up successful for ${this.email}`);
        this.email = "";
        this.password = "";
      } else {
        alert("Please fill out all fields.");
      }
    },
  },
};
</script>

<style scoped>
</style>
