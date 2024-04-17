<template>
  <header>
    <img class="logo" src="../assets/img/logo.png" @click="goToMain" alt="">
  </header>

  <h2 class="title">{{ selectText }}</h2>
  <div class="container">
    <div class="album_container" @click="albumClick">
    <!-- <div class="album_container"> -->
      <div class="box big-box" :class="{ 'disabled': !isSectionClicked }"></div>
      <div class="scrollable" :class="{ 'disabled': isSectionClicked }" >
        <div class="album" v-for="album in albums" :key="album.id">
          <img class="coverimg" :src="album.cover" @click="selectAlbum(album);" :class="{ selected: album === selectedAlbum }">
          <p class="song-title">{{ album.song }}</p>
        </div>

      </div>
    </div>
    <div class="artist_container" @click="artistClick">
      <div class="box big-box" :class="{ 'disabled': !isSectionClicked }"></div>
      <div class="scrollable" :class="{ 'disabled': !isSectionClicked }">
        <div class="artist" v-for="singer in singers" :key="singer.id">
          <img class="singerimg" :src="singer.image" @click="selectSinger(singer)" :class="{ selected: singer === selectedSinger }">
          <p class="artist-name">{{ singer.name }}</p>
        </div>
      </div>
    </div>
  </div>
  <button class="next_btt" @click="goToSecondPage" :class="{ 'btt_disabled': isButtonDisabled }">선택 완료</button>

</template>

<script>
export default {
  data() {
    return {
      selectedSinger: null,
      selectedAlbum: null,
      isSectionClicked: false, 
      albums: [
        { id: '10cm', cover: require('../assets/img/10cm.jpeg'), alt: '10cm album cover', song: '폰서트' },
        { id: 'lee', cover: require('../assets/img/lee.jpeg'), alt: 'Lee album cover', song: '하늘을 달리다' },
        { id: 3, cover: require('../assets/img/shin.jpg'), alt: 'Shin album cover', song: '그대에게' },
        { id: 4, cover: require('../assets/img/choi.jpeg'), alt: 'Choi album cover', song: '숲' },
        { id: 5, cover: require('../assets/img/geeks.jpeg'), alt: 'Geeks album cover', song: 'officially missing you' }
      ],
      singers: [
      { id: 'kim', image: require('../assets/img/kim.jpeg'), alt: 'Kim singer', name: '김광석' },
      { id: 'mujin', image: require('../assets/img/mujin.jpeg'), alt: 'Mujin singer', name: '이무진' },
      { id: 3, image: require('../assets/img/yerin.jpeg'), alt: 'Yerin singer', name: '백예린'},
      { id: 4, image: require('../assets/img/bibi.jpeg'), alt: 'IU singer', name: '비비'}
      ]
    };
  },
  computed: {
    isButtonDisabled() {
      return this.selectedSinger === null || this.selectedAlbum === null;
    },
    selectText() {
        return this.isSectionClicked ? '원하는 아티스트를 골라주세요' : '원하는 음악을 골라주세요';
      }
  },
  methods: {
    selectSinger(singer) {
      this.selectedSinger = singer;
    },
    selectAlbum(album) {
      this.selectedAlbum = album;
      this.isSectionClicked = true;
    },
    albumClick() {
      if (this.selectedSinger !== null) {
        this.isSectionClicked = false;
      }
    },
    artistClick() {
      this.isSectionClicked = true;
    },
    goToSecondPage() {
      // Pass selectedSinger and selectedAlbum to second page
      this.$router.push({ name: 'videoPage', params: { singerId: this.selectedSinger.id, singerName: this.selectedSinger.name,albumId: this.selectedAlbum.id, albumName: this.selectedAlbum.song } });
    },
    goToMain(){
      this.$router.push('/')
    }
  }
};
</script>

<style scoped>
.next_btt{
  font-size: 16px;
  padding: 15px;
  border-radius: 45px;
  color:#172BFF;
  border-color: #172BFF;
  background-color: rgba(255, 255, 255);
  display: block;
  margin: 0 auto;
  margin-top: 70px;
  box-shadow: none;
}
.next_btt:hover {
  background-color: #172BFF; 
  color: white; 
  border-color: white;
}
.next_btt.btt_disabled {
  background-color: #ccc; /* 비활성화 상태 배경색 */
  color: #888; /* 비활성화 상태 텍스트 색상 */
  pointer-events: none; /* 클릭 이벤트 비활성화 */
  border-color: rgba(0,0,0,0.7);
}
.box {
  position: absolute;
}

.big-box.disabled{
  width: 600px;
  height: 400px;
  pointer-events: none;
  box-shadow: 
    inset -20px 0px 30px 20px rgba(255, 255, 255); /* 아래쪽 그림자 */
  padding: 10px;
}
.artist_container .big-box{
  width: 600px;
  height: 400px;
  pointer-events: none;
  box-shadow: 
    inset -20px 0px 50px 20px rgba(255, 255, 255); /* 아래쪽 그림자 */
  padding: 10px;
}
.logo{
  width:50px;
  padding-top: 20px;
  padding-left: 20px;
}

.title{
  color:#172BFF;
  text-align: center;
  font-size: 30px;
  padding-top: 80px;
  padding-bottom: 50px;
}

.container{
  display: flex;
  justify-content: center;
}

.scrollable {
  width: 600px;
  height: 400px;
  overflow: auto;
  padding: 10px;
}

.scrollable img{
  object-fit: cover;
  border-radius: 20%;
  padding: 5px;
  transition: width 0.7s, height 0.7s; /* 애니메이션 효과 */
}

.album{
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
}

.artist{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.scrollable.disabled{
  pointer-events: none;
  opacity: 0.5;
  filter: blur(4px); /* 흐림 효과 적용 */
  width:500px;
  height:250px;
  padding: 10px;
}

.scrollable.disabled .artist{
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
}
.coverimg{
  width:250px;
  height:250px;
  padding: 5px;
}

.song-title{
  padding-left: 50px;
  font-size: 30px;
}

.singerimg{
  width:300px;
  height:300px;
  padding: 5px;
}

.scrollable.disabled img{
  width:150px;
  height:150px;
  padding: 5px;
}

.scrollable.non-clicked img{
  width:150px;
  height:150px;
  padding: 5px;
}

.artist-name{
  padding-left: 50px;
  font-size: 30px;
}

.selected {
  border: 4px solid #172BFF;
}
</style>
