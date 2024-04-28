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
            <div class="profile-container">
                <img class="profile" src="../assets/img/jin.png" alt="">
                <p class="K name">유진</p>
                <p class="name">Jin Yoo</p>
                <p class="R role">AI 엔지니어</p>
                <p class="role">앱 엔지니어</p>
                <p class="insta">@beluga.jin</p>
            </div>
            <div class="profile-container">
              <img class="profile" src="../assets/img/mingu.png" alt="">
              <p class="K name">강민구</p>
              <p class="name">Mingu Kang</p>
              <p class="R role">3D 디자이너</p>
              <p class="F role">none</p>
              <p class="insta">@mg_0718_</p>
            </div>
            <div class="profile-container">
              <img class="profile" src="../assets/img/jisu.png" alt="">
              <p class="K name">강지수</p>
              <p class="name">Jisu Kang</p>
              <p class="R role">웹 엔지니어</p>
              <p class="F role">none</p>
              <p class="insta">@ganz1._.su</p>
            </div>
            <div class="profile-container">
              <img class="profile" src="../assets/img/jio.png" alt="">
              <p class="K name">백지오</p>
              <p class="name">Jio Baek</p>
              <p class="R role">2D 디자이너</p>
              <p class="role">PM</p>
              <p class="insta">@_jiographic_</p>
            </div>
            <div class="profile-container">
              <img class="profile" src="../assets/img/subeom.png" alt="">
              <p class="K name">서수범</p>
              <p class="name">Subeom Seo</p>
              <p class="R role">음향 디자이너</p>
              <p class="F role">none</p>
              <p class="insta">@tjtn1507</p>
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
          <img class="qr" src="../assets/img/teamxinsta_qr.png" alt="">
          <img class="qr" src="../assets/img/teamxytube_qr.png" alt="">
        </div>
        <img class="footer-logo" src="../assets/img/BI.png" alt="">
    </div>
    


</template>

<script>
export default {
  data() {
      return {
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
.slider {
  width: 50%;
  overflow-x: auto;
  white-space: nowrap;
}
.slide img{
width: 500px;
height: 300px;
object-fit: cover;
padding-left:15px;
padding-right:15px;
/* height: auto; */
}
.slides {
  display: inline-block;
  margin-top:200px;
}

.slide {
  display: inline-block;
}
.logo{
  width:50px;
  margin-top: -80px;
  padding-left: 20px;
  position: fixed;
}
.introduce{
    color:#172BFF;
    font-size: 70px;
    font-weight: bold;
}
.container{
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 100% */
    overflow-x: hidden;
}
.team-img{
    margin-top:40px;
    width:1000px;
}
.hello{
    color:#172BFF;
    font-size: 30px;
    font-weight: bold;
    margin-top:60px;
}
.detail{
    width:1000px;
    overflow: hidden;
    /* letter-spacing: 0.5px; */
    line-height: 30px;
    font-size: 14px;
}
.team-container{
    display: flex;
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
.profile-container{
  display: flex;
  flex-direction: column;
  align-items: center;
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
}
.insta{
  font-size:20px;
  margin-top:30px;
}
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
.qr-container{
  display: flex;
  margin-top: 100px;
  margin-bottom: 100px;
}
.qr{
  margin-right:15px;
  width: 300px;
  height: 100%;
}
</style>