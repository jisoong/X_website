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
        <img class="album-cover" :src="albumCover" :alt="singerName">
        <img class="lp" src="../assets/img/lp.png" alt="">
      </div>
      <p class="snps"> {{ snps }} </p>
    </div>
    <div class="detail-container">
      <div>
        <div class="detail-title">뮤직비디오 해석</div>
        <div class="detail">
          {{ mvInterpretation }}
        </div>
      </div>
      <img class="poster" :src="poster" :alt="singerName">
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
      snps: '', // 시놉시스
      mvInterpretation: '', //앨범해석
      albumCover: '', // 앨범커버
      poster: '', //포스터
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
        this.snps = albumInfo.snps;
        this.mvInterpretation = this.getMvInterpretation(this.albumId); // albumId에 따른 해석 설정
        this.albumCover = albumInfo.albumCover
        this.poster = albumInfo.poster
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
            snps: '내가 좋아하는 아티스트가 어느날 나에게 영상통화를 걸었다. 연인과의 사랑을 담은 내용의 폰서트를 team X가 재해석했다. 김광석... 좋아하세요? 감성의 노래 선장, 김광석 아티스트의 숲은 어떤 모습일까?',
            albumCover: require('@/assets/img/kim_10cm.jpg'),
            poster: require('@/assets/img/kim_10cm_poster.jpeg')
          });
        } else if(this.singerId === 'mujin' && this.albumId === '10cm') {
          resolve({
            originArtist: '원곡 아티스트: 10cm',
            snps: '내가 좋아하는 아티스트가 어느날 나에게 영상통화를 걸었다. 연인과의 사랑을 담은 내용의 폰서트를 team X가 재해석했다.이무진... 좋아하세요? 감성의 미학가, 이무진 싱어송라이터의 숲은 어떤 모습일까?',
            albumCover: require('../assets/img/mujin_10cm.jpg'),
            poster: require('@/assets/img/mujin_10cm_poster.jpeg')
          });
        } else if(this.singerId === 'yerin' && this.albumId === '10cm') {
          resolve({
            originArtist: '원곡 아티스트: 10cm',
            snps: '내가 좋아하는 아티스트가 어느날 나에게 영상통화를 걸었다. 연인과의 사랑을 담은 내용의 폰서트를 team X가 재해석했다. 백예린... 좋아하세요? 감성을 빚어내는 예술가, 백예린 아티스트의 숲은 어떤 모습일까?',
            albumCover: require('../assets/img/yerin_10cm.jpg'),
            poster: require('@/assets/img/yerin_10cm_poster.jpg')
          });
        } else if(this.singerId === 'bibi' && this.albumId === '10cm') {
          resolve({
            originArtist: '원곡 아티스트: 10cm',
            snps: '내가 좋아하는 아티스트가 어느날 나에게 영상통화를 걸었다. 연인과의 사랑을 담은 내용의 폰서트를 team X가 재해석했다. 비비... 좋아하세요? 올라운더 아티스트, 가수 비비의 숲은 어떤 모습일까?',
            albumCover: require('../assets/img/bibi_10cm.jpg'),
            poster: require('@/assets/img/bibi_10cm_poster.jpg')
          });
        } else if(this.singerId === 'kim' && this.albumId === 'choi') {
          resolve({
            originArtist: '원곡 아티스트: 10cm',
            snps: `우리 마음속 '빙봉' 애착인형을 다들 기억하시나요?  team X는 최유리의 숲을 곰인형과 아이간의 애정을 담은 노래로 재해석 했다. 아련한 서사 속 감성의 노래 선장, 김광석 아티스트의 숲은 어떤 모습일까?`,
            albumCover: require('../assets/img/kim_choi.jpg'),
            // poster: require('@/assets/img/kim_choi_poster.jpg')
          });
        } else if(this.singerId === 'mujin' && this.albumId === 'choi') {
          resolve({
            originArtist: '원곡 아티스트: 10cm',
            snps: `우리 마음속 '빙봉' 애착인형을 다들 기억하시나요?  team X는 최유리의 숲을 곰인형과 아이간의 애정을 담은 노래로 재해석 했다. 아련한 서사 속 감성의 미학가, 이무진 싱어송라이터의 숲은 어떤 모습일까?`,
            albumCover: require('../assets/img/mujin_choi.jpg'),
            // poster: require('@/assets/img/mujin_choi_poster.jpg')
          });
        } else if(this.singerId === 'yerin' && this.albumId === 'choi') {
          resolve({
            originArtist: '원곡 아티스트: 10cm',
            snps: `우리 마음속 '빙봉' 애착인형을 다들 기억하시나요?  team X는 최유리의 숲을 곰인형과 아이간의 애정을 담은 노래로 재해석 했다. 아련한 서사 속 감성을 빚어내는 예술가, 백예린 아티스트의 숲은 어떤 모습일까?`,
            albumCover: require('../assets/img/yerin_choi.jpg'),
            // poster: require('@/assets/img/yerin_choi_poster.jpg')
          });
        } else if(this.singerId === 'bibi' && this.albumId === 'choi') {
          resolve({
            originArtist: '원곡 아티스트: 10cm',
            snps: `우리 마음속 '빙봉' 애착인형을 다들 기억하시나요?  team X는 최유리의 숲을 곰인형과 아이간의 애정을 담은 노래로 재해석 했다. 아련한 서사 속 올라운더 아티스트, 가수 비비의 숲은 어떤 모습일까?`,
            albumCover: require('../assets/img/bibi_choi.jpg'),
            // poster: require('@/assets/img/bibi_choi_poster.jpg')
            poster: require('@/assets/img/bibi_geeks_poster.jpg')

          });
        } else if(this.singerId === 'kim' && this.albumId === 'geeks') {
          resolve({
            originArtist: '원곡 아티스트: 긱스',
            snps: '완벽한 사랑의 노래 속 숨겨진 충격적인 이야기, 연인을 그리워하는 내용의 Officially Missing You를 team X가 재해석했다. 새로운 서사 속 감성의 노래 선장, 김광석 아티스트의  Officially Missing You는 어떤 모습일까?',
            albumCover: require('../assets/img/kim_geeks.jpg'),
            poster: require('@/assets/img/kim_geeks_poster.jpg')
          });
        } else if(this.singerId === 'mujin' && this.albumId === 'geeks') {
          resolve({
            originArtist: '원곡 아티스트: 긱스',
            snps: '완벽한 사랑의 노래 속 숨겨진 충격적인 이야기, 연인을 그리워하는 내용의 Officially Missing You를 team X가 재해석했다. 새로운 서사 속 감성의 미학가, 이무진 싱어송라이터의  Officially Missing You는 어떤 모습일까?',
            albumCover: require('../assets/img/mujin_geeks.jpg'),
            poster: require('@/assets/img/mujin_geeks_poster.jpg')

          });
        } else if(this.singerId === 'yerin' && this.albumId === 'geeks') {
          resolve({
            originArtist: '원곡 아티스트: 긱스',
            snps: '완벽한 사랑의 노래 속 숨겨진 충격적인 이야기, 연인을 그리워하는 내용의 Officially Missing You를 team X가 재해석했다. 새로운 서사 속 감성을 빚어내는 예술가, 백예린 아티스트의  Officially Missing You는 어떤 모습일까?',
            albumCover: require('../assets/img/yerin_geeks.jpg'),
            poster: require('@/assets/img/yerin_geeks_poster.jpg')

          });
        } else if(this.singerId === 'bibi' && this.albumId === 'geeks') {
          resolve({
            originArtist: '원곡 아티스트: 긱스',
            snps: '완벽한 사랑의 노래 속 숨겨진 충격적인 이야기, 연인을 그리워하는 내용의 Officially Missing You를 team X가 재해석했다. 새로운 서사 속  올라운더 아티스트, 가수 비비의  Officially Missing You는 어떤 모습일까?',
            albumCover: require('../assets/img/bibi_geeks.jpg'),
            poster: require('@/assets/img/bibi_geeks_poster.jpg')

          });
        } else {
          reject(new Error('가수와 앨범 정보에 해당하는 데이터를 찾을 수 없습니다.'));
        }
      });
    },
    getMvInterpretation(albumId) {
      const interpretations = {
        '10cm': `
TeamX는 폰서트를 어떻게 하면 더 좋은 스토리로 풀어나갈 수 있을지 고민하였다. 
좋은 스토리를 위해 원곡자인 10cm의 영상 자료를 여러 번 분석하였다. 
본래 폰서트의 원곡은 연인에게 영상통화를 하는 내용을 담고 있다. 
하지만 10cm의 공연 영상을 보면 마치 관객이 본인의 연인인 것처럼, 다정하게 공연하는 모습을 확인할 수 있었다. 
TeamX는 이를 보고 최근 유행하는 영상통화 팬 사인회를 떠올렸다. 
코로나19로 비대면 활동이 본격화되면서 등장한 새로운 팬 사인회 방식으로, 폰서트의 가사와 매우 잘 어울린다고 판단하였다.
하지만 팬 사인회 역시 행사의 성격이 강하다는 점에서 너무나도 달달한 폰서트의 가사와 약간의 괴리감이 있다고 느꼈다. 
'더욱 개인적인 상황, 더욱 아티스트와의 긴밀함을 강조하려면 어떻게 해야 할까?' 
우리는 영상통화 팬 사인회가 아닌, 정말 그 아티스트가 나에게 영상통화를 건다는 상황을 상정하고 영상을 기획하였다. 
중간중간 다양한 효과와 3D 애니메이션을 배치하여 이런 꿈같은 상황을 더욱 극대화하고, 
영상통화라는 특성을 살리기 위해 따뜻하고 채도가 약간 높은 색감을 설정하였다.
TeamX만의 폰서트 영상은 타 영상에 비해 큰 스토리를 담지 않았지만, 그만큼 편안한 시청이 가능하다. 
별 해석 없이 아티스트들의 폰서트를 즐기길 바란다.`,

        'choi': `
TeamX가 해석한 최유리의 숲은 인간 대 인간의 사랑 이야기를 넘어, 우리가 아낀 사물과 그 사물 간의 사랑이었다.
우리 팀은 그중 애착 인형에 주목하였다. 유년기 우리들은 모두 애착 인형과 함께 자라왔다. 
같은 인형이라도 지금의 그 인형이 아니면 안 되는, 찢어질 때까지 껴안고 있던 애착 인형. 어디서 산지도 모를 그 인형. 
인간이 갖는 사물 중 가장 ‘사랑’하는 것을 꼽으라면 애착 인형이 아닐까? 
TeamX는 애착 인형과 인간의 사랑 중 애착 인형 쪽에서 갖는 사랑을 이야기하고자 한다. 
인형이 처음 아이의 품에 안겨지던 순간부터 함께 놀던 순간을 놀이공원이라는 추억의 공간에서 보여준다.
스토리를 구상하며 애착 인형과 사람과의 애정은 인형 입장에서는 마냥 달콤하지는 않을 거라고 생각했다. 
인형이라 겪는 차원적 한계가 인간을 사랑하기 어려운 장애물로 느껴지기 때문이다. 
그렇다고 애착 인형이 인간을 사랑하길 포기했냐고 묻는다면 그건 아닐 것이다. 
인형과 사람의 사랑은 플라토닉 러브로 미지근하게 오래 유지될 테니까.
그래서 뮤직비디오 내에서도 곰 인형이 본인이 곰 인형임을 인지했지만 계속해서 인간을 사랑하는 내용을 담았다. 
이를 통해 잊고 있던 애착 인형과의 추억을 떠올리고 순수했던 그 시절을 상기하여 보는 이에게 뭉클한 감동을 주고자 한다.
“애착 인형과 인간의 사랑은 어쩌면 우리 모두의 첫사랑이 아닐까?”하는 소소한 질문을 던지며 이만 글을 마친다.`,

        'geeks': `
TeamX의 뮤직비디오 중 스토리가 가장 풍부한 영상을 고르라 한다면 
망설임 없이 Officially missing you를 고를 것이다. 
Officially missing you 원곡은 평범한 이별 스토리를 담은 노래다. 
우리는 이런 스토리를 파격적으로 재해석해보고자 했고, 
이에 “전 애인을 살해한 주인공이 부르는 노래”라는 다소 잔혹한 스토리가 탄생했다.
주인공은 이별하기 한달 전부터 애인이 본인을 싫어한다 착각하고, 데이트에서도 제대로 상대방을 보지 못한다. 
애인이 웃는지 우는지도 모른채 그저 ‘왜 날 싫어해?’라는 생각만 머리에 가득하다.
헤어지잔 얘기를 들은 날, 주인공은 격분한다. 
“네가 날 싫어하더니 결국 헤어지자고 하는구나. 난 납득할 수 없다.”며 이별을 부정하고 상대방과 말다툼을 한다.
상대방은 주인공과 제대로 된 대화가 불가능하다 생각해 잠깐 진정 후 이야기하자 권유한다. 
주인공은 진정하더라도 애인과 헤어진다는 결말은 변치 않는다는 걸 알기에 감정적으로 몰리게 된다.
주인공은 상대에 대한 분노, 그리고 인생에 대한 회의감에 빠져 결국 돌이킬 수 없는 선택을 한다. 
바로 애인을 살해하는 것.
그것이 어떤 결과를 낳게 될지는 더이상 고려사항이 아니었다.
싸늘하게 누워있는 애인을 보며 주인공은 그제서야 본인의 행동을 되돌아본다. 
자기합리화, 후회, 원망, 모든 부정적인 감정이 주인공의 머릿속을 꽉 채운다. 
그런지도 얼마나 지났을까,
주인공은 제대로된 과거를 떠올리게 되고 본인의 어설픈 착각이 소중한 사람을 죽였다는 걸 깨닫는다. 
공허해진 주인공은 죽은 애인 옆에서 노래를 부르고 그리워한다. 
사이렌소리, 문앞에 도착한 경찰. 주인공은 결국 체포되고 영상은 마무리 된다.
위 스토리를 최대한 영상내에 노출시키지 않고 은유적으로 표현하여 시청에 불편함을 느끼지 않게 하였다. 
또한 직접 그린 애니메이션을 통해 의미를 더했다. `,
      };

      return interpretations[albumId] || '앨범에 대한 해석 정보를 찾을 수 없습니다.';
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
  /* background-color: black; */
  background-color: white; 
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
  /* margin-top:-80px; */
  min-height: 150px;
  
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
  color: #172BFF;
  text-align: center;
}
.origin-artist{
  color: #172BFF;
  margin-top: 10px;
  font-size: 1em;
  text-align: center;
}

.video-text-container{
  margin-top: 30px;
  padding: 20px;
  display: flex;
  width:65vw;
  min-width: 600px;
  max-width: 1800px;
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
  /* color: white; */
  color: black;
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
  width:65vw;
  min-width: 600px;
  max-width: 1800px;
  justify-content: space-between;
  align-items: center;
}
.detail-title{
  color:#172BFF;
  font-size: 1.5em;
  margin-bottom: 20px;
}
.detail{
  /* color:white; */
  color:black;
  line-height: 40px;
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
  color: #172BFF;
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
  color: #172BFF;
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
  margin-bottom:-100px;
  z-index: 1;
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