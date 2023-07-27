const app = Vue.createApp({
  data() {
    return {
      userName: "Nazan",
      time: new Date().toLocaleString("en-US"),
    };
  },
});

app.mount("#app");
