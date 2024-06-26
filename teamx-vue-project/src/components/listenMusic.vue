<template>
  <header>
    <img class="logo" src="../assets/img/logo.png" @click="goToMainPage" alt="">
  </header>
  <div v-if="loading" class="loading-spinner">
      <!-- 로딩 스피너 또는 로딩 화면 -->
  </div>
  <div v-else class="container" :style="{ '--bg-image': 'url(' + albumImage + ')' }">
    <img class="box" src="../assets/img/Ellipse.png" alt="">
    <div class="main-container">
      <div class="music-container">
        <div class="cd-container">
          <div class="album-container">
            <img :class="['lp', { spinning: isPlaying }]" src="../assets/img/lp.png" alt="">
            <img class="album-cover" :src="albumImage" alt="">
          </div>
          <div class="audio-player">
            <audio ref="audioPlayer" controls @play="onPlay" @pause="onPause" @timeupdate="onTimeUpdate">
              <source v-if="musicSource" :src="musicSource" type="audio/mpeg">
            </audio>
          </div>
        </div>
        <div class="text-container">
          <div class="title"> {{ albumName }} - {{ singerNames }} </div>
          <div class="origin-artist"> 원곡 아티스트: {{ originArtist }} </div>
          <div class="lyrics-container" ref="lyricsContainer">
            <p v-for="(line, index) in currentLyrics" :key="index" :class="{ current: index === currentLyricIndex }">
              {{ line.text }}
            </p>
          </div>
        </div>
      </div>
      <hr>
      <div class="qr-container">
        <div>
          teamX가 궁금하다면
        </div>
        <div class="qrimg-container">
          <div class="insta-qr-container">
            <img src="../assets/img/teamxinsta_qr_white.png" class="insta-qr"> 
            <p>insta</p>
          </div>
          <div class="ytube-qr-container">
            <img src="../assets/img/teamxytube_qr_white.png" class="ytube-qr">
            <p>youtube</p>
          </div>
        </div>
      </div>
    </div>
  
    <div>
      <!-- <img class="footer-logo" src="../assets/img/BI.png" alt="" @click="goToMainPage"> -->
      <img class="end-ellipse" src="../assets/img/Ellipse_end.png" alt="">
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex';
import { nextTick } from 'vue';

export default {
props: ['singerIds', 'singerNames', 'albumId', 'albumName'],
data() {
  return {
    isPlaying: false,
    originArtist: '', // 원곡 아티스트
    albumDescription: '', // 앨범 설명
    albumImage: '' ,

    lyrics: {},
    currentLyrics: [],
    currentLyricIndex: 0,
  };
},
computed: {
  ...mapState({
      loading: state => state.loading
  }),
  musicSource() {
    const singerIdArray = this.singerIds.split(',');

    if (singerIdArray.length > 0 && this.albumId !== undefined) {
      return require(`../assets/music/${singerIdArray[0]}_${singerIdArray[1]}_${this.albumId}.wav`);
    } else {
      return require('../assets/music/intro.wav');
    }
  }
},
watch: {
  loading(newVal) {
    if (!newVal) {
      nextTick(() => {
        if (this.$refs.audioPlayer) {
          this.$refs.audioPlayer.play();
        }
      });
    }
  },
  albumId(newVal) {
    if (newVal) {
      this.getAlbumInfo();
    }
  }
},
created() {
  // 컴포넌트가 생성될 때, 가수와 앨범 정보를 기반으로 데이터를 가져옴
  this.getAlbumInfo();
},
methods: {
  async getAlbumInfo() {
      try {
        const albumInfo = await this.fetchAlbumInfo();
        this.originArtist = albumInfo.originArtist;
        this.albumImage = albumInfo.albumImage;
        this.lyrics = albumInfo.lyrics;

        this.currentLyrics = this.lyrics[this.albumId] || [];
      } catch (error) {
        console.error('데이터를 가져오는 도중 오류가 발생했습니다:', error);
      }
    },
  fetchAlbumInfo() {
    // 가수와 앨범 정보를 기반으로 데이터를 가져오는 비동기 함수
    return new Promise((resolve, reject) => {
      // 가수와 앨범 정보를 기반으로 데이터를 가져오는 로직을 구현해주세요.
      if (this.albumId === 'cocktail') {
        resolve({
          originArtist: '마로니에',
          albumImage: require('../assets/img/cocktail.jpeg'),
          lyrics: {
              cocktail: [
                { time: 0, text: "마음 울적한 날엔 거리를 걸어보고" },
                { time: 26, text: "향기로운 칵테일에 취해도 보고" },
                { time: 32, text: "한 편의 시가 있는 전시회장도 가고" },
                { time: 37, text: "밤새도록 그리움에 편질 쓰고파" },
                { time: 44, text: "모차르트 피아노 협주곡 21번" },
                { time: 49, text: "그 음악을 내 귓가에 속삭여주며" },
                { time: 55, text: "아침햇살 눈부심에 나를 깨워줄" },
                { time: 59, text: "그런 연인이 내게 있으면" },
                { time: 66, text: "나는 아직 순수함을 느끼고 싶어" },
                { time: 71, text: "어느 작은 우체국 앞 계단에 앉아" },
                { time: 76, text: "프리지아 꽃향기를 내게 안겨줄" },
                { time: 80, text: "그런 연인을 만나봤으면" },
                { time: 86, text: "마음 울적한 날엔 거리를 걸어보고" },
                { time: 92, text: "향기로운 칵테일에 취해도 보고" },
                { time: 97, text: "한 편의 시가 있는 전시회장도 가고" },
                { time: 103, text: "밤새도록 그리움에 편질 쓰고파" },
                { time: 111, text: "모차르트 피아노 협주곡 21번" },
                { time: 116, text: "그 음악을 내귓가에 속삭여주며" },
                { time: 122, text: "아침햇살 눈부심에 나를깨워줄" },
                { time: 126, text: "그런 연인이 내게있으면" },
                { time: 132, text: "나는 아직 순수함을 느끼고 싶어" },
                { time: 137, text: "어느 작은 우체국 앞 계단에 앉아" },
                { time: 142, text: "프리지아 꽃향기를 내게 안겨줄" },
                { time: 147, text: "그런 연인을 만나봤으면" },
                { time: 153, text: "마음 울적한 날엔 거리를 걸어보고" },
                { time: 158, text: "향기로운 칵테일에 취해도 보고" },
                { time: 164, text: "한편의 시가 있는 전시회장도 가고" },
                { time: 169, text: "밤새도록 그리움에 편질 쓰고파" },
                
              ]
            }
        });
      } else if(this.albumId === 'akmu') {
        resolve({
          originArtist: 'AKMU',
          albumImage: require('../assets/img/akmu.jpg'),
          lyrics: {
            akmu: [
              { time: 0, text: "일부러 몇 발자국 물러나" },
              { time: 26, text: "내가 없이 혼자 걷는 널 바라본다" },
              { time: 34, text: "옆자리 허전한 너의 풍경" },
              { time: 41, text: "흑백 거리 가운데 넌 뒤돌아본다" },
              { time: 50, text: "그때 알게 되었어" },
              { time: 57, text: "난 널 떠날 수 없단 걸" },
              { time: 65, text: "우리 사이에 그 어떤 힘든 일도" },
              { time: 71, text: "이별보단 버틸 수 있는 것들이었죠" },
              { time: 84, text: "어떻게 이별까지 사랑하겠어" },
              { time: 91, text: "널 사랑하는 거지" },
              { time: 99, text: "사랑이라는 이유로 서로를 포기하고" },
              { time: 106, text: "찢어질 것같이 아파할 수 없어 난" },
              { time: 128, text: "두세 번 더 길을 돌아갈까" },
              { time: 135, text: "적막 짙은 도로 위에 걸음을 포갠다" },
              { time: 143, text: "아무 말 없는 대화 나누며" },
              { time: 150, text: "주마등이 길을 비춘 먼 곳을 본다" },
              { time: 159, text: "그때 알게 되었어" },
              { time: 166, text: "난 더 갈 수 없단 걸" },
              { time: 174, text: "한 발 한 발 이별에 가까워질수록" },
              { time: 180, text: "너와 맞잡은 손이 사라지는 것 같죠" },
              { time: 193, text: "어떻게 이별까지 사랑하겠어" },
              { time: 199, text: "널 사랑하는 거지" },
              { time: 208, text: "사랑이라는 이유로 서로를 포기하고" },
              { time: 215, text: "찢어질 것같이 아파할 수 없어 난" },
            ]
          }
        });
      } else if(this.albumId === 'bubble') {
        resolve({
          originArtist: 'NewJeans',
          albumImage: require('../assets/img/bubble.jpeg'),
          lyrics: {
            bubble: [
              { time: 0, text: "You just got my heart pump pumpin'" },
              { time: 21, text: "Every time that you're here around me" },
              { time: 23, text: "노랫 소리가 또 흘러나와 yeah" },
              { time: 28, text: "오늘 오래 걸린 이유" },
              { time: 30, text: "I'm always so excited to meet you" },
              { time: 32, text: "내 향기가 널 먼저 찾아가" },
              { time: 36, text: "눈 감아도 기억나게" },
              { time: 39, text: "어디라도 따라갈래" },
              { time: 41, text: "You're so delicate 거품 속에" },
              { time: 43, text: "숨었네 uh uh uh" },
              { time: 46, text: "Oh you make my heart melt away" },
              { time: 48, text: "You're a softie 구름 같아" },
              { time: 50, text: "이건 말로 설명 못해" },
              { time: 52, text: "You got me oh oh" },
              { time: 55, text: "이미 우린" },
              { time: 56, text: "저기 멀리" },
              { time: 57, text: "높이 있는" },
              { time: 58, text: "풍선같이" },
              { time: 59, text: "Have you right here" },
              { time: 60, text: "In a basket" },
              { time: 62, text: "Oh my baby" },
              { time: 63, text: "Sweet like bubble gum" },
              { time: 65, text: "Bouncing like playing ball" },
              { time: 67, text: "더 높이 올려줘" },
              { time: 69, text: "We're gonna ﬂy away" },
              { time: 72, text: "Sweet like bubble yum" },
              { time: 74, text: "So smooth, soft like a hug" },
              { time: 76, text: "더 멀리 날려줘" },
              { time: 79, text: "Let's go far away" },
              { time: 83, text: "You're my favorite flavor" },
              { time: 88, text: "Bubble gum" },
              { time: 92, text: "Bubble Bubble Bubble Bubble Bubble Bubble" },
              { time: 96, text: "Bubble Bubble Bubble Gum" },
              { time: 101, text: "오늘 오래 걸린 이유" },
              { time: 103, text: "I'm always so excited to meet you" },
              { time: 105, text: "내 향기가 널 먼저 찾아가" },
              { time: 110, text: "나만 알고 싶은 비밀" },
              { time: 112, text: "All I know is I need this feeling" },
              { time: 114, text: "내 윤기가 널 먼저 사로잡아 yeah" },
              { time: 119, text: "눈 감아도 기억나게" },
              { time: 121, text: "어디라도 따라갈래" },
              { time: 123, text: "You're so delicate 거품 속에" },
              { time: 125, text: "숨었네 uh uh uh" },
              { time: 128, text: "Oh you make my heart melt away" },
              { time: 130, text: "You're a softie 구름 같아" },
              { time: 132, text: "이건 말로 설명 못해" },
              { time: 134, text: "You got me oh oh" },
              { time: 136, text: "Sweet like bubble gum" },
              { time: 138, text: "Bouncing like playing ball" },
              { time: 140, text: "더 높이 올려줘" },
              { time: 143, text: "We're gonna ﬂy away" },
              { time: 145, text: "Sweet like bubble yum" },
              { time: 147, text: "So smooth, soft like a hug" },
              { time: 149, text: "더 멀리 날려줘" },
              { time: 152, text: "Let's go far away" },
              { time: 155, text: "눈 감아도 기억나게" },
              { time: 158, text: "어디라도 따라갈래" },
              { time: 160, text: "You're so delicate 거품 속에" },
              { time: 161, text: "숨었네 uh uh uh" },
              { time: 165, text: "Oh you make my heart melt away" },
              { time: 167, text: "You're a softie 구름 같아" },
              { time: 169, text: "이건 말로 설명 못해" },
              { time: 171, text: "You got me oh oh" },
              { time: 174, text: "이미 우린" },
              { time: 175, text: "저기 멀리" },
              { time: 176, text: "높이 있는" },
              { time: 177, text: "풍선같이" },
              { time: 178, text: "Have you right here" },
              { time: 179, text: "In a basket" },
              { time: 180, text: "Oh my baby" },
              { time: 182, text: "Sweet like bubble gum" },
              { time: 183, text: "이미 우린" },
              { time: 184, text: "저기 멀리" },
              { time: 185, text: "높이 있는" },
              { time: 186, text: "풍선같이" },
              { time: 187, text: "Have you right here" },
              { time: 188, text: "In a basket" },
              { time: 189, text: "Oh my baby" },
              { time: 191, text: "Sweet like bubble gum" },
            ]
          }
        });
      } else {
        reject(new Error('가수와 앨범 정보에 해당하는 데이터를 찾을 수 없습니다.'));
      }
    });
  },
  onTimeUpdate() {
    const audioPlayer = this.$refs.audioPlayer;
    if (!audioPlayer) return; // audioPlayer가 null인지 확인
    
    const currentTime = audioPlayer.currentTime; // 소수점 포함 시간

    for (let i = 0; i < this.currentLyrics.length; i++) {
      const { time } = this.currentLyrics[i];

      if (currentTime >= time && (i === this.currentLyrics.length - 1 || currentTime < this.currentLyrics[i + 1].time)) {
        if (this.currentLyricIndex !== i) {
          this.currentLyricIndex = i;

          // 현재 가사로 스크롤
          this.scrollToCurrentLyric();
        }
        break;
      }
    }
  },
  scrollToCurrentLyric() {
    this.$nextTick(() => {
      const container = this.$refs.lyricsContainer;
      const currentLyric = container.querySelector('.current');

      if (currentLyric) {
        container.scrollTo({
          top: currentLyric.offsetTop - container.offsetTop - container.clientHeight / 2 + currentLyric.clientHeight / 2,
          behavior: 'smooth'
        });
      }
    });
  },
  startLyricSync() {
    const syncLyrics = () => {
      if (this.isPlaying) {
        this.onTimeUpdate();
        this.lyricAnimationFrame = requestAnimationFrame(syncLyrics);
      }
    };
    this.lyricAnimationFrame = requestAnimationFrame(syncLyrics);
  }, 
  goToSelectPage() {
    this.$router.push('/selectListen');
  },
  goToMainPage() {
    this.$router.push('/');
  },
  // lp회전
    onPlay() {
      this.isPlaying = true;
      this.startLyricSync();
    },
    onPause() {
      this.isPlaying = false;
      cancelAnimationFrame(this.lyricAnimationFrame);
    }

}
};
</script>


<style scoped>
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");
header, .container {
	font-family: 'Pretendard', sans-serif;
}

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  box-sizing: border-box;
}
.container::before {
  pointer-events: none;
  content: '';
  position: fixed; 
  left: -40px; 
  width: calc(100% + 80px); 
  height: calc(100% + 80px);
  background-image: var(--bg-image);
  background-size: cover;
  filter: blur(40px) brightness(0.3); /* blur와 brightness를 함께 사용 */
  /* filter: blur(40px);  */
  z-index: -1;
}

header{
  position: fixed;
  z-index:10;
  width: 100%;
  display: flex;
}
.logo{
  width:50px;
  margin-top: 20px;
  margin-left: 20px;
}
.box, .end-ellipse {
  width: 100vw;
  /* height: auto; */
  pointer-events: none;
}
.box{
  height:33vh
}
.end-ellipse {
  z-index: -1;
  height:33vh;
  position: fixed; /* fixed 또는 absolute 사용할 수 있습니다 */
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
hr{
  margin: 0 5vw 0 0;
  margin-top:-7.5vw;
  height:50vh;
}
.main-container{
  display: flex;
  flex-direction: row;
  width:80vw;
  justify-content: center;
  align-items: center;
}
.music-container{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.cd-container{
  display: flex;
  flex-direction: column;
  width:100%;
  align-items: center;
}
.album-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -7.5vw;
}
.lp{
  width: 15vw;
  height: 100%;
  z-index: -1;
}
.spinning {
  animation: spin 2s infinite linear;
}

.album-cover{
  width: 15vw;
  height: 100%;
  margin-top:-7.5vw;
}

.audio-player {
  width: 150%;
  max-width: 600px;
  margin-top: 20px;
  display: flex;
  align-items: center;
}
audio{
  width: 100%;
  margin: 0 auto;
}

.text-container{
  margin-top:-7.5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50px;
  width: 100%;
  max-width: 600px;
  /* margin-right:-200px; */
}
.title{
  color: #7782FF;
  font-size: 1.2em;
  font-weight: bolder;
  width:100vw;
  text-align: center;
}
.origin-artist{
  color: #7782FF;
  margin-top: 10px;
  font-size: 1em;
}
/* .detail{
  margin-top: 4px;
  line-height: 35px;
  font-size: 16px;
  color: white;
  white-space: pre-wrap;
  text-align: center;
} */
.lyrics-container {
  margin-top: 50px;
  height: 100px;
  overflow-y: scroll;
  transition: scroll-top 0.5s ease; /* 스크롤 애니메이션 추가 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;
}

.lyrics-container p {
  font-size: 1.1em;
  line-height: 1.5;
  text-align: center;
  color: #ffffff;
  opacity: 0.6; 
  transition: opacity 0.5s ease; /* 투명도 애니메이션 추가 */
}

.lyrics-container p.current {
  opacity: 1;
  font-weight: bold; /* Highlight current line */
  color: #7782FF;
}


.qr-container{
  margin-top:-7.5vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  color:#7782FF;
  font-size:0.9em;
  font-weight: bold;
}
.qrimg-container{
  margin-top:50px;
  display: flex;
  justify-content: center;
  color: white;
  flex-direction: column;
}

.insta-qr-container, .ytube-qr-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
}
.ytube-qr-container{
  margin-top:40px;
}
.insta-qr, .ytube-qr {
  width: 7vw;
  height: auto;
  margin: 0 20px;
}

.end-ellipse {
  z-index: -1;
  height:150px;
}
.footer-logo{
  margin-top: 150px;
  margin-bottom:-100px;
  width: 40px;
  z-index: 2;
}

a {
    color: inherit; 
    text-decoration: none;
}

a:visited, a:active {
    color: inherit; 
}

@-webkit-keyframes spin {
  0% {
      -webkit-transform: rotate(0deg);
  }

  100% {
      -webkit-transform: rotate(360deg);
  }
}

@-moz-keyframes spin {
  0% {
      -moz-transform: rotate(0deg);
  }

  100% {
      -moz-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
      transform: rotate(0deg);
  }

  100% {
      transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .logo {
    width: 40px;
    margin-top: 10px;
  }

  .lp, .album-cover {
    width: 200px;
  }

  .text-container {
    margin-top: 8vh;
    padding: 15px;
    width: 90%;
  }
  .title {
    font-size: 20px;
  }
  .origin-artist {
    font-size: 16px;
  }
  .detail {
    font-size: 14px;
  }

  .qr-container {
    margin-top: 30px;
    font-size: 16px;
  }
  .qrimg-container {
    flex-direction: column;
  }
  .insta-qr, .ytube-qr {
    width: 100px;
    margin: 10px 0;
  }

  .footer-logo {
    margin-top: 30px;
    width: 40px;
  }
}

@media (max-width: 480px) {
  .logo {
    width: 30px;
    margin-top: 5px;
  }

  .lp, .album-cover {
    width: 150px;
  }

  .text-container {
    margin-top: 5vh;
    padding: 10px;
    width: 95%;
  }
  .title {
    font-size: 18px;
  }
  .origin-artist {
    font-size: 14px;
  }
  .detail {
    font-size: 12px;
  }

  .qr-container {
    margin-top: 20px;
    font-size: 14px;

  }
  .insta-qr, .ytube-qr {
    width: 80px;

  }

  .footer-logo {
    margin-top: 20px;
    width: 30px;
  }
}
@media (max-width: 480px) {
  
}
</style>