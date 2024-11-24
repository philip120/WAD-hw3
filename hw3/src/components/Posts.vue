<template>
    <div>
      <div v-for="post in posts" :key="post.id" class="post">
        <div class="post-header">
          <img src="images\logo.jpg" alt="User Profile" class="profile-image" />
          <span class="post-author">{{ post.author }}</span>
          <span class="post-date">{{ formatDate(post.createTime) }}</span>
        </div>
        <img v-if="post.image" :src="post.image" alt="Post Image" class="post-image" />
        <p class="post-text">{{ post.content }}</p>
        <div class="post-footer">
          <button class="like-button" @click="likePost(post.id)">
            👍 Like 
          </button>
          {{ post.likes }}  
        </div>
      </div>
    </div>
    <button @click="resetLikes" class="reset-button">Reset Likes</button>
  </template>
  
  <script>
  import { mapGetters, mapMutations } from "vuex";
  
  export default {
    name: "PostsComponent",
    computed: {
      ...mapGetters(["allPosts"]),
      posts() {
        return this.allPosts; // Get posts from Vuex
      },
    },
    methods: {
        ...mapMutations(["incrementLikes"]),
        ...mapActions(["resetAllLikes"]),
        likePost(postId) {
      this.incrementLikes(postId);
    },
      resetLikes() {
      this.resetAllLikes();
    },
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
    background-color: transparent;
    border: none;
    font-size: 16px;
  }
  .reset-button {
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
}
.reset-button:hover {
  background-color: #0056b3;
}
  </style>
  