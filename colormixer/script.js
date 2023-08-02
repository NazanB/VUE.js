"use strict";
Vue.createApp({
  data() {
    return {
      red: 0,
      green: 0,
      blue: 0,
    };
  },
  computed: {
    hexColor() {
      return `#${this.hexStyle(this.red)}${this.hexStyle(
        this.green
      )}${this.hexStyle(this.blue)}`;
    },
  },
  methods: {
    hexStyle(n) {
      document.body.style.setProperty("--red", this.red);
      document.body.style.setProperty("--green", this.green);
      document.body.style.setProperty("--blue", this.blue);
      n = parseInt(n);
      let result = n.toString(16);
      return result.length < 2 ? "0" + result : result;
    },
  },
}).mount("#app");
/*
const redInput = document.getElementById("red");
const greenInput = document.getElementById("green");
const blueInput = document.getElementById("blue");
const hexInput = document.getElementById("hex-color");

redInput.addEventListener("input", inputstyle);
greenInput.addEventListener("input", inputstyle);
blueInput.addEventListener("input", inputstyle);

function inputstyle() {
  const red = redInput.value;
  const green = greenInput.value;
  const blue = blueInput.value;
  console.log(red + "-" + green + "-" + blue + "-");

  document.body.style.setProperty("--red", red);
  document.body.style.setProperty("--green", green);
  document.body.style.setProperty("--blue", blue);
  hexInput.innerHTML = `#${hexStyle(red)}${hexStyle(green)}${hexStyle(blue)}`;
  hexStyle();
  console.log(hexStyle(15));
}

function hexStyle(n) {
  n = parseInt(n);
  let result = n.toString(16);
  return result.length < 2 ? "0" + result : result;
}

inputstyle();
*/
