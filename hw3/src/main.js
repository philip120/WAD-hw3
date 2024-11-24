import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "@/assets/css/styles.css";


const app = createApp(App);

// Use the store
app.use(store);

// Use the router if you're using Vue Router
app.use(router);

app.mount('#app');