<template>
  <div>
      <h1>{{ singerName }}의 {{ albumName }}</h1>
      <video v-if="videoSource" :src="videoSource" controls autoplay></video>
      <div v-else>
        <p>비디오를 찾을 수 없습니다.</p>
      </div>
  </div>
</template>

<script>
export default {
  props: ['singerId', 'singerName','albumId', 'albumName'],
  computed: {
    videoSource() {
      if (this.singerId !== undefined && this.albumId !== undefined) {
        console.log(this.albumId)
        console.log(this.albumName)
        return require(`../assets/video/${this.singerId}_${this.albumId}.mp4`);

      } else {
        return require('../assets/video/test.mp4');
      }
    }
}
};
</script>

<style scoped>
video{
  width:20%;
}

</style>


