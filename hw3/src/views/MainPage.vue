<template>
  <div id="main-container">
    <div id="posts-container" class="post-list">
      <h1>Post List</h1>
      <div v-for="post in posts" :key="post.createTime" class="post-item">
        <p><strong>{{ post.author }}</strong> - {{ post.createTime }}</p>
        <p>{{ post.content }}</p>
        <img v-if="post.image" :src="post.image" alt="Post image" class="post-image" />
        <hr />
      </div>
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
