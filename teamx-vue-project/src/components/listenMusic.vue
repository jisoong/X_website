<template>
    <audio ref="audioPlayer" autoplay>
        <!-- <source src="../assets/music/kim_cocktail.mp3" type="audio/mpeg"> -->
        <source v-if="musicSource" :src="musicSource" type="audio/mpeg">
    </audio>
    <div class="container" :style="{ '--bg-image': 'url(' + albumImage + ')' }">
        <div class="album-container">
            <img class="lp" src="../assets/img/lp.png" alt="">
            <!-- <img class="album-cover" src="../assets/img/mujin_cocktail.png" alt=""> -->
            <img class="album-cover" :src="albumImage" alt="">
        </div>
        <div class="text-container">
            <div class="title"> {{ albumName }} - {{ singerName }} </div>
            <div class="origin-artist"> 원곡 아티스트: {{ originArtist }} </div>
            <pre>


                
            </pre>
            <p class="detail" v-for="i in 10" :key="i">
            {{ albumDescription }}
            </p>
        </div>
        <div class="qr-container">
            <img :src="instaqrImage" :alt="instaQRImage" class="insta-qr">
            <img :src="ytubeqrImage" :alt="ytubeQRImage" class="ytube-qr">
        </div>
        <button class="select-again" @click="goToSelectPage" > 다시 선택하러 가기 </button>
        <button class="goto-main" @click="goToMainPage" > 메인으로 돌아가기 </button>
        <img class="footer-logo" src="../assets/img/BI.png" alt="">
    </div>
</template>

<script>
export default{
  props: ['singerId', 'singerName','albumId', 'albumName'],
  data() {
    return {
      originArtist: '', // 원곡 아티스트
      albumDescription: '', // 앨범 설명
      instaqrImage: '', // QR 이미지 배열
      ytubeqrImage: '',
      albumImage: '' 
    };
  },
  computed: {
    musicSource() {
      if (this.singerId !== undefined && this.albumId !== undefined) {
        return require(`../assets/music/${this.singerId}_${this.albumId}.mp3`);

      } else {
        return require('../assets/music/intro.mp3');
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
        this.albumImage = albumInfo.albumImage
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
        if (this.singerId === 'kim' && this.albumId === 'cocktail') {
          resolve({
            originArtist: '마로니에',
            albumDescription: '원곡 마로니에의 칵테일 사랑 김광석 버전의 앨범 설명입니다.',
            instaqrImage: require('../assets/img/kim_cocktail_insta_qr.png'),
            ytubeqrImage: require('../assets/img/kim_cocktail_ytube_qr.png'),
            albumImage: require('../assets/img/kim_cocktail.png'),
          });
        } else if(this.singerId === 'mujin' && this.albumId === 'akmu') {
          resolve({
            originArtist: '악뮤',
            albumDescription: '원곡 악뮤의 어떻게 이별까지 사랑하겠어, 널 사랑하는거지 이무진 버전의 앨범 설명입니다.',
            instaqrImage: require('../assets/img/mujin_akmu_insta_qr.png'),
            ytubeqrImage: require('../assets/img/mujin_akmu_ytube_qr.png'),
            albumImage: require('../assets/img/mujin_akmu.png'),
          });
        } else {
          reject(new Error('가수와 앨범 정보에 해당하는 데이터를 찾을 수 없습니다.'));
        }
      });
    },
    goToSelectPage() {
      this.$router.push('/selectListen')
    },
    goToMainPage() {
      this.$router.push('/')
    },
  }
}
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  /* overflow: hidden; */
  overflow-x: hidden;
  --bg-image: url('../assets/img/10cm.jpeg');
}

.container::before {
  pointer-events: none; /* 클릭 이벤트 비활성화 */
  content: '';
  position: fixed; 
  top: -40px; 
  left: -40px; 
  width: calc(100% + 80px); 
  height: calc(100% + 80px);
  background-image: var(--bg-image);
  background-size: cover;
  filter: blur(30px); 
  z-index: -1; 
  background-clip: padding-box; 
  
}

.album-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:12vh;
}
.lp{
    width: 300px;
    height: 100%;
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
    background-color: #f0f0f0;
    padding: 40px;
    border-radius: 50px;
    width: 60%
}
.title{
    color: #172BFF;
    font-size: 30px;
    font-weight: bolder;
}
.origin-artist{
    color: #172BFF;
    margin-top: 10px;
    font-size: 20px;
}
.detail{
    margin-top: 4px;
}
.qr-container{
  display: flex;
  margin-top: 50px;
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

.logo-container{
  width:100vw;
  opacity: 0.75;
} 


.footer-logo{
  margin-top: 60px;
  padding-top: 120px;
  width: 80px;
  padding-bottom: 100px;
  background-color : rgb(0,0,0,0.5);
  padding-left:50vw;
  padding-right:50vw;
}
</style>