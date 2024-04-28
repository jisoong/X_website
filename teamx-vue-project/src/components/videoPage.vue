<template>
  <div class="container">
    <div class="video-container">
      <!-- <video v-if="videoSource" :src="videoSource" controls autoplay></video> -->
      <video v-if="videoSource" :src="videoSource" controls autoplay></video>
      <div v-else>
        <p>비디오를 찾을 수 없습니다.</p>
      </div>
    </div>
    <div class="video-text">
      <img :src="artistImage" :alt="singerName">
      <div class="text-container">
        <div class="song-title"> {{ albumName }} - {{ singerName }} </div>
        <div class="origin-artist">{{ originArtist }}</div>
        <pre>

        </pre>
        <p class="detail" v-for="i in 10" :key="i">
          {{ albumDescription }}
        </p>
      </div>
    </div>
    <div class="qr-container">
      <img :src="instaqrImage" :alt="instaQRImage" class="insta-qr">
      <img :src="ytubeqrImage" :alt="ytubeQRImage" class="ytube-qr">
    </div>
    <button class="select-again" @click="goToSelectPage" > 다시 선택하러 가기 </button>
    <button class="goto-main" @click="goToMainPage" > 메인으로 돌아가기 </button>
      <!-- <h1>{{ singerName }}의 {{ albumName }}</h1> -->
    <img class="footer-logo" src="../assets/img/BI.png" alt="">
  </div>
</template>

<script>
export default {
  props: ['singerId', 'singerName','albumId', 'albumName'],
  data() {
    return {
      originArtist: '', // 원곡 아티스트
      albumDescription: '', // 앨범 설명
      instaqrImage: '', // QR 이미지 배열
      ytubeqrImage: '',
      artistImage: '' // 가수 이미지
    };
  },
  computed: {
    videoSource() {
      if (this.singerId !== undefined && this.albumId !== undefined) {
        return require(`../assets/video/${this.singerId}_${this.albumId}.mp4`);

      } else {
        return require('../assets/video/test.mp4');
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
        this.instaqrImage = albumInfo.instaqrImage;
        this.artistImage = albumInfo.artistImage
        this.ytubeqrImage = albumInfo.ytubeqrImage
      } catch (error) {
        console.error('데이터를 가져오는 도중 오류가 발생했습니다:', error);
        // 에러 처리
      }
    },
    fetchAlbumInfo() {
      // 가수와 앨범 정보를 기반으로 데이터를 가져오는 비동기 함수
      return new Promise((resolve, reject) => {
        // 가수와 앨범 정보를 기반으로 데이터를 가져오는 로직을 구현해주세요.
        if (this.singerId === 'kim' && this.albumId === '10cm') {
          resolve({
            originArtist: '원곡 아티스트: 10cm',
            albumDescription: '원곡 10cm의 폰서트 김광석 버전의 앨범 설명입니다.',
            instaqrImage: require('../assets/img/kim_10cm_insta_qr.png'),
            ytubeqrImage: require('../assets/img/kim_10cm_ytube_qr.png'),
            artistImage: require('../assets/img/kim_10cm.png'),
          });
        } else if(this.singerId === 'mujin' && this.albumId === 'shin') {
          resolve({
            originArtist: '원곡 아티스트: 신해철',
            albumDescription: '원곡 신해철의 그대에게 이무진 버전의 앨범 설명입니다.',
            instaqrImage: require('../assets/img/mujin_shin_insta_qr.png'),
            ytubeqrImage: require('../assets/img/mujin_shin_ytube_qr.png'),
            artistImage: require('../assets/img/mujin_shin.png'),
          });
        } else {
          reject(new Error('가수와 앨범 정보에 해당하는 데이터를 찾을 수 없습니다.'));
        }
      });
    },
    goToSelectPage() {
      this.$router.push('/selectWatch')
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
  padding: 40px;
  background-color: #f0f0f0;
  border-radius: 50px;
  display: flex;
  width:60%;
}

video{
  margin-top: 10vh;
  width:65%;
  /* padding: 4%; */
  background-color: #f0f0f0;
  /* border-radius: 50px; */
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

}

.insta-qr{
  margin-right:15px;
  width: 200px;
  height: 100%;
}

.ytube-qr{
  margin-left:15px;
  width: 200px;
  height: 100%
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


