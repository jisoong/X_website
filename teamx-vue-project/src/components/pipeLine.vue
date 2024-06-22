<template>
  <div>
    <header>
      <img class="logo" src="../assets/img/logo.png" @click="goToMain" alt="">
    </header>
    <div class="container">
      <nav class="menu">
        <router-link to="/">our team</router-link> | <router-link to="/pipeline">pipeline</router-link>
      </nav>
      <div class="content">
        <div class="image-container">
          <img src="@/assets/img/pipeline.png" usemap="#pipeline-map" alt="Pipeline">
          <!-- 각 영역에 대한 임시 테두리 박스 추가 -->
          <div class="area-box" style="top: 140px; left: 60px; width: 160px; height: 60px;"></div>
          <div class="area-box" style="top: 140px; left: 240px; width: 160px; height: 60px;"></div>
          <div class="area-box" style="top: 140px; left: 420px; width: 160px; height: 60px;"></div>
          <div class="area-box" style="top: 140px; left: 600px; width: 160px; height: 60px;"></div>
          <div class="area-box" style="top: 220px; left: 60px; width: 160px; height: 60px;"></div>
          <div class="area-box" style="top: 220px; left: 240px; width: 160px; height: 60px;"></div>
          <div class="area-box" style="top: 220px; left: 420px; width: 160px; height: 60px;"></div>
          <div class="area-box" style="top: 220px; left: 600px; width: 160px; height: 60px;"></div>
        </div>
        <map name="pipeline-map">
          <!-- 각 영역에 대한 설명 부분으로 이동 -->
          <area shape="rect" coords="60,140,220,200" alt="촬영" @click="scrollTo('촬영')">
          <area shape="rect" coords="240,140,400,200" alt="딥페이크 작업" @click="scrollTo('딥페이크 작업')">
          <area shape="rect" coords="420,140,580,200" alt="PLATE 준비작업" @click="scrollTo('PLATE 준비작업')">
          <area shape="rect" coords="600,140,760,200" alt="3D 프로덕션" @click="scrollTo('3D 프로덕션')">
          <area shape="rect" coords="60,220,220,280" alt="AI 보컬 학습" @click="scrollTo('AI 보컬 학습')">
          <area shape="rect" coords="240,220,400,280" alt="소스 보컬 녹음" @click="scrollTo('소스 보컬 녹음')">
          <area shape="rect" coords="420,220,580,280" alt="AI 보컬 변환" @click="scrollTo('AI 보컬 변환')">
          <area shape="rect" coords="600,220,760,280" alt="음원 믹싱" @click="scrollTo('음원 믹싱')">
        </map>
      </div>
      <div class="sections">
        <div ref="촬영" class="section">촬영 설명...</div>
        <div ref="딥페이크 작업" class="section">딥페이크 작업 설명...</div>
        <div ref="PLATE 준비작업" class="section">PLATE 준비작업 설명...</div>
        <div ref="3D 프로덕션" class="section">3D 프로덕션 설명...</div>
        <div ref="AI 보컬 학습" class="section">AI 보컬 학습 설명...</div>
        <div ref="소스 보컬 녹음" class="section">소스 보컬 녹음 설명...</div>
        <div ref="AI 보컬 변환" class="section">AI 보컬 변환 설명...</div>
        <div ref="음원 믹싱" class="section">음원 믹싱 설명...</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToMain() {
      this.$router.push('/');
    },
    scrollTo(section) {
      const element = this.$refs[section];
      if (element && element[0]) {
        element[0].scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");

header, .container {
    font-family: 'Pretendard', sans-serif;
}

header {
    width: 100%;
    background-color: white; /* 배경색을 추가하여 확인 */
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000; /* 다른 요소들 위에 표시되도록 z-index 설정 */
}

.logo {
    width: 50px;
    margin-top: -80px;
    padding-left: 20px;
    position: fixed;
}

.container {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
}

.menu {
    margin-bottom: 20px;
}

.content {
    position: relative;
}

.content img {
    width: 100%;
    max-width: 1000px;
}

.area-box {
    position: absolute;
    border: 2px solid red;
}

.sections {
    margin-top: 20px;
    width: 100%;
    max-width: 1000px;
}

.section {
    padding: 20px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    background-color: #f9f9f9;
}
</style>
