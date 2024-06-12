<template>
    <header>
        <img class="logo" src="../assets/img/logo.png" @click="goToMain" alt="">
    </header>
    <div class="container">
        <div class="intro">
            <div class="introduce">INTRODUCE</div>
            <img class="team-img" src="../assets/img/team.jpeg" alt="">
        </div>
        <div class="hello"> 안녕하세요, Team X입니다.</div>
        <div class="detail">
            <pre>
              

            </pre>
            <div>
              딥페이크 및 ai 기술을 활용한 개인화된 뮤직비디오 웹서비스

              현대의 음악 산업과 엔터테인먼트 분야는 기술의 발전과 함께 급속도로 변화하고 있다. 
              특히, AI 기술의 진보는 음악 제작과 감상 방식에 혁신을 가져왔다.
              AI를 활용한 음성 변환 기술과 딥페이크 기술은 이제 사용자가 원하는 어떤 가수든지 그들의 목소리와 모습으로 곡을 커버할 수 있는 가능성을 열었다. 
              이러한 기술적 진보에도 불구하고, 대부분의 음악 감상 서비스는 여전히 단순한 오디오 스트리밍에 집중하고 있으며, 청각적 경험 외에 시각적 경험을 통합하는 데에는 한계가 있다.
              본 프로젝트는 딥페이크 및 ai 기술을 활용한 뮤직비디오 웹서비스를 제작한다. 
              이에 Personality, Visible, Originality를 세 가지 주요 키워드로 제시한다. 
              사용자는 자신이 원하는 아티스트의 목소리로 원하는 음악을 들을 수 있도록 직접 선택하여 개인화된 뮤직비디오를 감상할 수 있다. 
              사용자가 선택한 가수가 실제로 내 눈앞에서 노래를 부르는듯한 시각적인 경험을 할 수 있게 한다. 
              기술적인 해결책에만 치우치지 않고 독창적인 콘텐츠를 제작한다.
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
header, .intro,.hello,.detail,.team-container,.slider {
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
.slide img{
    width: 250px;
    height: 150px;
    object-fit: cover;
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
a {
    color: inherit; /* Inherit color from parent element */
    text-decoration: none; /* Remove underline */
}

a:visited, a:active {
    color: inherit; /* Keep the same color when visited or active */
}
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