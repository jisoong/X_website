<template>
    <header>
      <img class="logo" src="../assets/img/logo.png" @click="goToMainPage" alt="">
    </header>
    <div class="container">
      <!-- <img class="box" src="../assets/img/Ellipse_top.png" alt=""> -->
      <div class="video-container">
        <video v-if="videoSource" :src="videoSource" controls autoplay loop></video>
        <!-- <video v-if="videoSource" :src="videoSource" controls></video> -->
        <div v-else>
          <p>비디오를 찾을 수 없습니다.</p>
        </div>
        <div class="song-title"> {{ albumName }} - {{ singerName }} </div>
        <div class="origin-artist">{{ originArtist }}</div>
      </div>
      <div class="video-text">
        <div class="album-container">
          <img class="album-cover" :src="artistImage" :alt="singerName">
          <img class="lp" src="../assets/img/lp.png" alt="">
        </div>
        <p class="snps"> {{ albumDescription }} </p>
      </div>
      <div class="detail-container">
        <div class="detail-title">뮤직비디오 해석</div>
        <img class="poster" :src="artistImage" :alt="singerName">
        <p class="detail" v-for="i in 10" :key="i">
            이무진의 officially missing you 뮤직비디오 설명입니다
        </p> 
    </div>
      <div class="behind-container">
        <div class="behind-title">
          제작 과정 / 비하인드 컷
        </div>
        <div class="behindimg-container">
          <img :src="artistImage" :alt="singerName">
          <img :src="artistImage" :alt="singerName">
          <img :src="artistImage" :alt="singerName">
          <img :src="artistImage" :alt="singerName">
          <img :src="artistImage" :alt="singerName">
          <img :src="artistImage" :alt="singerName">
        </div>
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
      <img class="footer-logo" src="../assets/img/BI.png" @click="goToMainPage" alt="">
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
              artistImage: require('../assets/img/mujin_shin.jpeg'),
            });
          } else if(this.singerId === 'mujin' && this.albumId === 'geeks') {
            resolve({
              originArtist: '원곡 아티스트: 긱스',
              albumDescription: '완벽한 사랑의 노래 속 숨겨진 충격적인 이야기, 연인을 그리워하는 내용의 Officially Missing You를 team X가 재해석했다. 새로운 서사 속 감성의 미학가, 이무진 싱어송라이터의  Officially Missing You는 어떤 모습일까?',
              instaqrImage: require('../assets/img/mujin_shin_insta_qr.png'),
              ytubeqrImage: require('../assets/img/mujin_shin_ytube_qr.png'),
              artistImage: require('../assets/img/mujin_shin.jpeg'),
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
header{
    position: fixed;
}
.logo{
    width:25px;
    margin-top: 20px;
    padding-left: 20px;
    z-index: 2;
}
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
    /* z-index: 2; */
    margin-top:70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
  
video{
    width:100vw;
}

.song-title{
    text-align: center;
    margin-top:30px;
    color: #7782FF;
}
.origin-artist{
    color: #7782FF;
    font-size: 15px;
    text-align: center;
    margin-top: 10px;
}
.video-text{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.album-container{
    display: flex;
    align-items: center;
    justify-content: center;
}
.album-cover{
    width: 200px;
    height: 200px;
    z-index: 1;
}
.lp{
    width: 200px;
    margin-left: -100px;
    height: 200px;
    z-index: 0;
}

.snps{
    margin-top: 20px;
    color: white;
    font-size: 14px;
    text-align: center;
    line-height: 25px;
}

.detail-container{
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
}
.detail-title{
    color:#7782FF;
    font-size: 20px;
    width:85%;
    margin-bottom: 20px;
}
.poster{
    width:300px;
    height: 200px;
    object-fit: cover;
    border-radius: 18px;
    margin-bottom:50px;
}

.detail{

    color:white;
    line-height: 20px;
}

.behind-container{
    display: flex;
    flex-direction: column;
    color: #7782FF;
    margin-top:100px;
    font-size:20px;
    width:80%;
}
.behindimg-container{
    margin-top:20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; 

}
.behindimg-container img {
    margin-bottom: 10px; 
    border-radius: 18px;
    height:150px;
    object-fit: cover;
}
  
.behindimg-container img:nth-child(1) {
    width: 40%;
}

.behindimg-container img:nth-child(2){
    width: 55%;
}

.behindimg-container img:nth-child(3){
    width: 60%;
}
.behindimg-container img:nth-child(4) {
    width: 35%;
}
.behindimg-container img:nth-child(5) {
    width: 37%;
}
.behindimg-container img:nth-child(6) {
    width: 58%;
}
  
.qr-container{
    display: flex;
    margin-top: 100px;
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
  
.goto-main{
    margin-bottom: 50px;
}
  
.footer-logo{
    margin-top: 100px;
    width: 50px;
    margin-bottom:50px;
}
  .box, .end-ellipse {
    width: 100vw;
    height:  auto;
    pointer-events: none;
  }
  .box{
    margin-top:-80px;
    z-index: 1;
  }
  .end-ellipse {
    width: 100vw;
    height:  auto;
  }

a {
    color: inherit; /* Inherit color from parent element */
    text-decoration: none; /* Remove underline */
}

a:visited, a:active {
    color: inherit; /* Keep the same color when visited or active */
}
  </style>
  
  
  