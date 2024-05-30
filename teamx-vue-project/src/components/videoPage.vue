<template>
  <header>
    <img class="logo" src="../assets/img/logo.png" @click="goToMainPage" alt="">
  </header>
  <div class="container">
    <img class="box" src="../assets/img/Ellipse_top.png" alt="">
    <div class="video-container">
      <video v-if="videoSource" :src="videoSource" controls autoplay controlsList="nodownload"></video>
      <!-- <video v-if="videoSource" :src="videoSource" controls></video> -->
      <div v-else>
        <p>비디오를 찾을 수 없습니다.</p>
      </div>
      <div class="song-title"> {{ albumName }} - {{ singerName }} </div>
      <div class="origin-artist">{{ originArtist }}</div>
    </div>
    <div class="video-text-container">
      <div class="album-container">
        <img class="album-cover" :src="artistImage" :alt="singerName">
        <img class="lp" src="../assets/img/lp.png" alt="">
      </div>
      <p class="snps"> {{ albumDescription }} </p>
    </div>
    <div class="detail-container">
      <div>
        <div class="detail-title">뮤직비디오 해석</div>
        <p class="detail" v-for="i in 10" :key="i">
          {{ mvInterpretation }}
        </p>
      </div>
      <img class="poster" :src="artistImage" :alt="singerName">
    </div>
    <div class="behind-container">
      <div class="behind-title">
        제작 과정 / 비하인드 컷
      </div>
      <div class="behindimg-container">
        <img v-for="(img, index) in behindSources" :key="index" :src="img" :alt="singerName">
      </div>
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
    <img class="footer-logo" src="../assets/img/BI.png" @click="goToMainPage" alt="">
    <img class="end-ellipse" src="../assets/img/Ellipse_bottom.png" alt="">
  </div>
</template>

<script>
export default {
  props: ['singerId', 'singerName','albumId', 'albumName'],
  data() {
    return {
      originArtist: '', // 원곡 아티스트
      albumDescription: '', // 앨범 설명
      mvInterpretation: '',
      artistImage: '' // 가수 이미지#
    };
  },
  computed: {
    videoSource() {
      if (this.singerId !== undefined && this.albumId !== undefined) {
        return require(`../assets/video/${this.singerId}_${this.albumId}.mp4`);

      } else {
        return require('../assets/video/test.mp4');
      }
    },
    behindSources() {
      let images = [];
      for (let i = 1; i <= 6; i++) {
        images.push(require(`@/assets/img/behind${i}.png`));
      }
      return images;
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
        this.mvInterpretation = albumInfo.mvInterpretation;
        this.artistImage = albumInfo.artistImage
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
            mvInterpretation: '폰서트 김광석 버전의 뮤비 해석입니다.',
            // artistImage: require('../assets/img/kim_10cm.png'),
          });
        } else if(this.singerId === 'mujin' && this.albumId === '10cm') {
          resolve({
            originArtist: '원곡 아티스트: 10cm',
            albumDescription: '원곡 신해철의 그대에게 이무진 버전의 앨범 설명입니다.',
            mvInterpretation: '폰서트 김광석 버전의 뮤비 해석입니다.',
            // artistImage: require('../assets/img/mujin_10cm.jpeg'),
          });
        } else if(this.singerId === 'yerin' && this.albumId === '10cm') {
          resolve({
            originArtist: '원곡 아티스트: 10cm',
            albumDescription: '원곡 신해철의 그대에게 이무진 버전의 앨범 설명입니다.',
            mvInterpretation: '폰서트 김광석 버전의 뮤비 해석입니다.',
            // artistImage: require('../assets/img/yerin_10cm.jpeg'),
          });
        } else if(this.singerId === 'bibi' && this.albumId === '10cm') {
          resolve({
            originArtist: '원곡 아티스트: 10cm',
            albumDescription: '원곡 신해철의 그대에게 이무진 버전의 앨범 설명입니다.',
            mvInterpretation: '폰서트 김광석 버전의 뮤비 해석입니다.',
            // artistImage: require('../assets/img/bibi_10cm.jpeg'),
          });
        } else if(this.singerId === 'kim' && this.albumId === 'choi') {
          resolve({
            originArtist: '원곡 아티스트: 10cm',
            albumDescription: '원곡 신해철의 그대에게 이무진 버전의 앨범 설명입니다.',
            mvInterpretation: '폰서트 김광석 버전의 뮤비 해석입니다.',
            artistImage: require('../assets/img/kim_choi.jpg'),
          });
        } else if(this.singerId === 'mujin' && this.albumId === 'choi') {
          resolve({
            originArtist: '원곡 아티스트: 10cm',
            albumDescription: '원곡 신해철의 그대에게 이무진 버전의 앨범 설명입니다.',
            mvInterpretation: '폰서트 김광석 버전의 뮤비 해석입니다.',
            artistImage: require('../assets/img/mujin_choi.jpg'),
          });
        } else if(this.singerId === 'yerin' && this.albumId === 'choi') {
          resolve({
            originArtist: '원곡 아티스트: 10cm',
            albumDescription: '원곡 신해철의 그대에게 이무진 버전의 앨범 설명입니다.',
            mvInterpretation: '폰서트 김광석 버전의 뮤비 해석입니다.',
            artistImage: require('../assets/img/yerin_choi.jpg'),
          });
        } else if(this.singerId === 'bibi' && this.albumId === 'choi') {
          resolve({
            originArtist: '원곡 아티스트: 10cm',
            albumDescription: '원곡 신해철의 그대에게 이무진 버전의 앨범 설명입니다.',
            mvInterpretation: '폰서트 김광석 버전의 뮤비 해석입니다.',
            artistImage: require('../assets/img/bibi_choi.jpg'),
          });
        } else if(this.singerId === 'mujin' && this.albumId === 'geeks') {
          resolve({
            originArtist: '원곡 아티스트: 긱스',
            albumDescription: '완벽한 사랑의 노래 속 숨겨진 충격적인 이야기, 연인을 그리워하는 내용의 Officially Missing You를 team X가 재해석했다. 새로운 서사 속 감성의 미학가, 이무진 싱어송라이터의  Officially Missing You는 어떤 모습일까?',
            mvInterpretation: 'OMY 리무진 버전의 뮤비 해석입니다.OMY 리무진 버전의 뮤비 해석입니다.OMY 리무진 버전의 뮤비 해석입니다.',
            // artistImage: require('../assets/img/mujin_geeks.jpeg'),
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
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");
header, .container {
	font-family: 'Pretendard', sans-serif;
}

header{
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000; /* Keep the header on top */
}
.logo{
  width:50px;
  margin: 20px;
}
.container {
  width: 100%;
  height: auto;
  margin: 0;
  /* padding-top: 80px; */
  background-color: black; /* 배경색 지정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
}
.box, .end-ellipse {
  width: 100%;
  height:  auto;
  pointer-events: none;

}
.box{
  margin-top:-80px;
  
}
.end-ellipse {
  height:150px;
}

.video-container {
  margin-top:-150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
video{
  width:100vw;
}

.song-title{
  margin-top:50px;
  font-size: 2em;
  color: #7782FF;
  text-align: center;
}
.origin-artist{
  color: #7782FF;
  margin-top: 10px;
  font-size: 1em;
  text-align: center;
}

.video-text-container{
  margin-top: 30px;
  padding: 20px;
  display: flex;
  width:50%;
  justify-content: space-between;
  align-items: center;
}
.album-container{
  display: flex;
  align-items: center;
  position: relative;
}
.album-cover{
  width: 60%;
  max-width: 500px;
  z-index: 1;

}
.lp{
  width: 60%;
  position: absolute;
  left: 50%;
  transform: translateX(-40%);
}
.snps{
  margin-left: 90px;
  margin-top: 20px;
  color: white;
  font-size: 1em;
  width: 70%;
  text-align: justify;
  line-height: 1.5em;
  min-width: 300px;
  max-width: 800px;
}

.detail-container{
  display: flex;
  padding: 20px;
  margin-top: 50px;
  width:50%;
  justify-content: space-between;
  align-items: center;
}
.detail-title{
  color:#7782FF;
  font-size: 1.5em;
  margin-bottom: 20px;
}
.detail{
  color:white;
  line-height: 1.5em;
  text-align: justify;
  width: 100%;
  min-width: 250px;
}
.poster{
  margin-left: 5vw; /* Adjusted margin using vw */
  width: 20vw; /* Width as a percentage of the viewport width */
  height: 27vw; /* Height as a percentage of the viewport height */
  object-fit: cover;
  border-radius: 18px;
  margin-top: 2vh; /* Adjusted margin-top using vh */
}

.behind-container{
  display: flex;
  flex-direction: column;
  color: #7782FF;
  margin-top:100px;
  font-size:1.25em;
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
  height:auto;
  max-height: 400px;
  /* object-fit: contain; */
  object-fit: cover;
}
.behindimg-container img:nth-child(1) {
  width: 34%;
}
.behindimg-container img:nth-child(2){
  width: 25%;
}
.behindimg-container img:nth-child(3){
  width: 40%;
}
.behindimg-container img:nth-child(6) {
  width: 25%;
}
.behindimg-container img:nth-child(4) {
  width: 32%;
}
.behindimg-container img:nth-child(5) {
  width: 42%;
}

.qr-container{
  display: flex;
  margin-top: 100px;
  color: #7782FF;
  flex-direction: column;
  align-items: center;
  font-size:1em;
}
.qrimg-container{
  margin-top:20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.qrimg-container img {
  width: 10vw;
  height: auto;
  margin: 10px;
}

.footer-logo{
  margin-top: 100px;
  width: 50px;
}


@media (max-width: 768px) {
  .song-title {
    font-size: 1.5em;
  }
  .origin-artist {
    font-size: 0.9em;
  }
  .video-text-container {
    padding: 10px;
    width: 95%;
  }
  .album-cover, .lp {
    width: 70%;
    max-width: 400px;
  }
  .snps {
    font-size: 0.9em;
    width: 100%;
  }
  .detail-container {
    width: 95%;
  }
  .detail-title {
    font-size: 1.3em;
  }
  .detail {
    font-size: 0.9em;
  }
  .poster {
    margin-left: 4vw; /* Adjusted margin for medium screens */
    width: 25vw; /* Width for medium screens */
    height: 32vw; /* Height for medium screens */
    margin-top: 2vh; /* Adjusted margin-top */
  }
  .behind-container {
    width: 95%;
  }
  .behind-title {
    font-size: 1.2em;
  }
  .qrimg-container img {
    width: 80px;
    height: 80px;
  }
  .footer-logo {
    width: 40px;
  }
}

@media (max-width: 480px) {
  .song-title {
    font-size: 1.2em;
  }
  .origin-artist {
    font-size: 0.8em;
  }
  .video-text-container {
    padding: 5px;
    width: 98%;
  }
  .album-cover, .lp {
    width: 80%;
    max-width: 300px;
  }
  .snps {
    font-size: 0.8em;
    width: 100%;
  }
  .detail-container {
    width: 98%;
  }
  .detail-title {
    font-size: 1.1em;
  }
  .detail {
    font-size: 0.8em;
  }
  .poster {
    margin-left: 3vw; /* Adjusted margin for small screens */
    width: 30vw; /* Width for small screens */
    height: 37vh; /* Height for small screens */
    margin-top: 1.5vh; /* Adjusted margin-top */
  }
  .behind-container {
    width: 98%;
  }
  .behind-title {
    font-size: 1em;
  }
  .qrimg-container img {
    width: 60px;
    height: 60px;
  }
  .footer-logo {
    width: 30px;
  }
}
</style>