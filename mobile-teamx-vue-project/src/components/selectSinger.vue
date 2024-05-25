<template>
    <header>
      <img class="logo" src="@/assets/img/logo.png" @click="goToMain" alt="">
    </header>
    <img class="box" src="@/assets/img/top-ellipse.png" alt="">
    <div class="container">
        <div class="title">원하는 아티스트를 골라주세요</div>
        <div class="img-container">
            <div class="artist" v-for="singer in singers" :key="singer.id" @click="selectSinger(singer);" :class="{ selected: singer === selectedSinger }">
                <img class="singerimg" :src="singer.image">

                <p class="artist-name">{{ singer.name }}</p>
            </div>
        </div>
        <div class="btt-container">
          <img class="back" src="@/assets/img/back.png" alt="" @click="goToPrevPage">
          <img class="next" src="@/assets/img/next.png" alt="" @click="goToNextPage" :class="{ 'btt_abled': isButtonDisabled }">
        </div>
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
* {
	font-family: 'Pretendard', sans-serif;
}

header{
  position: fixed;
}
.logo{
    width:30px;
    margin-top:25px;
    margin-left:25px;
    z-index: 2;
}
.box{
  width:100vw;
  height: 12vh;
  pointer-events: none;
  z-index: 1;
}
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 80vh;
    overflow-x: hidden;
    justify-content: space-evenly;
    align-content: center;
}

.title{
    color:#172BFF;
    font-size: 1.0em;
    font-weight: 200;
}
.img-container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    justify-items: center;
    /* width: 100%; */
    padding: 10px;
    box-sizing: border-box;
}
.artist{
    padding: 8px;
    border: 1px solid #172BFF;
    border-radius: 10px;
    width:110px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    cursor: pointer;
}
.singerimg{
    width:100%;
    height:18vh;
    border-radius: 5px;
    object-fit: cover;
}
.artist-name{
    margin-top: 5px;
    font-size: 0.9em;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 10px;
}
.selected{
    background-color: blue;
    color:white;
}
.btt-container{
  display: flex;
  width:100vw;
  justify-content: space-between;
  margin-top:20px;
  align-items: baseline;
}
.back{
  width:100px;
  height:auto;
  margin-left:20px;
  object-fit: contain;
}
.next{
    width:0;
    height:0;
    object-fit: contain;
}
.next.btt_abled{
    width:100px;
    height:auto;
    margin-right:30px;
    margin-bottom:20px;
    object-fit: contain;
}

@media (min-width: 768px) {
    .logo{
      width:40px;
    }
    .title {
        font-size: 1.8em;
    }
    .artist {
        width: 170px;
    }
    .artist-name {
        font-size: 1.3em;
        margin-top:10px;
        margin-bottom:10px;
    }

    .back, .next.btt_abled {
        width: 120px;
        height: auto;
        object-fit: contain;
    }
    .img-container {
      grid-gap: 20px;
    }
}

@media (min-width: 1024px) {
    .logo{
      width:40px;
    }
    .img-container {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        width: auto;
    }
    .artist {
        width: 170px;
        height: 25vh;
    }
    .title {
        font-size: 1.8em;
    }
    .artist-name {
        font-size: 1.3em;
        margin-top:10px;
    }
    .next.btt_abled {
        width: 140px;
        margin-right:150px;
    }
    .back {
        width: 140px;
        margin-left:150px;
        object-fit: contain;
    }
}
</style>