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
                <p class="insta">{{ member.insta }}</p>
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
            <a href="https://www.instagram.com/xteamx2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@xteamx2024" target="_blank">
                <i class="fa-brands fa-youtube"></i>
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
          role2: 'none',
          insta: '@beluga.jin',
          image: require('@/assets/img/jin.jpeg')
        },
        {
          koreanName: '강민구',
          name: 'Mingu Kang',
          role1: '3D 디자이너',
          role2: 'none',
          insta: '@mg_0718_',
          image: require('@/assets/img/mingu.jpeg')
        },
        {
          koreanName: '강지수',
          name: 'Jisu Kang',
          role1: '웹 엔지니어',
          role2: 'none',
          insta: '@ganz1._.su',
          image: require('@/assets/img/jisu.jpg')
        },
        {
          koreanName: '백지오',
          name: 'Jio Baek',
          role1: '2D 디자이너',
          role2: 'PM',
          insta: '@_jiographic_',
          image: require('@/assets/img/jio.jpeg')
        },
        {
          koreanName: '서수범',
          name: 'Subeom Seo',
          role1: '음향 디자이너',
          role2: 'none',
          insta: '@tjtn1507',
          image: require('@/assets/img/subeom.jpeg')
        }
      ],
      images: [
        { url: require('../assets/img/work1.png') },
        { url: require('../assets/img/work2.png') }, 
        { url: require('../assets/img/work3.png') },
        { url: require('../assets/img/work4.png') },
        { url: require('../assets/img/work5.png') },
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
header, .container {
	font-family: 'Pretendard', sans-serif;
}

.logo{
  width:30px;
  margin-top: 20px;
  padding-left: 20px;
  position: fixed;
}
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 100% */
    overflow-x: hidden;
}
.introduce{
    margin-top: 80px;

    color:#172BFF;
    font-size: 35px;
    text-align: center;
    font-weight: bold;
}
.menu {
  margin-top: 20px;
  margin-bottom:30px;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
}
.ourteam{
  color: #172BFF;
  text-decoration: none;
}
.pipeline{
  color:#222222;
  text-decoration: none;
}

.intro{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.team-img{
    margin-top:40px;
    width:90%;
}
.hello{
    color:#172BFF;
    font-size: 20px;
    font-weight: bold;
    margin-top:60px;
}
.detail{
    width:90%;
    overflow: hidden;
    /* letter-spacing: 0.5px; */
    line-height: 30px;
    font-size: 0.8em;
    text-align: justify;
    font-weight: 200;
}
.team-container{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
.profile-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile{
  width:80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  padding:20px;
}
.K.name{
  margin-top:10px;
}
.name{
  color:#172BFF;
  font-size: 18px;
  font-weight: bold;
  margin-top:5px;
}

.R.role{
  margin-top:15px;
}
.F.role{
  font-size:15px;
  margin-top:5px;
  color:white;
}
.role{
  font-size:15px;
  margin-top:5px;
  font-weight: 500;
}
.insta{
  font-size:15px;
  margin-top:20px;
  margin-bottom:20px;
}

.slider {
  width: 90%;
  overflow-x: auto;
  white-space: nowrap;
}
.slides {
  display: inline-block;
  margin-top:100px;
}
.slides img{
    width: 250px;
    height: 150px;
    object-fit: contain;
    padding-left:15px;
    padding-right:15px;
    /* height: auto; */
}

.slide {
  display: inline-block;
}
.qr-container{
  display: flex;
  margin-top: 100px;
  margin-bottom: 50px;
}

.fa-instagram{
    font-size: 60px;
    padding: 10px;
    color:#172BFF;
}
  
.fa-youtube{
    font-size: 60px;
    padding: 10px;
    color:#172BFF;
}
/* a {
    color: inherit; 
    text-decoration: none;
}

a:visited, a:active {
    color: inherit; 
} */
.footer-logo{
  margin-top: 0px;
  padding-top: 50px;
  width: 40px;
  padding-bottom: 40px;
  background-color : rgb(0,0,0,0.8);
  padding-left:50vw;
  padding-right:50vw;
  overflow-x: hidden;
}

@media (min-width: 768px) {
  .logo{
    width: 40px;
  }
  .footer-logo{
    width: 50px;
  }
}
@media (min-width: 1024px) {
  .logo{
    width: 50px;
  }
  .footer-logo{
    width: 70px;
  }
  .profile{
    width:100px;
    height: 100px;
  }
}
</style>