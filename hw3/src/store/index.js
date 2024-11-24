import { createStore } from 'vuex';

const store = createStore({
  strict: true,
  state: {
    postList: [
        {
          createTime: "10/25/2024",
          image: "",
          content: "Exploring the beautiful city of Tartu! Can't wait to see what else it has to offer.",
          author: "Alex Smith"
        },
        {
          createTime: "10/20/2024",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ZPYvQq4aEs5i3if7wooZOhl4LNWdtcDRBw&s",
          content: "Does anyone know where today's workshop is being held?",
          author: "Emily Johnson"
        },
        {
          createTime: "10/15/2024",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_YHGWvN44JiYYkW1AIlgA&s",
          content: "Had an amazing time at the fall festival! The colors were incredible.",
          author: "Mark Lee"
        },
        {
          createTime: "10/10/2024",
          image: "",
          content: "Does anyone have recommendations for the best coffee shops around here?",
          author: "Samantha Brown"
        },
        {
          createTime: "10/05/2024",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqPLKm6rXBlXzyQq8oOJqls&s",
          content: "Check out this view from my morning hike. Absolutely breathtaking!",
          author: "Ryan Kim"
        },
        {
          createTime: "10/01/2024",
          image: "",
          content: "Finally got my new project up and running! Excited to share more soon.",
          author: "Jessica Taylor"
        },
        {
          createTime: "09/28/2024",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkl3PRL6fjbdJ76VWvOP5A&s",
          content: "A big thank you to everyone who helped make the event a success!",
          author: "Liam Davis"
        },
        {
          createTime: "09/22/2024",
          image: "",
          content: "Does anyone have tips for keeping up with the latest in tech while traveling?",
          author: "Chris Martinez"
        },
        {
          createTime: "09/18/2024",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV0I1VcJ6fhF_a-ZBd8jA&s",
          content: "Look at this adorable puppy I met at the park today!",
          author: "Olivia Wilson"
        }
      ]
      
  },
  getters: {
    getPosts: (state) => state.postList,
  },
  mutations: {
  },
  actions: {
  },
  
});

export default store;
