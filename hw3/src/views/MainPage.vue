<template>
  <div>
    <PostsComponent />
  </div>
</template>

<script>
import PostsComponent from '../components/Posts.vue'; 

export default {
  name: 'MainPage',
  components: {
    PostsComponent, 
  },
};
</script>


<style>
.post {
  border: 1px solid #ccc;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
}

.post-image {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
}
</style>
