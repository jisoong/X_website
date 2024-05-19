<template>
    <header>
      <img class="logo" src="@/assets/img/logo.png" @click="goToMain" alt="">
    </header>
    <div class="container">
        <img class="box" src="@/assets/img/top-ellipse.png" alt="">
        <div class="title">원하는 아티스트를 골라주세요</div>
        <div class="img-container">
            <div class="artist" v-for="singer in singers" :key="singer.id" @click="selectSinger(singer);" :class="{ selected: singer === selectedSinger }">
                <img class="singerimg" :src="singer.image">

                <p class="artist-name">{{ singer.name }}</p>
            </div>
        </div>
    </div>
    <div class="btt-container">
      <img class="back" src="@/assets/img/back.png" alt="" @click="goToPrevPage">
      <img class="next" src="@/assets/img/next.png" alt="" @click="goToNextPage" :class="{ 'btt_abled': isButtonDisabled }">
    </div>
</template>

<script>
export default {
  data() {
    return {
      selectedSinger: null,
      singers: [
        { id: 'kim', image: require('../assets/img/kim.jpeg'), alt: 'Kim singer', name: '김광석' },
        { id: 'mujin', image: require('../assets/img/mujin.jpeg'), alt: 'Mujin singer', name: '이무진' },
        { id: 'yerin', image: require('../assets/img/yerin.jpeg'), alt: 'Yerin singer', name: '백예린'},
        { id: 4, image: require('../assets/img/bibi.jpeg'), alt: 'IU singer', name: '비비'}
        ]
    };
  },
  computed: {
    isButtonDisabled() {
      return this.selectedSinger != null;
    }
  },
  methods: {
    selectSinger(singer) {
      this.selectedSinger = singer;
    },
    goToPrevPage() {
      this.$router.push({ name: 'selectWatch'});
    },
    goToNextPage() {
      this.$router.push({ name: 'videoPage', params: { singerId: this.selectedSinger.id, singerName: this.selectedSinger.name } });
    },
    goToMain(){
      this.$router.push('/')
    }
  }
};
</script>

<style scoped>
header{
  position: fixed;
}
.logo{
    width:30px;
    margin-top:25px;
    margin-left:25px;
}
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    overflow-x: hidden;
}
.box{
  width:100vw;
  height: auto;
  pointer-events: none;
  z-index: 1;
}
.title{
    margin-top:-100px;
    margin-bottom:30px;
    color:#172BFF;
}
.artist{
    padding: 8px;
    border: 1px solid #172BFF;
    border-radius: 10px;
    width:110px;
    margin-right:20px;
    margin-top:20px;
}
.singerimg{
    width:110px;
    height:160px;
    border-radius: 5px;
    object-fit: cover;
}
.img-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}
.artist-name{
    margin-top:10px;
    margin-bottom:10px;
    font-size:13px;
    font-weight: bold;
}
.selected{
    background-color: blue;
    color:white;
}
.btt-container{
  display: flex;
  width:100vw;
  justify-content: space-between;
  margin-top:60px;
}
.next{
    width:0;
    height:0;

}
.next.btt_abled{
    width:100px;
    height:auto;
    margin-right:20px;
}
.back{
  width:100px;
  margin-left:20px;
}
</style>