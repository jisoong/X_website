<template>
  <div id="app">
    <transition name="fade" @before-leave="hideSplash">
      <div v-if="showSplash" class="splash-screen">
        <img v-if="currentImage === 'logo'" src="@/assets/img/logo.png" alt="Logo" class="splash-logo"/>
        <img v-else-if="currentImage === 'other'" src="@/assets/img/logo.png" alt="Other Image" class="splash-logo"/>
      </div>
    </transition>
    <div v-show="!showSplash" name="next">
      <Loading />
      <router-view/>
    </div>
  </div>
</template>

<script>
import Loading from './components/loadingPage.vue';

export default {
  components: {
    Loading
  },
  data() {
    return {
      showSplash: true,
      currentImage: 'logo',
    };
  },
  mounted() {
    setTimeout(() => {
      this.currentImage = 'other';
      setTimeout(() => {
        this.showSplash = false;
      }, 1600); // 2초 동안 두 번째 이미지를 보여줍니다.
    }, 1500); // 2초 동안 첫 번째 이미지를 보여줍니다.
  },
  methods: {
    hideSplash() {
      const splashElement = this.$el.querySelector('.splash-screen');
      if (splashElement) {
        splashElement.style.display = 'none';
      }
    }
  }
}
</script>




<style src="./style.css">
</style>