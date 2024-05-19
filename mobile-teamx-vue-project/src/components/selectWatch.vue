<template>
    <header>
      <img class="logo" src="@/assets/img/logo.png" @click="goToMain" alt="">
    </header>
    <div class="container">
        <img class="box" src="@/assets/img/top-ellipse.png" alt="">
        <div class="title">원하는 음악을 골라주세요</div>
        <div class="img-container">
            <div class="album" v-for="album in albums" :key="album.id" @click="selectAlbum(album);" :class="{ selected: album === selectedAlbum }">
                <img class="coverimg" :src="album.cover"  >
                <div class="song-title">{{ album.song }}</div>
                <p class="singer"> -{{ album.singer }}</p>
            </div>
        </div>
    </div>
    <div class="button-container">
      <img class="next" src="@/assets/img/next.png" alt="" @click="goToNextPage" :class="{ 'btt_abled': isButtonDisabled }">
    </div>
</template>

<script>
export default {
  data() {
    return {
      selectedAlbum: null,
      albums: [
        { id: '10cm', cover: require('../assets/img/10cm.jpeg'), alt: '10cm album cover', song: '폰서트', singer:'10cm' },
        { id: 'plastic', cover: require('../assets/img/shin.jpg'), alt: 'Plastic album cover', song: 'plastic love', singer: '타케우치 마리야' },
        { id: 'choi', cover: require('../assets/img/choi.jpeg'), alt: 'Choi album cover', song: '숲', singer: '최유리' },
        { id: 'geeks', cover: require('../assets/img/geeks.jpeg'), alt: 'Geeks album cover', song: 'officially missing you', singer: '긱스' },
        { id: 'bluesky', cover: require('../assets/img/bluesky.jpeg'), alt: 'Bluesky album cover', song: 'Mr. Blue Sky', singer: 'Electric Light Orchestra' },
      ]
    };
  },
  computed: {
    isButtonDisabled() {
      return this.selectedAlbum != null;
    }
  },
  methods: {
    selectAlbum(album) {
      this.selectedAlbum = album;
      this.isSectionClicked = true;
    },
    goToNextPage() {
      this.$router.push({ name: 'selectSinger', params: { albumId: this.selectedAlbum.id, albumName: this.selectedAlbum.song } });
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
    z-index: 2;
}
.title{
    margin-top:-100px;
    margin-bottom:30px;
    color:#172BFF;
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
.album{
    padding: 8px;
    border: 1px solid #172BFF;
    border-radius: 10px;
    width:100px;
    margin-right:20px;
    margin-top:20px;
}
.coverimg{
    width:100px;
    border-radius: 5px;
}
.img-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}
.song-title{
    margin-top:5px;
    font-size:13px;
    font-weight: bold;
}
.singer{
    font-size:10px;
}
.selected{
    background-color: blue;
    color:white;
}
.button-container{
  display: flex;
  width:100vw;
  justify-content: flex-end;
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

</style>