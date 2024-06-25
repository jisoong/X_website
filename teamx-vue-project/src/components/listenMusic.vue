<template>
  <header>
    <img class="logo" src="../assets/img/logo.png" @click="goToMainPage" alt="">
  </header>
  <div v-if="loading" class="loading-spinner">
      <!-- 로딩 스피너 또는 로딩 화면 -->
  </div>
  <div v-else class="container" :style="{ '--bg-image': 'url(' + albumImage + ')' }">
      <img class="box" src="../assets/img/Ellipse.png" alt="">
      <div class="album-container">
          <img :class="['lp', { spinning: isPlaying }]" src="../assets/img/lp.png" alt="">
          <img class="album-cover" :src="albumImage" alt="">
      </div>
      <div class="audio-player">
        <audio ref="audioPlayer" controls autoplay controlsList="nodownload" @play="onPlay" @pause="onPause">
          <source v-if="musicSource" :src="musicSource" type="audio/mpeg">
        </audio>
      </div>
      <div class="text-container">
          <div class="title"> {{ albumName }} - {{ singerNames }} </div>
          <div class="origin-artist"> 원곡 아티스트: {{ originArtist }} </div>
          <pre class="detail">
            {{ albumDescription }}
          </pre>
      </div>
      <div class="qr-container">
        <div>
          teamX가 궁금하다면
        </div>
        <div class="qrimg-container">
          <a class="insta-qr-container" href="https://www.instagram.com/xteamx2024/" target="_blank">
            <img src="../assets/img/teamxinsta_qr_white.png" class="insta-qr"> 
            <p>insta</p>
          </a>
          <a class="ytube-qr-container" href="https://www.youtube.com/@xteamx2024" target="_blank">
            <img src="../assets/img/teamxytube_qr_white.png" class="ytube-qr">
            <p>youtube</p>
          </a>
        </div>
      </div>
      <img class="footer-logo" src="../assets/img/BI.png" alt="" @click="goToMainPage">
      <img class="end-ellipse" src="../assets/img/Ellipse_end.png" alt="">
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
    albumImage: '' 
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
      console.log(this.singerIds[0]);
      return require('../assets/music/intro.wav');
    }
  }
},
watch: {
    loading(newVal) {
      if (!newVal) {
        nextTick(() => {
          if (this.$refs.video) {
            this.$refs.video.play();
          }
        });
      }
    },
  },
created() {
  // 컴포넌트가 생성될 때, 가수와 앨범 정보를 기반으로 데이터를 가져옴
  this.getAlbumInfo();
},
methods: {
  async getAlbumInfo() {
    try {
      const albumInfo = await this.fetchAlbumInfo(); // 비동기로 데이터를 받아오는 함수 호출
      this.originArtist = albumInfo.originArtist;
      this.albumDescription = albumInfo.albumDescription;
      this.albumImage = albumInfo.albumImage
    } catch (error) {
      console.error('데이터를 가져오는 도중 오류가 발생했습니다:', error);
      // 에러 처리
    }
  },
  fetchAlbumInfo() {
    // 가수와 앨범 정보를 기반으로 데이터를 가져오는 비동기 함수
    return new Promise((resolve, reject) => {
      // 가수와 앨범 정보를 기반으로 데이터를 가져오는 로직을 구현해주세요.
      if (this.albumId === 'cocktail') {
        resolve({
          originArtist: '마로니에',
          albumDescription:` 
마음 울적한 날엔 거리를 걸어보고
향기로운 칵테일에 취해도 보고
한 편의 시가 있는 전시회장도 가고
밤새도록 그리움에 편질 쓰고파
모차르트 피아노 협주곡 21번
그 음악을 내 귓가에 속삭여주며
아침햇살 눈부심에 나를 깨워줄
그런 연인이 내게 있으면
나는 아직 순수함을 느끼고 싶어
어느 작은 우체국 앞 계단에 앉아
프리지아 꽃향기를 내게 안겨줄
그런 연인을 만나봤으면
마음 울적한 날엔 거리를 걸어보고
향기로운 칵테일에 취해도 보고
한 편의 시가 있는 전시회장도 가고
밤새도록 그리움에 편질 쓰고파
모차르트 피아노 협주곡 21번
그 음악을 내귓가에 속삭여주며
아침햇살 눈부심에 나를깨워줄
그런 연인이 내게있으면
나는 아직 순수함을 느끼고 싶어
어느 작은 우체국 앞 계단에 앉아
프리지아 꽃향기를 내게 안겨줄
그런 연인을 만나봤으면
마음 울적한 날엔 거리를 걸어보고
향기로운 칵테일에 취해도보고
한편의 시가 있는 전시회장도 가고
밤새도록 그리움에 편질 쓰고파`,
          albumImage: require('../assets/img/cocktail.jpeg'),
        });
      } else if(this.albumId === 'akmu') {
        resolve({
          originArtist: 'AKMU',
          albumDescription: `
일부러 몇 발자국 물러나
내가 없이 혼자 걷는 널 바라본다
옆자리 허전한 너의 풍경
흑백 거리 가운데 넌 뒤돌아본다
그때 알게 되었어
난 널 떠날 수 없단 걸
우리 사이에 그 어떤 힘든 일도
이별보단 버틸 수 있는 것들이었죠
어떻게 이별까지 사랑하겠어
널 사랑하는 거지
사랑이라는 이유로 서로를 포기하고
찢어질 것같이 아파할 수 없어 난
두세 번 더 길을 돌아갈까
적막 짙은 도로 위에 걸음을 포갠다
아무 말 없는 대화 나누며
주마등이 길을 비춘 먼 곳을 본다
그때 알게 되었어
난 더 갈 수 없단 걸
한 발 한 발 이별에 가까워질수록
너와 맞잡은 손이 사라지는 것 같죠
어떻게 이별까지 사랑하겠어
널 사랑하는 거지
사랑이라는 이유로 서로를 포기하고
찢어질 것같이 아파할 수 없어 난`,
          albumImage: require('../assets/img/akmu.jpg'),
        });
      } else if(this.albumId === 'bubble') {
        resolve({
          originArtist: 'NewJeans',
          albumDescription: `
You just got my heart pump pumpin'
Every time that you're here around me
노랫 소리가 또 흘러나와 yeah
오늘 오래 걸린 이유
I'm always so excited to meet you
내 향기가 널 먼저 찾아가
눈 감아도 기억나게
어디라도 따라갈래
You're so delicate 거품 속에
숨었네 uh uh uh
Oh you make my heart melt away
You're a softie 구름 같아
이건 말로 설명 못해
You got me oh oh
이미 우린
저기 멀리
높이 있는
풍선같이
Have you right here
In a basket
Oh my baby
Sweet like bubble gum
Bouncing like playing ball
더 높이 올려줘
We're gonna ﬂy away
Sweet like bubble yum
So smooth, soft like a hug
더 멀리 날려줘
Let's go far away
You're my favorite flavor
Bubble gum
Bubble Bubble Bubble Bubble Bubble Bubble
Bubble Bubble Bubble Gum
오늘 오래 걸린 이유
I'm always so excited to meet you
내 향기가 널 먼저 찾아가
나만 알고 싶은 비밀
All I know is I need this feeling
내 윤기가 널 먼저 사로잡아 yeah
눈 감아도 기억나게
어디라도 따라갈래
You're so delicate 거품 속에
숨었네 uh uh uh
Oh you make my heart melt away
You're a softie 구름 같아
이건 말로 설명 못해
You got me oh oh
Sweet like bubble gum
Bouncing like playing ball
더 높이 올려줘
We're gonna ﬂy away
Sweet like bubble yum
So smooth, soft like a hug
더 멀리 날려줘
Let's go far away
눈 감아도 기억나게
어디라도 따라갈래
You're so delicate 거품 속에
숨었네 uh uh uh
Oh you make my heart melt away
You're a softie 구름 같아
이건 말로 설명 못해
You got me oh oh
이미 우린
저기 멀리
높이 있는
풍선같이
Have you right here
In a basket
Oh my baby
Sweet like bubble gum
이미 우린
저기 멀리
높이 있는
풍선같이
Have you right here
In a basket
Oh my baby
Sweet like bubble gum`,
          albumImage: require('../assets/img/bubble.jpeg'),
        });
      } else {
        reject(new Error('가수와 앨범 정보에 해당하는 데이터를 찾을 수 없습니다.'));
      }
    });
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
    },
    onPause() {
      this.isPlaying = false;
    }

}
};
</script>


<style scoped>
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");
header, .container {
	font-family: 'Pretendard', sans-serif;
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

.box, .end-ellipse {
  width: 100vw;
  height: auto;
  pointer-events: none;
}
.end-ellipse {
  z-index: -1;
  height:150px;
}

.album-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -200px;
}
.lp{
  width: 300px;
  height: 100%;
  z-index: -1;
}
.spinning {
  animation: spin 2s infinite linear;
}

.album-cover{
  width: 300px;
  height: 100%;
  margin-top:-150px;
}

.audio-player {
  width: 100%;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:10vh;
  padding: 20px;
  border-radius: 50px;
  width: 100%;
  max-width: 600px;
}
.title{
  color: #7782FF;
  font-size: 24px;
  font-weight: bolder;
  width:100vw;
  text-align: center;
}
.origin-artist{
  color: #7782FF;
  margin-top: 10px;
  font-size: 18px;
}
.detail{
  margin-top: 4px;
  line-height: 35px;
  font-size: 16px;
  color: white;
  white-space: pre-wrap;
  text-align: center;
}

.qr-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  color:#7782FF;
  font-size:1em;
  font-weight: bold;
}
.qrimg-container{
  margin-top:30px;
  display: flex;
  justify-content: center;
  color: white;
}

.insta-qr-container, .ytube-qr-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
}

.insta-qr, .ytube-qr {
  width: 8vw;
  height: auto;
  margin: 0 20px;
}

.footer-logo{
  margin-top: 100px;
  width: 50px;
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
</style>