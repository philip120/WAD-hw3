<template>
  <div class="post">
    <h2>{{ post.author }}</h2>
    <p class="date">{{ post.createTime }}</p>
    <img v-if="post.image" :src="post.image" alt="Post image" class="post-image" />
    <p>{{ post.content }}</p>
    <div class="like-section">
      <button @click="likePost" class="like-button">
        Like ({{ post.likes }})
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';

interface Post {
  id: number;
  title: string;
  content: string;
  likes: number;
  author: string;
  createTime: string;
  image?: string;
}

defineOptions({
  name: 'PostComponent',
});

const { post } = defineProps<{ post: Post }>();

const store = useStore();

const likePost = () => {
  store.dispatch('incrementPostLikes', post.id);
};
</script>

<style scoped>
.post {
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
}

.post-image {
  max-width: 100%;
  height: auto;
  margin-top: 1rem;
}

.like-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.like-button:hover {
  background-color: #45a049;
}

.date {
  font-size: 0.85rem;
  color: #888;
  margin-bottom: 0.5rem;
}

.like-section {
  margin-top: 1rem;
}
</style>
