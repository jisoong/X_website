<script>
  export default {
    data() {
      return {
        isPlaying: false
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
        // this.selectMusicPage = true;
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
        <button :class="{ 'soundBtt': true, 'sound-on': isPlaying, 'sound-off': !isPlaying }" @click="toggleSound">{{ soundButtonText }}</button>

        <audio ref="audioPlayer">
            <source src="../assets/music/intro.mp3" type="audio/mpeg">
        </audio>
        <p class="intro_text">원하는 서비스를 선택해 해주세요</p>
        </div>
        <div class="text">
            <div class="watch" @click="onClickMoveWatchPage">
            <p> Watch </p>
            <p> M/V</p>
            </div>
            <div class="listen" @click="onClickMoveListenPage">
            <p> Listen </p>
            <p> Music </p>
            </div>
        </div>
        <div class="team" @click="onClickMoveOurPage">
            <p>About us</p>
        </div>
    </div>
    <div class="videoRoom">
      <!-- 비디오 들어가야함 -->
      <!-- <video src="../assets/video/test.mp4" autoplay loop muted>
        
      </video> -->
    </div>


</template>
  
  
  
<style scoped>
.videoRoom{
  display: flex;
  width: 100vw;
  height:100vh;
  justify-content: center;
  overflow: hidden;
  position: relative;
}
.back{
    z-index: 1; 
}
.container{
    width:100vw;
    height:100vh;
    position: absolute;
}
.intro_text {
    text-align: center;
    margin-top: 3%;
    margin-bottom:3%;
    color:#172BFF;
}

button {
    display: block;
    margin: 0 auto;
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
    font-size:23px;
    pointer-events: none; /* 클릭 이벤트 비활성화 */
}

  .soundBtt {
    width: 7%;
    border-radius: 30px;
    color: white; /* Set default text color */
    border-color: #172BFF;
    background-color: #172BFF; /* Set default background color */
    z-index: 10;
    margin-bottom: 3%;
  }

  .sound-on {
    color: #172BFF;
    background-color: white;
    border-color: #172BFF;
  }

  .sound-off {
    color: white;
    background-color: #172BFF;
  }

  .half-circle1{
    height: 100%;
    margin: 0;
    padding: 0;
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
  .watch{
    margin-left:3vw;
  }
  .listen{
    margin-right:3vw;
  }
  .team{
    display: flex;
    flex-direction: column;
    margin-top:-13vh;
    align-items:center;
    font-size:23px;
    color: #172BFF;
  }
  .option{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  video{
    position: absolute;
    height:auto;
    z-index: -10;
    /* margin-top: 35vh; */
  }
</style>
  
