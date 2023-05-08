const app = Vue.createApp({
  data() {
    return {
      name:"Yusufbek",
      age:28,
      img:"https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Alamy-BXWK5E_vvmkuf.jpg"
    };
  },
  methods: {
    outputNum() {
      return Math.round(Math.random());
    },
    outputAge() {
      return this.age + 5;
    }
  }

});

app.mount('#assignment')