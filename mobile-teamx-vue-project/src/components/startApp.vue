<script>
  export default {
    data() {
      return {
        isPlaying: true,
        showHelpImage: true
      };
    },
    methods: {
      toggleSound() {
        var audio = this.$refs.audioPlayer;
        if (this.isPlaying) {
          audio.pause();
        } else {
          audio.currentTime = 0;
          audio.play();
        }
        this.isPlaying = !this.isPlaying;
      },
      onClickMoveWatchPage() {
        this.$router.push('/selectWatch');
      },
      onClickMoveListenPage() {
        this.$router.push('/selectListen')
      },
      onClickMoveOurPage() {
        this.$router.push('/ourTeam')
      },
      hideHelpImg() {
        this.showHelpImage = false;
      }
    }
  };
</script>

<template>
    <div class="help-container">
      <img v-if="showHelpImage" class="help" src="@/assets/img/help.jpg" alt="">
      <button v-if="showHelpImage" class="help-off" @click="hideHelpImg">도움말 끄기</button>
    </div>

    <audio ref="audioPlayer" autoplay loop>
        <source src="../assets/music/intro.wav" type="audio/mpeg">
    </audio>
    <header>
      <div class="logo-container">
        <img class="logo" src="@/assets/img/whitelogo.png" @click="onClickMoveOurPage" alt="">
        <button :class="{ 'soundBtt': true, 'sound-on': isPlaying, 'sound-off': !isPlaying }" @click="toggleSound">
          <i :class="{ 'fa-solid fa-volume-xmark': isPlaying, 'fa-solid fa-volume-high': !isPlaying }"></i>
        </button>
      </div>
      <hr>
    </header>

    <div class="container">
        <img src="@/assets/img/Ellipse-top.png" alt="">
        <img src="@/assets/img/Ellipse-bottom.png" alt="">
    </div>
    <div class="text-container">
      <div class="watchMV" @click="onClickMoveWatchPage">
        <div>Watch</div>
        <div>M/V</div>
      </div>
      <div class="ListenMusic" @click="onClickMoveListenPage">
        <div>Listen</div>
        <div>Music</div>
      </div>
    </div>
</template>



<style scoped>
.help{
  width:100vw;
}
.help-off{
  width:100px;
  position: absolute;
  bottom: 20px;
  right: 20px; 
  background-color: rgba(255, 255, 255); 
  border: none;
  border-radius: 20px;
  padding: 5px 10px;
  cursor: pointer;
}
.logo{
    width:30px;
    margin-top:20px;
    margin-left:5%;
}

.container {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1; 
}

.container img {
    position: absolute;
    width: 100%;
    z-index: -1;
}

.container img:nth-child(1) {
    top: 0;
    left: 0;
}

.container img:nth-child(2) {
    bottom: 0;
    right: 0;
}


header{
    position: fixed;

}
.logo-container{
    display: flex;
    width: 100vw;
    justify-content: space-between;
}

button{
    background: none;
    border: none;
  
}
.fa-solid{
  color: white;
  font-size: 30px;
  margin-right:15px;
  padding-top:15px;
}

hr {
  border: none;
  border-top: 1px solid white; /* 수평선 스타일 설정 */
  width: 90%;

}
.text-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  height:100vh;
  justify-content: space-between;
  color:white;
  font-size:20px;
  text-align: center;
}

.text-container .watchMV {
  margin-top:140px;
  padding: 20px;
}

.text-container .ListenMusic {
  margin-bottom: 70px;
  padding: 20px;
}

</style>