<template>
  <header>
    <img class="logo" src="../assets/img/logo.png" @click="goToMainPage" alt="">
  </header>

  <div class="container" :style="{ '--bg-image': 'url(' + albumImage + ')' }">
      <img class="box" src="../assets/img/Ellipse.png" alt="">
      <div class="album-container">
          <img class="lp" src="../assets/img/lp.png" alt="">
          <img class="album-cover" :src="albumImage" alt="">
      </div>
      <div class="audio-player">
        <audio ref="audioPlayer" controls autoplay>
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
          <img src="../assets/img/teamxinsta_qr.png" class="insta-qr">
          <img src="../assets/img/teamxytube_qr.png" class="ytube-qr">
        </div>
      </div>
      <img class="footer-logo" src="../assets/img/BI.png" alt="" @click="goToMainPage">
      <img class="end-ellipse" src="../assets/img/Ellipse_end.png" alt="">
    </div>
</template>

<script>
export default {
props: ['singerIds', 'singerNames', 'albumId', 'albumName'],
data() {
  return {
    originArtist: '', // 원곡 아티스트
    albumDescription: '', // 앨범 설명
    albumImage: '' 
  };
},
computed: {
  musicSource() {
    const singerIdArray = this.singerIds.split(',');

    if (singerIdArray.length > 0 && this.albumId !== undefined) {
      return require(`../assets/music/${singerIdArray[0]}_${singerIdArray[1]}_${this.albumId}.mp3`);
    } else {
      console.log(this.singerIds[0]);
      return require('../assets/music/intro.wav');
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
      if (this.singerIds === 'kim,mujin' && this.albumId === 'cocktail') {
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
모차르트 피아노 협주곡 21번`,
          albumImage: require('../assets/img/kim_mujin_cocktail.png'),
        });
      } else if(this.singerIds === 'mujin,yerin' && this.albumId === 'akmu') {
        resolve({
          originArtist: '악뮤',
          albumDescription: '원곡 악뮤의 어떻게 이별까지 사랑하겠어, 널 사랑하는거지 이무진,백예린 버전의 앨범 설명입니다.',
          albumImage: require('../assets/img/mujin_yerin_akmu.png'),
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
}
};
</script>


<style scoped>
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
  filter: blur(40px); 
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
  animation: spin 2s infinite linear;   
  z-index: -1;
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
  color: #172BFF;
  font-size: 24px;
  font-weight: bolder;
}
.origin-artist{
  color: #172BFF;
  margin-top: 10px;
  font-size: 18px;
}
.detail{
  margin-top: 4px;
  line-height: 25px;
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
  color:#172BFF;
  font-size:18px;
}
.qrimg-container{
  margin-top:20px;
  display: flex;
  justify-content: center;
}
.insta-qr, .ytube-qr {
  width: 150px;
  height: auto;
  margin: 0 10px;
}

.footer-logo{
  margin-top: 100px;
  width: 50px;
  z-index: 2;
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