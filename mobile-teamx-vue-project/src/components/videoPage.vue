<template>
    <header>
      <img class="logo" src="../assets/img/logo.png" @click="goToMainPage" alt="">
    </header>
    <div v-if="loading" class="loading-spinner">
      <!-- 로딩 스피너 또는 로딩 화면 -->
    </div>
    <div v-else class="container">
      <div class="video-container">
        <!-- <video v-if="videoSource" :src="videoSource" controls autoplay loop></video> -->
        <video ref="video" v-if="videoSource" :src="videoSource" autoplay controls playsinline controlsList="nodownload" preload="auto"></video>
        <div v-else>
          <p>비디오를 찾을 수 없습니다.</p>
        </div>
        <div class="song-title"> {{ albumName }} - {{ singerName }} </div>
        <div class="origin-artist">{{ originArtist }}</div>
      </div>
      <div class="video-text">
        <div class="album-container">
          <img class="album-cover" :src="albumCover" :alt="singerName">
          <img class="lp" src="../assets/img/lp.png" alt="">
        </div>
        <p class="snps" > {{ snps }} </p>
      </div>
      <div class="detail-container">
        <div class="detail-title">뮤직비디오 해석</div>
        <img class="poster" :src="poster" :alt="singerName">
        <p class="detail" v-html="mvInterpretation">
        </p> 
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
            <a href="https://www.instagram.com/xteamx2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@xteamx2024" target="_blank">
                <i class="fa-brands fa-youtube"></i>
            </a>
        </div>
      </div>
      <img class="footer-logo" src="../assets/img/teamX_mainBI.png" @click="goToMainPage" alt="">
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  import { nextTick } from 'vue';

  export default {
    props: ['singerId', 'singerName','albumId', 'albumName'],
    data() {
      return {
        originArtist: '', // 원곡 아티스트
        snps: '', // 앨범 설명
        mvInterpretation: '',
        albumCover: '', // 가수 이미지
        poster: ''
      };
    },
    computed: {
      ...mapState({
        loading: state => state.loading
      }),
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
          try {
            images.push(require(`@/assets/img/behind/${this.albumId}/${this.singerId}_${i}.png`));
          } catch (error) {
            images.push(require(`@/assets/img/behind/${this.albumId}/${this.singerId}_${i}.gif`));
          }
        }
        return images;
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
          this.snps = albumInfo.snps;
          this.mvInterpretation = this.getMvInterpretation(this.albumId);
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
          if (this.singerId === 'kim' && this.albumId === '10cm') {
            resolve({
              originArtist: '원곡 아티스트: 10cm',
              snps: '내가 좋아하는 아티스트가 어느날 나에게 영상통화를 걸었다. 연인과의 사랑을 담은 내용의 폰서트를 teamX가 재해석했다. 김광석... 좋아하세요? 감성의 노래 선장, 김광석 아티스트의 숲은 어떤 모습일까?',
              albumCover: require('@/assets/img/kim_10cm.jpg'),
              poster: require('@/assets/img/kim_10cm_poster.jpeg')
            });
          } else if(this.singerId === 'mujin' && this.albumId === '10cm') {
            resolve({
              originArtist: '원곡 아티스트: 10cm',
              snps: '내가 좋아하는 아티스트가 어느날 나에게 영상통화를 걸었다. 연인과의 사랑을 담은 내용의 폰서트를 teamX가 재해석했다.이무진... 좋아하세요? 감성의 미학가, 이무진 싱어송라이터의 숲은 어떤 모습일까?',
              albumCover: require('../assets/img/mujin_10cm.jpg'),
              poster: require('@/assets/img/mujin_10cm_poster.jpeg')
            });
          } else if(this.singerId === 'yerin' && this.albumId === '10cm') {
            resolve({
              originArtist: '원곡 아티스트: 10cm',
              snps: '내가 좋아하는 아티스트가 어느날 나에게 영상통화를 걸었다. 연인과의 사랑을 담은 내용의 폰서트를 teamX가 재해석했다. 백예린... 좋아하세요? 감성을 빚어내는 예술가, 백예린 아티스트의 숲은 어떤 모습일까?',
              albumCover: require('../assets/img/yerin_10cm.jpg'),
              poster: require('@/assets/img/yerin_10cm_poster.jpg')
            });
          } else if(this.singerId === 'bibi' && this.albumId === '10cm') {
            resolve({
              originArtist: '원곡 아티스트: 10cm',
              snps: '내가 좋아하는 아티스트가 어느날 나에게 영상통화를 걸었다. 연인과의 사랑을 담은 내용의 폰서트를 teamX가 재해석했다. 비비... 좋아하세요? 올라운더 아티스트, 가수 비비의 숲은 어떤 모습일까?',
              albumCover: require('../assets/img/bibi_10cm.jpg'),
              poster: require('@/assets/img/bibi_10cm_poster.jpeg')
            });
          } else if(this.singerId === 'kim' && this.albumId === 'choi') {
            resolve({
              originArtist: '원곡 아티스트: 10cm',
              snps: `우리 마음속 '빙봉' 애착인형을 다들 기억하시나요?  teamX는 최유리의 숲을 곰인형과 아이간의 애정을 담은 노래로 재해석 했다. 아련한 서사 속 감성의 노래 선장, 김광석 아티스트의 숲은 어떤 모습일까?`,
              albumCover: require('../assets/img/kim_choi.jpg'),
              poster: require('@/assets/img/kim_choi_poster.jpg')
            });
          } else if(this.singerId === 'mujin' && this.albumId === 'choi') {
            resolve({
              originArtist: '원곡 아티스트: 10cm',
              snps: `우리 마음속 '빙봉' 애착인형을 다들 기억하시나요?  teamX는 최유리의 숲을 곰인형과 아이간의 애정을 담은 노래로 재해석 했다. 아련한 서사 속 감성의 미학가, 이무진 싱어송라이터의 숲은 어떤 모습일까?`,
              albumCover: require('../assets/img/mujin_choi.jpg'),
              poster: require('@/assets/img/mujin_choi_poster.jpg')
            });
          } else if(this.singerId === 'yerin' && this.albumId === 'choi') {
            resolve({
              originArtist: '원곡 아티스트: 10cm',
              snps: `우리 마음속 '빙봉' 애착인형을 다들 기억하시나요?  teamX는 최유리의 숲을 곰인형과 아이간의 애정을 담은 노래로 재해석 했다. 아련한 서사 속 감성을 빚어내는 예술가, 백예린 아티스트의 숲은 어떤 모습일까?`,
              albumCover: require('../assets/img/yerin_choi.jpg'),
              poster: require('@/assets/img/yerin_choi_poster.jpg')
            });
          } else if(this.singerId === 'bibi' && this.albumId === 'choi') {
            resolve({
              originArtist: '원곡 아티스트: 10cm',
              snps: `우리 마음속 '빙봉' 애착인형을 다들 기억하시나요?  teamX는 최유리의 숲을 곰인형과 아이간의 애정을 담은 노래로 재해석 했다. 아련한 서사 속 올라운더 아티스트, 가수 비비의 숲은 어떤 모습일까?`,
              albumCover: require('../assets/img/bibi_choi.jpg'),
              poster: require('@/assets/img/bibi_choi_poster.jpg')
            });
          } else if(this.singerId === 'kim' && this.albumId === 'geeks') {
            resolve({
              originArtist: '원곡 아티스트: 긱스',
              snps: '완벽한 사랑의 노래 속 숨겨진 충격적인 이야기, 연인을 그리워하는 내용의 Officially Missing You를 teamX가 재해석했다. 새로운 서사 속 감성의 노래 선장, 김광석 아티스트의  Officially Missing You는 어떤 모습일까?',
              albumCover: require('../assets/img/kim_geeks.jpg'),
              poster: require('@/assets/img/kim_geeks_poster.jpg')
            });
          } else if(this.singerId === 'mujin' && this.albumId === 'geeks') {
            resolve({
              originArtist: '원곡 아티스트: 긱스',
              snps: '완벽한 사랑의 노래 속 숨겨진 충격적인 이야기, 연인을 그리워하는 내용의 Officially Missing You를 teamX가 재해석했다. 새로운 서사 속 감성의 미학가, 이무진 싱어송라이터의  Officially Missing You는 어떤 모습일까?',
              albumCover: require('../assets/img/mujin_geeks.jpg'),
              poster: require('@/assets/img/mujin_geeks_poster.jpg')

            });
          } else if(this.singerId === 'yerin' && this.albumId === 'geeks') {
            resolve({
              originArtist: '원곡 아티스트: 긱스',
              snps: '완벽한 사랑의 노래 속 숨겨진 충격적인 이야기, 연인을 그리워하는 내용의 Officially Missing You를 teamX가 재해석했다. 새로운 서사 속 감성을 빚어내는 예술가, 백예린 아티스트의  Officially Missing You는 어떤 모습일까?',
              albumCover: require('../assets/img/yerin_geeks.jpg'),
              poster: require('@/assets/img/yerin_geeks_poster.jpg')

            });
          } else if(this.singerId === 'bibi' && this.albumId === 'geeks') {
            resolve({
              originArtist: '원곡 아티스트: 긱스',
              snps: '완벽한 사랑의 노래 속 숨겨진 충격적인 이야기, 연인을 그리워하는 내용의 Officially Missing You를 teamX가 재해석했다. 새로운 서사 속  올라운더 아티스트, 가수 비비의  Officially Missing You는 어떤 모습일까?',
              albumCover: require('../assets/img/bibi_geeks.jpg'),
              poster: require('@/assets/img/bibi_geeks_poster.jpg')
            });
          } else if(this.singerId === 'kim' && this.albumId === 'plastic') {
            resolve({
              originArtist: '원곡 아티스트: 타케우치 마리야',
              snps: '"짝사랑하는 순간만큼은 어떤 만화보다 더 만화같은 인생이 펼쳐진다." 시티팝의 대표주자 Plastic Love를 teamX가 재해석 했다. 만화같은 사랑을 노래하는 감성의 노래 선장, 김광석 아티스트의 Plastic Love는 어떤 모습일까?',
              albumCover: require('../assets/img/kim_plastic.jpg'),
              poster: require('@/assets/img/kim_plastic_poster.jpg')
            });
          } else if(this.singerId === 'mujin' && this.albumId === 'plastic') {
            resolve({
              originArtist: '원곡 아티스트: 타케우치 마리야',
              snps: '"짝사랑하는 순간만큼은 어떤 만화보다 더 만화같은 인생이 펼쳐진다." 시티팝의 대표주자 Plastic Love를 teamX가 재해석 했다. 만화같은 사랑을 노래하는 감성의 미학가, 이무진 싱어송라이터의 Plastic Love는 어떤 모습일까?',
              albumCover: require('../assets/img/mujin_plastic.jpg'),
              poster: require('@/assets/img/mujin_plastic_poster.jpg')
            });
          } else if(this.singerId === 'yerin' && this.albumId === 'plastic') {
            resolve({
              originArtist: '원곡 아티스트: 타케우치 마리야',
              snps: '"짝사랑하는 순간만큼은 어떤 만화보다 더 만화같은 인생이 펼쳐진다." 시티팝의 대표주자 Plastic Love를 teamX가 재해석 했다. 만화같은 사랑을 노래하다. 감성을 빚어내는 예술가, 백예린 아티스트의 Plastic Love는 어떤 모습일까?',            
              albumCover: require('../assets/img/yerin_plastic.jpg'),
              poster: require('@/assets/img/yerin_plastic_poster.jpg')
            });
          } else if(this.singerId === 'bibi' && this.albumId === 'plastic') {
            resolve({
              originArtist: '원곡 아티스트: 타케우치 마리야',
              snps: '"짝사랑하는 순간만큼은 어떤 만화보다 더 만화같은 인생이 펼쳐진다." 시티팝의 대표주자 Plastic Love를 teamX가 재해석 했다. 만화같은 사랑을 노래하는 올라운더 아티스트, 가수 비비의 Plastic Love는 어떤 모습일까?',            
              albumCover: require('../assets/img/bibi_plastic.jpg'),
              poster: require('@/assets/img/bibi_plastic_poster.jpg')
            });
          } else if(this.singerId === 'kim' && this.albumId === 'bluesky') {
          resolve({
            originArtist: '원곡 아티스트: Electric Light Orchestra',
            snps: '지구로 돌아가는 우주인의 이야기, 그리고 teamX의 엔딩크레딧. 영화 OST로 유명한 Mr. blue sky를 teamX가 재해석 했다. 광활한 우주, 그리고 이야기의 마지막 속 감성의 노래 선장, 김광석 아티스트의 Mr. blue sky는 어떤 모습일까?',            
            albumCover: require('../assets/img/kim_bluesky.jpg'),
            poster: require('@/assets/img/kim_bluesky_poster.jpg')
          });
        } else if(this.singerId === 'mujin' && this.albumId === 'bluesky') {
          resolve({
            originArtist: '원곡 아티스트: Electric Light Orchestra',
            snps: '지구로 돌아가는 우주인의 이야기, 그리고 teamX의 엔딩크레딧. 영화 OST로 유명한 Mr. blue sky를 teamX가 재해석 했다. 광활한 우주, 그리고 이야기의 마지막 속 감성의 미학가, 이무진 싱어송라이터의 Mr. blue sky는 어떤 모습일까?',            
            albumCover: require('../assets/img/mujin_bluesky.jpg'),
            poster: require('@/assets/img/mujin_bluesky_poster.jpg')
          });
        } else if(this.singerId === 'yerin' && this.albumId === 'bluesky') {
          resolve({
            originArtist: '원곡 아티스트: Electric Light Orchestra',
            snps: '지구로 돌아가는 우주인의 이야기, 그리고 teamX의 엔딩크레딧. 영화 OST로 유명한 Mr. blue sky를 teamX가 재해석 했다. 광활한 우주, 그리고 이야기의 마지막 속 감성을 빚어내는 예술가, 백예린 아티스트의 Mr. blue sky는 어떤 모습일까?',            
            albumCover: require('../assets/img/yerin_bluesky.jpg'),
            poster: require('@/assets/img/yerin_bluesky_poster.jpg')
          });
        } else if(this.singerId === 'bibi' && this.albumId === 'bluesky') {
          resolve({
            originArtist: '원곡 아티스트: 타케우치 마리야',
            snps: '지구로 돌아가는 우주인의 이야기, 그리고 teamX의 엔딩크레딧. 영화 OST로 유명한 Mr. blue sky를 teamX가 재해석 했다. 광활한 우주, 그리고 이야기의 마지막 속 올라운더 아티스트, 가수 비비의 Mr. blue sky는 어떤 모습일까?',            
            albumCover: require('../assets/img/bibi_bluesky.jpg'),
            poster: require('@/assets/img/bibi_bluesky_poster.jpg')
          });
        } else {
            reject(new Error('가수와 앨범 정보에 해당하는 데이터를 찾을 수 없습니다.'));
          }
        });
      },
      getMvInterpretation(albumId) {
        const interpretations = {
          '10cm': `
  teamX는 폰서트를 어떻게 하면 더 좋은 스토리로 풀어나갈 수 있을지 고민하였다. 
  좋은 스토리를 위해 원곡자인 10cm의 영상 자료를 여러 번 분석하였다. 
  본래 폰서트의 원곡은 연인에게 영상통화를 하는 내용을 담고 있다. 
  하지만 10cm의 공연 영상을 보면 마치 관객이 본인의 연인인 것처럼, 다정하게 공연하는 모습을 확인할 수 있었다. 
  teamX는 이를 보고 최근 유행하는 영상통화 팬 사인회를 떠올렸다.
  코로나19로 비대면 활동이 본격화되면서 등장한 새로운 팬 사인회 방식으로, 폰서트의 가사와 매우 잘 어울린다고 판단하였다.<br><br>
  하지만 팬 사인회 역시 행사의 성격이 강하다는 점에서 너무나도 달달한 폰서트의 가사와 약간의 괴리감이 있다고 느꼈다. 
  '더욱 개인적인 상황, 더욱 아티스트와의 긴밀함을 강조하려면 어떻게 해야 할까?' 
  우리는 영상통화 팬 사인회가 아닌, 정말 그 아티스트가 나에게 영상통화를 건다는 상황을 상정하고 영상을 기획하였다. 
  중간중간 다양한 효과와 3D 애니메이션을 배치하여 이런 꿈같은 상황을 더욱 극대화하고, 
  영상통화라는 특성을 살리기 위해 따뜻하고 채도가 약간 높은 색감을 설정하였다.<br><br>
  teamX만의 폰서트 영상은 타 영상에 비해 큰 스토리를 담지 않았지만, 그만큼 편안한 시청이 가능하다. 
  별 해석 없이 아티스트들의 폰서트를 즐기길 바란다.`,

          'choi': `
  teamX가 해석한 최유리의 숲은 인간 대 인간의 사랑 이야기를 넘어, 우리가 아낀 사물과 그 사물 간의 사랑이었다.
  우리 팀은 그중 애착 인형에 주목하였다. 유년기 우리들은 모두 애착 인형과 함께 자라왔다. 
  같은 인형이라도 지금의 그 인형이 아니면 안 되는, 찢어질 때까지 껴안고 있던 애착 인형. 어디서 산지도 모를 그 인형. 
  인간이 갖는 사물 중 가장 ‘사랑’하는 것을 꼽으라면 애착 인형이 아닐까? <br><br>
  teamX는 애착 인형과 인간의 사랑 중 애착 인형 쪽에서 갖는 사랑을 이야기하고자 한다. 
  인형이 처음 아이의 품에 안겨지던 순간부터 함께 놀던 순간을 놀이공원이라는 추억의 공간에서 보여준다.
  스토리를 구상하며 애착 인형과 사람과의 애정은 인형 입장에서는 마냥 달콤하지는 않을 거라고 생각했다. 
  인형이라 겪는 차원적 한계가 인간을 사랑하기 어려운 장애물로 느껴지기 때문이다. 
  그렇다고 애착 인형이 인간을 사랑하길 포기했냐고 묻는다면 그건 아닐 것이다. 
  인형과 사람의 사랑은 플라토닉 러브로 미지근하게 오래 유지될 테니까.
  그래서 뮤직비디오 내에서도 곰 인형이 본인이 곰 인형임을 인지했지만 계속해서 인간을 사랑하는 내용을 담았다. 
  이를 통해 잊고 있던 애착 인형과의 추억을 떠올리고 순수했던 그 시절을 상기하여 보는 이에게 뭉클한 감동을 주고자 한다.<br><br>
  “애착 인형과 인간의 사랑은 어쩌면 우리 모두의 첫사랑이 아닐까?”하는 소소한 질문을 던지며 이만 글을 마친다.`,

          'geeks': `
  teamX의 뮤직비디오 중 스토리가 가장 풍부한 영상을 고르라 한다면 
  망설임 없이 Officially missing you를 고를 것이다. 
  Officially missing you 원곡은 평범한 이별 스토리를 담은 노래다. 
  우리는 이런 스토리를 파격적으로 재해석해보고자 했고, 
  이에 “전 애인을 살해한 주인공이 부르는 노래”라는 다소 잔혹한 스토리가 탄생했다.<br><br>
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
  사이렌소리, 문앞에 도착한 경찰. 주인공은 결국 체포되고 영상은 마무리 된다.<br><br>
  위 스토리를 최대한 영상내에 노출시키지 않고 은유적으로 표현하여 시청에 불편함을 느끼지 않게 하였다. 
  또한 직접 그린 애니메이션을 통해 의미를 더했다. `,
  
        'plastic':
`폰서트, 오피셜리미씽유, 숲 이후 teamX는 기존 영상과 다른 새로운 시도를 해보기로 했다. 
이에 시티팝의 대표주자 격인 Plastic Love를 색다르게 연출하였다. 
Plastic Love는 타 영상과 비교하면 압도적으로 촬영본 분량이 적다. 
그 이유는 생성형 AI 기술을 활용한 2D 애니메이션을 추가하였기 때문. 
위 뮤직비디오 내에 단 한 장면도, 직접 그리지 않았다. 
애니메이션 생성을 위해 눈 감은 모습, 주름 약간 등의 아주 미세한 리터칭 외에는 모두 생성형 AI를 활용하였다. <br><br>
Plastic Love의 줄거리는 짝사랑이다.  
좋아하는 사람을 만나러 가는 길은 모든 게 다 생소하다. 
매일 보던 엘리베이터도, 자주 걷던 길목도 모두 낯설다. 
마치 만화 속 주인공이 된 것처럼 말이다. 
좋아하는 사람과 만나는 순간은 시간이 멈춘듯하다. 
상대방의 눈도 마주치지 못하고 무슨 이야기를 하는지 머릿속에 들어오지 않는다. 
좋아하는 감정은 흘러넘칠 만큼 큰데, 이 감정을 어떻게 다스려야 할지 혼란스러운 주인공은 상대방과의 만남 이후 길을 걸으며 되뇐다. 
그리고 신호등 초록불이 켜진 듯이 주인공은 이 마음을 상대방에게 고백하기로 결심하며 영상은 마무리된다.
흔히 말하는 “만화 같은 사랑”은 멀리 있지 않다. 
누군가를 사랑하고 좋아하는 마음은 어떤 감정보다 순도 높고 아름답고 비현실적이다. 
이 뮤직비디오를 보며 나의 짝사랑을 추억해보는 건 어떨까?`,
        'bluesky':
`
Mr. blue sky는 teamX의 엔딩 크레딧이다.
teamX의 세계에서 네 아티스트는 실존하고 노래하지만, 현실에서는 그들의 배역이 연기를 했다.
그런 배우들에 대한 감사와 프로젝트의 종결 그리고 아티스트에 대한 애정을 담은 영상이라고 볼 수 있다.
우리가 만든 teamX의 세계는 넓고 광활했다. 수많은 아티스트 후보가 있었고 수많은 후보곡이 있었다.
많은 이야기, 다양한 의견, 상상들이 마치 우주의 수많은 별과 같았다. 그래서 Mr. blue sky는 우주 속에서 이야기가 펼쳐진다.
teamX의 세계에서 벗어나 현실로 돌아가는 배우들의 모습을 지구로 복귀하는 우주인에게 대입했다. 촬영의 흔적들을 살펴보며 여러 에피소드를 떠올리고 추억한다. <br><br>
Mr. blue sky는 배경이 우주이기에 메인 곡 중 가장 CG 작업이 많이 된 뮤직비디오다.
다양한 SF물 레퍼런스를 보며 우주선 디자인과 환경을 제작했고 실제같이 보이도록 텍스처 작업에 더욱 힘썼다.
그만큼 웅장하고 시네마틱 느낌이 강하다. 영상을 보며 곳곳에 있는 teamX의 프로젝트를 비롯한 숨겨진 요소를 발견해 보는 것도 재미 요소 중 하나일 것이라 예상한다.
그럼 teamX의 마지막 작품의 감동을 다 함께 느껴보길 바란다.`
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
header,.container {
	font-family: 'Pretendard', sans-serif;
}

header{
    position: fixed;
}
.logo{
    width:30px;
    margin-top: 20px;
    margin-left: 20px;
    z-index: 2;
}
.container {
    width: 100vw;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: white; /* 배경색 지정 */
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
    color: #172BFF;
    font-size: 1.2em;
    font-weight: bold;
}
.origin-artist{
    color: #172BFF;
    font-size: 1em;
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
    width: 50vw;
    height: 50vw;
    z-index: 1;
}
.lp{
    width: 50vw;
    margin-left: -25vw;
    height: 50vw;
    z-index: 0;
}
.snps{
    margin-top: 20px;
    color: black;
    font-size: 0.9em;
    text-align: justify;
    line-height: 25px;
    width:80%;
    font-weight: 200;
}

.detail-container{
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
}
.detail-title{
    color:#172BFF;
    font-size: 1.3em;
    width:80%;
    margin-bottom: 20px;
    font-weight: bold;
}
.poster{
    width:80%;
    /* height: 200px; */
    object-fit: cover;
    border-radius: 18px;
    margin-bottom:30px;
}
.detail{
    color:black;
    line-height: 25px;
    font-size:0.9em;
    width:80%;
    text-align: justify;
    font-weight: 200;
}

.behind-container{
    display: flex;
    flex-direction: column;
    color: #172BFF;
    margin-top:100px;
    width:80%;
}

.behind-title{
  font-weight: bold;
  font-size:1.3em;
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
    height:15vh;
    object-fit: cover;
}
.behindimg-container img:nth-child(1) {
    width: 55%;
}
.behindimg-container img:nth-child(2){
    width: 42%;
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
    width: 60%;
}
  
.qr-container{
    display: flex;
    margin-top: 100px;
    color:#172BFF;
    flex-direction: column;
    align-items: center;
    font-size:1.3em;
    font-weight: bold;
}
.qrimg-container{
    margin-top:20px;
}
.fa-instagram{
    font-size: 3em;
    padding: 10px;
}
.fa-youtube{
    font-size: 3em;
    padding: 10px;
}
  
.footer-logo{
    margin-top: 100px;
    width: 50px;
    margin-bottom:50px;
}

a {
    color: inherit; /* Inherit color from parent element */
    text-decoration: none; /* Remove underline */
}
a:visited, a:active {
    color: inherit; /* Keep the same color when visited or active */
}

@media (min-width: 768px) {
  .footer-logo{
    width: 60px;
  }
}
@media (min-width: 1024px) {
  .footer-logo{
    width: 80px;
  }
}
  </style>
  
  
  