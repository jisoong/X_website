<template>
    <header>
        <img class="logo" src="../assets/img/logo.png" @click="goToMain" alt="">
    </header>
    <div class="container">
      <div class="introduce">INTRODUCE</div>

      <nav class="menu">
        <router-link class="ourteam" to="/ourTeam">our team</router-link> | <router-link class="pipeline" to="/pipeline">pipeline</router-link>
      </nav>

      <img class="team-img" src="../assets/img/team.jpeg" alt="">

        <div class="hello"> 안녕하세요, teamX입니다.</div>
        <div class="detail">
            <pre>
              

            </pre>
            <div>
              teamX의 X는 "나의 아티스트가 원하는 곡을 불러준다면"이라는 상상에서 출발한 프로젝트다. 
              웹에서 아티스트와 곡을 선택하고, 직접 제작한 영상 콘텐츠를 즐기는 형태로 진행된다. 
              X는 시각적인 요소가 배제된 기존의 AI커버를 입체적으로 재창작하는 것에서 의의를 가진다.
              곡을 재해석한 스토리, 촬영본에 딥페이크 활용하여 만든 뮤직비디오, AI학습과 사운드 디자인을 통해 만든 음원, 영상미를 높여줄 3D프로덕션, 
              그리고 이 콘텐츠와 유저를 연결해주는 웹. X는 각 분야의 다양한 기술이 결합된 예술공학적인 프로젝트라고 할 수 있다.
            </div>
            <pre>



            </pre>
        </div>
        <div class="team-container">
            <div class="profile-container" v-for="member in teamMembers" :key="member.name">
                <img class="profile" :src="member.image" alt="">
                <p class="K name">{{ member.koreanName }}</p>
                <p class="name">{{ member.name }}</p>
                <p class="R role">{{ member.role1 }}</p>
                <p class="role" v-if="member.role2 !== 'none'">{{ member.role2 }}</p>
                <p class="F role" v-else> none </p>
                <p class="insta">
                <!-- <i class="fa-brands fa-instagram"></i> -->
                @{{ member.insta }}</p>
            </div>
        </div>
        <div class="slider">
        <div class="slides">
            <div class="slide" v-for="(image, index) in images" :key="index">
            <img :src="image.url" alt="Slide Image">
            </div>
        </div>
        </div>
        <div class="qr-container"> 
          <a class="insta-qr-container" href="https://www.youtube.com/@xteamx2024" target="_blank">
            <img src="../assets/img/teamxinsta_qr.png" class="insta-qr qr">
            <p>insta</p>
          </a>
          <a class="ytube-qr-container" href="https://www.instagram.com/xteamx2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
            <img src="../assets/img/teamxytube_qr.png" class="ytube-qr qr">
            <p>youtube</p>
          </a>
        </div>
        <img class="footer-logo" src="../assets/img/BI.png" alt="">
    </div>
    


</template>

<script>
export default {
  data() {
      return {
        teamMembers: [
        {
          koreanName: '유진',
          name: 'Jin Yoo',
          role1: 'AI 엔지니어',
          role2: '팀장',
          insta: 'beluga.jin',
          image: require('@/assets/img/jin.jpeg')
        },
        {
          koreanName: '강민구',
          name: 'Mingu Kang',
          role1: '3D 디자이너',
          role2: 'none',
          insta: 'mg_0718_',
          image: require('@/assets/img/mingu.jpeg')
        },
        {
          koreanName: '강지수',
          name: 'Jisu Kang',
          role1: '웹 엔지니어',
          role2: 'none',
          insta: 'ganz1._.su',
          image: require('@/assets/img/jisu.jpg')
        },
        {
          koreanName: '백지오',
          name: 'Jio Baek',
          role1: '2D 디자이너',
          role2: 'PM',
          insta: '_jiographic_',
          image: require('@/assets/img/jio.jpeg')
        },
        {
          koreanName: '서수범',
          name: 'Subeom Seo',
          role1: '음향 디자이너',
          role2: 'none',
          insta: 'tjtn1507',
          image: require('@/assets/img/subeom.jpeg')
        }
      ],
      images: [
        { url: require('@/assets/img/work1.png') },
        { url: require('@/assets/img/work2.png') }, 
        { url: require('@/assets/img/work3.png') },
        { url: require('@/assets/img/work4.png') },
        { url: require('@/assets/img/work5.png') }, 
        { url: require('@/assets/img/work6.png') },
        { url: require('@/assets/img/work7.png') },
          // Add more images as needed
      ],
      };
    },
    methods: {
        goToMain(){
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");
header, .container {
	font-family: 'Pretendard', sans-serif;
}

.logo{
  width:50px;
  margin-top: 20px;
  padding-left: 20px;
  position: fixed;
}

.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
}
.menu {
    margin-top: 50px;
    margin-bottom:100px;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
    color: inherit;
}
.ourteam{
  color:#172BFF;
  text-decoration: none;
}
.pipeline{
  color: #222222;
  text-decoration: none;
}

.ourteam:hover, .pipeline:hover {
  color:#172BFF;
}


.introduce{
    color:#172BFF;
    font-size: 70px;
    /* font-weight: bold; */
    margin-top:100px;
}
.team-img{
    margin-top:40px;
    width: 100%;
    max-width: 1000px;
    /* opacity: 0.5; */
}

.hello{
    color:#172BFF;
    font-size: 30px;
    font-weight: bold;
    margin-top:60px;
    text-align: center;
}
.detail{
    width: 100%;
    max-width: 1000px;
    overflow: hidden;
    line-height: 32px;
    font-size: 18px;
    text-align: justify;
}

.team-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.profile-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}
.profile{
  width:150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  padding:20px;
}
.K.name{
  margin-top:30px;
}
.name{
  color:#172BFF;
  font-size: 22px;
  font-weight: bold;
  margin-top:5px;
}
.R.role{
  margin-top:30px;
}
.F.role{
  font-size:20px;
  margin-top:5px;
  color:white;
}
.role{
  font-size:20px;
  margin-top:5px;
  font-weight: 500;
}
.insta{
  font-size:20px;
  margin-top:30px;
}

.slider {
  width: 100%;
  max-width: 1000px;
  overflow-x: auto;
  white-space: nowrap;
}
.slide img{
  width: calc(100% - 30px);
  max-width: 500px;
  height: 300px;
  object-fit: cover;
  padding: 0 15px;
}
.slides {
  display: inline-block;
  margin-top:200px;
}
.slide {
  display: inline-block;
}

.qr-container{
  display: flex;
  margin-top: 100px;
  margin-bottom: 100px;
  flex-wrap: wrap;
  justify-content: center;
}
.qr{
  width: 100%;
  max-width: 300px;
  height: auto;
}
.insta-qr-container, .ytube-qr-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
  width:150px;
  margin: 0 30px;
  color: inherit; 
  text-decoration: none;
}
/* .insta-qr, .ytube-qr {
  width: 8vw;
  height: auto;
  margin: 0 20px;
} */
.footer-logo{
  margin-top: 60px;
  padding-top: 80px;
  width: 80px;
  padding-bottom: 70px;
  background-color : rgb(0,0,0,0.8);
  padding-left:50vw;
  padding-right:50vw;
  overflow-x: hidden;
}
/* a {
    color: inherit; 
    text-decoration: none;
}

a:visited, a:active {
    color: inherit; 
} */

@media (max-width: 768px) {
  .introduce {
    font-size: 50px;
  }

  .hello {
    font-size: 24px;
    margin-top: 40px;
  }

  .detail {
    font-size: 12px;
    line-height: 24px;
  }

  .profile {
    width: 120px;
    height: 120px;
  }

  .name {
    font-size: 18px;
  }

  .role, .insta {
    font-size: 16px;
  }

  .slider {
    width: 90%;
  }

  .slide img {
    max-width: 400px;
    height: auto;
  }

  .qr {
    max-width: 200px;
  }

  .footer-logo {
    width: 60px;
  }
}

@media (max-width: 480px) {
  .introduce {
    font-size: 40px;
  }

  .hello {
    font-size: 20px;
    margin-top: 30px;
  }

  .detail {
    font-size: 10px;
    line-height: 20px;
  }

  .profile {
    width: 100px;
    height: 100px;
  }

  .name {
    font-size: 16px;
  }

  .role, .insta {
    font-size: 14px;
  }

  .slider {
    width: 100%;
  }

  .slide img {
    max-width: 300px;
    height: auto;
  }

  .qr {
    max-width: 150px;
  }

  .footer-logo {
    width: 50px;
  }
}
</style>