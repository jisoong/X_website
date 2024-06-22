<template>
    <header>
      <img class="logo" src="../assets/img/logo.png" @click="goToMainPage" alt="">
    </header>

    <div class="container" :style="{ '--bg-image': 'url(' + albumImage + ')' }">
        <div class="album-container">
            <img :class="['lp', { spinning: isPlaying }]" src="../assets/img/lp.png" alt="">
            <img class="album-cover" :src="albumImage" alt="">
        </div>
        <div class="audio-player">
          <!-- <audio ref="audioPlayer" controls autoplay> -->
          <audio ref="audioPlayer" controls @play="onPlay" @pause="onPause">
            <source v-if="musicSource" :src="musicSource" type="audio/mpeg">
          </audio>
        </div>
        <div class="text-container">
            <div class="title"> {{ albumName }} - {{ singerNames }} </div>
            <div class="origin-artist"> 원곡 아티스트: {{ originArtist }} </div>
            <pre>


                
            </pre>
            <pre class="detail">
              {{ albumDescription }}
            </pre>
        </div>
        <div class="qr-container">
          <div>
            teamX가 궁금하다면
          </div>
          <div class="qrimg-container">
            <a href="https://www.instagram.com/xteamx2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@xteamx2024" target="_blank">
                <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
        <img class="footer-logo" src="../assets/img/BI.png" alt="" @click="goToMainPage">
        <!-- <img class="end-ellipse" src="../assets/img/Ellipse_end.png" alt=""> -->
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
      albumImage: '', 
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
          if (this.$refs.audioPlayer) {
            this.$refs.audioPlayer.play();
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
            albumImage: require('../assets/img/akmu.jpeg'),
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
header,.album-container,.audio-player,.text-container {
	font-family: 'Pretendard', sans-serif;
}

header{
  position: fixed;
  z-index:10;
}
.logo{
  width:30px;
  margin-top: 20px;
  padding-left: 20px;
  z-index:10;
}
.box, .end-ellipse {
  width: 100vw;
  height:  auto;
  pointer-events: none;
}
.end-ellipse {
  width: 100vw;
  height:  auto;
  z-index: -1;
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
  pointer-events: none; /* 클릭 이벤트 비활성화 */
  content: '';
  position: fixed; 
  /* top: -40px;  */
  left: -40px; 
  width: calc(100% + 80px); 
  height: calc(100% + 80px);
  background-image: var(--bg-image);
  background-position: center;
  background-size: cover;
  filter: blur(40px) brightness(0.3);
  /* filter: blur(40px);  */
  z-index: -1; 
  background-clip: padding-box; 
  
}
.audio-player {
  width: 80%;
  margin-top: 40px;
  display: flex;
  align-items: center;

}
audio{
  width: 90%;
  margin: 0 auto;
}
.album-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
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
.text-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:12vh;
    /* background-color: #f0f0f0; */
    padding: 40px;
    border-radius: 50px;
    width: 60%
}
.title{
    color: #7782FF;
    font-size: 20px;
    font-weight: bolder;
}
.origin-artist{
    color: #7782FF;
    margin-top: 10px;
    font-size: 17px;
}
.detail{
    margin-top: 4px;
    line-height: 25px;
    font-size: 0.9em;
    color: white;
    text-align: center;
    line-height:30px;
}
.qr-container{
  display: flex;
  margin-top: 70px;
  color:#7782FF;
  flex-direction: column;
  align-items: center;
  font-size:20px;
}

.qrimg-container{
  margin-top:20px;
}

.fa-instagram{
    font-size: 60px;
    padding: 10px;
}
  
.fa-youtube{
    font-size: 60px;
    padding: 10px;
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

.logo-container{
  width:100vw;
  opacity: 0.75;
} 


.footer-logo{
  margin-top: 100px;
  width: 40px;
  margin-bottom: 50px;
  z-index: 2;
}


a {
    color: inherit; /* Inherit color from parent element */
    text-decoration: none; /* Remove underline */
}

a:visited, a:active {
    color: inherit; /* Keep the same color when visited or active */
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


@media (min-width: 768px) {
  .logo{
    width: 40px;
  }
  .footer-logo{
    width: 60px;
  }
}
@media (min-width: 1024px) {
  .logo{
    width: 50px;
  }
  .footer-logo{
    width: 80px;
  }
}
</style>