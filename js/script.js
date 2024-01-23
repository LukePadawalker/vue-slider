console.log("Vue ok", Vue);

const { createApp } = Vue;

const app = Vue.createApp({
    data() {
      return {
        destinations: destinations,
        currentActiveIndex: 0
      };
    },
    methods: {
      prevButton() {
        this.currentActiveIndex--;
        if (this.currentActiveIndex < 0) this.currentActiveIndex = this.destinations.length - 1;
      },
      nextButton() {
        this.currentActiveIndex++;
        if (this.currentActiveIndex >= this.destinations.length) this.currentActiveIndex = 0;
      },
      changeActivePic(index) {
        this.currentActiveIndex = index;
      }
    }
  });
  
  app.mount('#app');