<template>
  <div id="main-container">
    <div id="posts-container">
      <!-- Posts will be dynamically loaded here -->
    </div>
  </div>
</template>

<script>
import { loadPostsFromJson, displayPosts } from "@/utils/script.js";

export default {
  name: "MainPage",
  async mounted() {
    try {
      console.log("MainPage mounted - Fetching posts...");
      const posts = await loadPostsFromJson(); // Load posts dynamically
      displayPosts(posts); // Display posts in the container
    } catch (error) {
      console.error("Error in MainPage while loading posts:", error);
    }
  },
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
