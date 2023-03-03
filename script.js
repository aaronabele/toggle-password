/* let visible = false;

const btn = document.querySelector("button");

btn.addEventListener("click", function (e) {
  visible = !visible;
  if (visible) {
    document.getElementById("userPassword").type = "text";
    btn.value = "Hide Password";
    btn.innerHTML = "Hide Password";
  } else {
    document.getElementById("userPassword").type = "password";
    btn.value = "Show Password";
    btn.innerHTML = "Show Password";
  }
}); */

const app = Vue.createApp({
  data() {
    return {
      type: "password",
    };
  },
  methods: {
    togglePasswordVis() {
      if (this.type === "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
  },
}).mount("#app");
