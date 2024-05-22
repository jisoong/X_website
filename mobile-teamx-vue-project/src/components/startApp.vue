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
    <!-- <div class="help-container">
      <img v-if="showHelpImage" class="help" src="@/assets/img/help.jpg" alt="">
      <button v-if="showHelpImage" class="help-off" @click="hideHelpImg">도움말 끄기</button>
    </div> -->

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
        <img class="ellipse top" src="@/assets/img/Ellipse-top.png" alt="">
        <img class="ellipse bottom" src="@/assets/img/Ellipse-bottom.png" alt="">
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
@import url('https://webfontworld.github.io/gmarket/GmarketSans.css');

.text-container {
  font-family: 'GmarketSans', sans-serif;
}

.help-container{
  display: flex;
  align-items: center;
  justify-content: center;
}
.help{
  width:100vw;
  height: 100vh;
  /* object-fit: cover; */


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

header{
    position: fixed;
    width:100%;
}
.logo-container{
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
}
.logo{
    width:30px;
    margin-top:20px;
    margin-left:5%;
}
button{
    background: none;
    border: none;
}
.fa-solid{
  color: white;
  font-size: 30px;
  margin-right:0.8em;
  padding-top:15px;
}
hr {
  border: none;
  border-top: 1px solid white; /* 수평선 스타일 설정 */
  width: 90%;
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
    height: 50%;
}

.container img:nth-child(2) {
    bottom: 0;
    right: 0;
    height: 50%;
}
.ellipse {
    position: absolute;
    width: 100%;
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
  padding: 20px 0;
}

.text-container .watchMV,
.text-container .ListenMusic {
    padding: 20px;
    cursor: pointer;
}

.text-container .watchMV {
  margin-top:140px;
}
.text-container .ListenMusic {
  margin-bottom: 70px;
}

@media (min-width: 600px) and (max-width: 768px) {
    .logo {
        width: 35px;
    }
    .fa-solid {
        font-size: 35px;
    }
    .text-container {
        font-size: 22px;
    }
    .text-container .watchMV {
        margin-top: 160px;
    }
    .text-container .ListenMusic {
        margin-bottom: 90px;
    }
    .container img:nth-child(1) {
      height: 45%;
    }
    .container img:nth-child(2) {
      height: 45%;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .logo {
        width: 40px;
    }
    .fa-solid {
        font-size: 35px;
    }
    .text-container {
        font-size: 22px;
    }
    .text-container .watchMV {
        margin-top: 160px;
    }
    .text-container .ListenMusic {
        margin-bottom: 90px;
    }
    .container img:nth-child(1) {
      height: 45%;
    }
    .container img:nth-child(2) {
      height: 45%;
    }
}

@media (min-width: 1024px) {
    .logo {
        width: 50px;
    }
    .fa-solid {
        font-size: 40px;
    }
    .text-container {
        font-size: 24px;
    }
    .text-container .watchMV {
        margin-top: 180px;
    }
    .text-container .ListenMusic {
        margin-bottom: 110px;
    }
    .container img:nth-child(1) {
      top: 0;
      left: 0;
      /* height: 40%; */
    }
    .container img:nth-child(2) {
      bottom: 0;
      right: 0;
      /* height: 40%; */
    }
}

@media (min-width: 768px) {
    .help{
        content: url('@/assets/img/help-ipad.png');
    }
}

</style>