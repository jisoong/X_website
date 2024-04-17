<template>
  <div class="container">
    <div class="video-container">
      <!-- <video v-if="videoSource" :src="videoSource" controls autoplay></video> -->
      <video v-if="videoSource" :src="videoSource" controls></video>
      <div v-else>
        <p>비디오를 찾을 수 없습니다.</p>
      </div>
    </div>
    <div class="video-text">
      <img src="../assets/img/kim_10cm.png" alt="">
      <div class="text-container">
        <div class="song-title"> {{ albumName }} - {{ singerName }} </div>
        <div class="origin-artist"> 원곡 아티스트: 10cm </div>
        <pre>

        </pre>
        <p class="detail" v-for="i in 10" :key="i">
          앨범설명이요
        </p>
      </div>
    </div>
    <div class="qr-container">
      <img class="qr" src="../assets/img/kim_10cm_insta_qr.png" alt="">
      <img class="qr" src="../assets/img/kim_10cm_ytube_qr.png" alt="">
    </div>
    <button class="select-again" @click="goToSelectPage" > 다시 선택하러 가기 </button>
    <button class="goto-main" @click="goToMainPage" > 메인으로 돌아가기 </button>
      <!-- <h1>{{ singerName }}의 {{ albumName }}</h1> -->
    <img class="footer-logo" src="../assets/img/teamX_mainBI.png" alt="">
  </div>
</template>

<script>
export default {
  props: ['singerId', 'singerName','albumId', 'albumName'],
  computed: {
    videoSource() {
      if (this.singerId !== undefined && this.albumId !== undefined) {
        return require(`../assets/video/${this.singerId}_${this.albumId}.mp4`);

      } else {
        return require('../assets/video/test.mp4');
      }
    }
  },
  methods: {
    goToSelectPage() {
      this.$router.push('/selectMusic')
    },
    goToMainPage() {
      this.$router.push('/')
    },
    
  }
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: black; /* 배경색 지정 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.video-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* /* height: 100vh; */
}

.video-text{
  margin-top: 50px;
  padding: 4%;
  background-color: #f0f0f0;
  border-radius: 50px;
  display: flex;
  width:60%;
}

video{
  margin-top: 10vh;
  width:60%;
  padding: 4%;
  background-color: #f0f0f0;
  border-radius: 50px;
}

.song-title{
  font-size: 30px;
  color: #172BFF;
}

.text-container{

  margin-left:50px;
}

.origin-artist{
  color: #172BFF;
  margin-top: 15px;
  font-size: 18px;
}

.detail{
  margin-top: 3px
}

.qr-container{
  display: flex;
  margin-top: 50px;
}

.qr{
  width: 200px;
  margin-left: 60px;
}

button{
  margin-top: 50px;
  font-size: 16px;
  padding: 15px;
  border-radius: 45px;
  color:white;
  border-color: #172BFF;
  background-color: #172BFF;
}

.goto-main{
  margin-bottom: 50px;
}

.footer-logo{
  margin-top: 160px;
  width: 80px;
  margin-bottom: 80px;
}
</style>


