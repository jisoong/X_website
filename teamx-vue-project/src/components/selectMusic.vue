<template>
  <header>
    <img class="logo" src="../assets/img/logo.png" @click="goToMain" alt="">
  </header>
  <div class="container">
    <h2 class="text">원하시는 음악을 골라주세요</h2>
    <div class="select_A">
      <div class="select_B">
        <div class="scrollable" id="album">
          <div v-for="album in albums" :key="album.id">
            <img class="albumcover" :src="album.cover" @click="selectAlbum(album)" :class="{ selected: album === selectedAlbum }">
          </div>
        </div>
        <div class="scrollable" id="singer">
          <div v-for="singer in singers" :key="singer.id">
            <img class="singer" :src="singer.image" @click="selectSinger(singer)" :class="{ selected: singer === selectedSinger }">
          </div>
        </div>
      </div>
      <button @click="goToSecondPage" :disabled="selectedSinger === null || selectedAlbum === null">선택 완료</button>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      selectedSinger: null,
      selectedAlbum: null,
      albums: [
        { id: '10cm', cover: require('../assets/img/10cm.jpeg'), alt: '10cm album cover', song: '폰서트' },
        { id: 2, cover: require('../assets/img/lee.jpeg'), alt: 'Lee album cover', song: '하늘을달리다' },
        { id: 3, cover: require('../assets/img/shin.jpg'), alt: 'Shin album cover', song: 'Shin Song' },
        { id: 4, cover: require('../assets/img/choi.jpeg'), alt: 'Choi album cover', song: 'Choi Song' },
        { id: 5, cover: require('../assets/img/geeks.jpeg'), alt: 'Geeks album cover', song: 'Geeks Song' }
      ],
      singers: [
      { id: 'kim', image: require('../assets/img/kim.jpeg'), alt: 'Kim singer', singer: '김광석' },
      { id: 2, image: require('../assets/img/mujin.jpeg'), alt: 'Mujin singer', singer: '이무진' },
      { id: 3, image: require('../assets/img/ariana.jpeg'), alt: 'Ariana singer' },
      { id: 4, image: require('../assets/img/yerin.jpeg'), alt: 'Yerin singer' },
      { id: 5, image: require('../assets/img/IU.jpeg'), alt: 'IU singer' }
      ]
    };
  },
  methods: {
    selectSinger(singer) {
      this.selectedSinger = singer;
    },
    selectAlbum(album) {
      this.selectedAlbum = album;
      console.log(album)
      console.log(album.id)
      console.log(album.alt)
      console.log(album.song)
    },
    goToSecondPage() {
      // Pass selectedSinger and selectedAlbum to second page
      this.$router.push({ name: 'videoPage', params: { singerId: this.selectedSinger.id, singerName: this.selectedSinger.singer,albumId: this.selectedAlbum.id, albumName: this.selectedAlbum.song } });
      console.log(this.selectedAlbum.song)
    },
    goToMain(){
      this.$router.push('/')
    }
  }
};
</script>

<style scoped>
.logo{
  width:50px;
  padding-top: 20px;
  padding-left: 20px;
}

.container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text{
  color:#172BFF;
}

img{
    object-fit: cover;
}
.albumcover{
    width:300px;
    height:300px;
    padding: 5px;
}

.singer{
    width:300px;
    height:300px;
    padding: 5px;
}

.selected {
  border: 2px solid green;
}

.scrollable {
    width: 600px;
    height: 400px;
    overflow: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    backdrop-filter: blur(50px);
}

.select_A{
    display: flex;
    flex-direction: column;

}
.select_B{
    display: flex;
    justify-content: space-around;
    margin-top: 25vh;
}
</style>
