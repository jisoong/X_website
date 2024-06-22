<template>
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-container">
        <img src="@/assets/loading.gif" alt="Loading" class="loading-gif" />
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    setup() {
      const store = useStore();
      const isLoading = computed(() => store.getters.isLoading);
  
      return { isLoading };
    }
  }
  </script>
  
  <style scoped>
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");
  
  .loading-overlay {
    font-family: 'Pretendard', sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #172BFF;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .loading-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.8em;
    color:white;
  }
  
  .loading-gif{
    width: 18vw;
  }
  </style>
  