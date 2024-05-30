<script>
  export default {
    data() {
      return {
        isPlaying: true
      };
    },
    computed: {
      soundButtonText() {
        return this.isPlaying ? 'sound off' : 'sound on';
      }
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
      }
    }
  };
</script>

<template>
    <div class="container back">
        <div class="bg box">
            <img class="half-circle1" @click="onClickMoveWatchPage" src="../assets/img/Ellipse 1.png" alt="">
            <img class="half-circle2" @click="onClickMoveListenPage" src="../assets/img/Ellipse 2.png" alt="">    
        </div>
        <div id="app">
          <pre>


          </pre>
          <button :class="{ 'soundBtt': true, 'sound-on': isPlaying, 'sound-off': !isPlaying }" @click="toggleSound">
            <i :class="{ 'fa-solid fa-volume-xmark': isPlaying, 'fa-solid fa-volume-high': !isPlaying }"></i>
            {{ soundButtonText }}
          </button>
          <audio ref="audioPlayer" autoplay loop>
              <source src="../assets/music/intro.wav" type="audio/mpeg">
          </audio>
          <p class="intro_text">원하는 서비스를 선택해 해주세요</p>
          </div>
          <div class="text">
              <div class="watch" @click="onClickMoveWatchPage">
                <i class="fa-solid fa-chevron-left"></i>
                <div>
                  <p>Watch</p>
                  <p>M/V</p>
                </div>
              </div>
              <div class="listen" @click="onClickMoveListenPage">
                <i class="fa-solid fa-angle-right"></i>
                <div>
                  <p> Listen </p>
                  <p> Music </p>
                </div>
              </div>
          </div>
          <div class="team" @click="onClickMoveOurPage">
              <p>About us</p>
              <i class="fa-solid fa-chevron-down"></i>
          </div>
    </div>
    <div class="videoRoom">
      <!-- 비디오 들어가야함 -->
      <!-- <video src="../assets/video/test.mp4" autoplay loop muted>
        
      </video> -->
    </div>
</template>
  
  
<style scoped>
.container{
  width:100vw;
  height:100vh;
  position: absolute;
  overflow: hidden;
}
.back{
  z-index: 1; 
}
.bg{
  display: flex;
  justify-content: space-between; 
  z-index: -1;
}
.box{
  position: absolute;
  width: 100%;
  height: 100%;
}

.half-circle1, .half-circle2{
    height: 100%;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
}
.half-circle1 {
    left: 0;
}
.half-circle2 {
    right: 0;
}
button {
  display: block;
  margin: 0 auto;
}
.soundBtt {
  width: auto;
  padding: 0.5em 1em;
  border-radius: 30px;
  color: white;
  /* background-color: #172BFF;  */
  z-index: 10;
  margin-bottom: 3%;
}
.sound-on {
  color: #172BFF;
  background-color: white;
  border-color: #172BFF;
  /* border:none; */
}

.sound-off {
  color: white;
  background-color: #172BFF;
  /* border:none; */
  border-color: #172BFF;
}
.fa-volume-xmark, .fa-volume-high{
  margin-right: 0.5em;
}

.intro_text {
  text-align: center;
  margin: 3% 0;
  color:#172BFF;
}

.text{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  color: white;
  margin-top:-18vh;
  font-size:1.5em;
  pointer-events: none;
}

.watch{
  margin-left:3vw;
  display: flex;
  cursor: pointer;
  pointer-events: auto;
}
.listen{
  margin-right:3vw;
  display: flex;
  flex-direction: row-reverse;
  cursor: pointer;
  pointer-events: auto;
}
.team{
  display: flex;
  flex-direction: column;
  align-items:center;
  font-size:1.5em;
  color: #172BFF;
  cursor: pointer;
  pointer-events: auto;

  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 10px;
}

.team p {
    margin: 0;
    display: inline-block;
    vertical-align: middle;
}
.team i {
    display: inline-block;
    vertical-align: middle;
}

.fa-chevron-left{
  margin-right:10px;
  font-size: 2em;
}
.fa-angle-right{
  margin-left:10px;
  font-size: 2em;
}
.fa-chevron-down{
  font-size: 2em
}

.videoRoom{
  display: flex;
  width: 100vw;
  height:100vh;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

video{
  position: absolute;
  height:auto;
  z-index: -10;
  /* margin-top: 35vh; */
}

/* 반응형 */
@media (max-width: 768px) {
  .intro_text {
    font-size: 1em;
  }
  
  .text {
    font-size: 1.2em;
    margin-top: -15vh;
  }

  .watch, .listen {
    flex-direction: column;
    align-items: center;
  }

  .fa-chevron-left, .fa-angle-right, .fa-chevron-down {
    font-size: 1.5em;
  }

  .team {
    font-size: 1.2em;
  }

  .soundBtt {
    width: auto;
    padding: 0.3em 0.6em;
    font-size: 0.8em;
  }
}

@media (max-width: 480px) {
  .intro_text {
    font-size: 0.8em;
  }

  .text {
    font-size: 1em;
    margin-top: -10vh;
  }

  .fa-chevron-left, .fa-angle-right, .fa-chevron-down {
    font-size: 1.2em;
  }

  .team {
    font-size: 1em;
  }

  .soundBtt {
    width: auto;
    padding: 0.2em 0.4em;
    font-size: 0.7em;
  }
}
</style>
  
