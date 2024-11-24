<template>
    <div>
      <div v-for="post in posts" :key="post.id" class="post">
        <div class="post-header">
          <img src="logo.jpg" alt="User Profile" class="profile-image" />
          <span class="post-author">{{ post.author }}</span>
          <span class="post-date">{{ formatDate(post.createTime) }}</span>
        </div>
        <img v-if="post.image" :src="post.image" alt="Post Image" class="post-image" />
        <p class="post-text">{{ post.content }}</p>
        <div class="post-footer">
          <span class="like-button">👍 Like</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from "vuex";
  
  export default {
    name: "PostsComponent", // Combined component
    computed: {
      ...mapGetters(["allPosts"]),
      posts() {
        return this.allPosts;
      },
    },
    methods: {
      formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });
      },
    },
  };
  </script>
  
  <style>
  .post {
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
  }
  .post-header {
    display: flex;
    align-items: center;
  }
  .profile-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 1rem;
  }
  .post-author {
    font-weight: bold;
    margin-right: 0.5rem;
  }
  .post-date {
    color: #666;
  }
  .post-image {
    max-width: 100%;
    height: auto;
    margin-top: 1rem;
  }
  .like-button {
    cursor: pointer;
    color: #007bff;
  }
  </style>
  