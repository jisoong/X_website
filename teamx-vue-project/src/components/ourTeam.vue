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
              저희는 딥페이크 및 ai 기술을 활용한 개인화된 뮤직비디오 웹서비스를 제공합니다. 
              현대의 음악 산업과 엔터테인먼트 분야는 기술의 발전과 함께 급속도로 변화하고 있습니다. 
              특히, AI 기술의 진보는 음악 제작과 감상 방식에 혁신을 가져왔습니다.
              AI를 활용한 음성 변환 기술과 딥페이크 기술은 이제 사용자가 원하는 어떤 가수든지 그들의 목소리와 모습으로 곡을 커버할 수 있는 가능성을 열었습니다. 
              이러한 기술적 진보에도 불구하고, 대부분의 음악 감상 서비스는 여전히 단순한 오디오 스트리밍에 집중하고 있으며, 청각적 경험 외에 시각적 경험을 통합하는 데에는 한계가 있습니다.
              저희는 이 점에 주목하여 딥페이크 및 ai 기술을 활용한 뮤직비디오 웹서비스를 제작하였습니다. 
              이에 Personality, Visible, Originality를 세 가지 주요 키워드로 제시합니다. 
              사용자는 자신이 원하는 아티스트의 목소리로 원하는 음악을 들을 수 있도록 직접 선택하여 개인화된 뮤직비디오를 감상할 수 있습니다. 
              사용자가 선택한 가수가 실제로 내 눈앞에서 노래를 부르는듯한 시각적인 경험을 할 수 있게 합니다. 
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
        teamMembers: [
        {
          koreanName: '유진',
          name: 'Jin Yoo',
          role1: 'AI 엔지니어',
          role2: 'none',
          insta: '@beluga.jin',
          image: require('@/assets/img/jin.png')
        },
        {
          koreanName: '강민구',
          name: 'Mingu Kang',
          role1: '3D 디자이너',
          role2: 'none',
          insta: '@mg_0718_',
          image: require('@/assets/img/mingu.png')
        },
        {
          koreanName: '강지수',
          name: 'Jisu Kang',
          role1: '웹 엔지니어',
          role2: 'none',
          insta: '@ganz1._.su',
          image: require('@/assets/img/jisu.png')
        },
        {
          koreanName: '백지오',
          name: 'Jio Baek',
          role1: '2D 디자이너',
          role2: 'PM',
          insta: '@_jiographic_',
          image: require('@/assets/img/jio.png')
        },
        {
          koreanName: '서수범',
          name: 'Subeom Seo',
          role1: '음향 디자이너',
          role2: 'none',
          insta: '@tjtn1507',
          image: require('@/assets/img/subeom.png')
        }
      ],
      images: [
        { url: require('@/assets/img/work1.png') },
        { url: require('@/assets/img/work2.png') }, 
        { url: require('@/assets/img/work3.png') },
        { url: require('@/assets/img/work4.png') },
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
.logo{
  width:50px;
  margin-top: -80px;
  padding-left: 20px;
  position: fixed;
}

.container{
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
}
.introduce{
    color:#172BFF;
    font-size: 70px;
    font-weight: bold;
}
.team-img{
    margin-top:40px;
    width: 100%;
    max-width: 1000px;
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
    line-height: 30px;
    font-size: 14px;
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
  margin-right:15px;
  width: 100%;
  max-width: 300px;
  height: auto;
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