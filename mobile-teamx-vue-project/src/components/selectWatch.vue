<template>
    <header>
      <img class="logo" src="@/assets/img/logo.png" @click="goToMain" alt="">
    </header>
    <img class="box" src="@/assets/img/top-ellipse.png" alt="">
    <div class="container">
        <div class="title">원하는 음악을 골라주세요</div>
        <div class="img-container">
            <div class="album" v-for="album in albums" :key="album.id" @click="selectAlbum(album);" :class="{ selected: album === selectedAlbum }">
                <img class="coverimg" :src="album.cover"  >
                <div class="song-title">{{ album.song }}</div>
                <p class="singer"> -{{ album.singer }}</p>
            </div>
        </div>
        <div class="button-container">
          <img class="next" src="@/assets/img/next.png" alt="" @click="goToNextPage" :class="{ 'btt_abled': isButtonDisabled }">
        </div>
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
    margin-bottom:30px;
    color:#172BFF;
    font-size: 1.4em;
}

.img-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    justify-items: center;
    /* width: 100%; */
    padding: 10px;
    box-sizing: border-box;
}

.album {
    padding: 8px;
    border: 1px solid #172BFF;
    border-radius: 10px;
    width: 100px;
    height:auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    cursor: pointer;
}

.coverimg {
    width: 100%;
    border-radius: 5px;
    object-fit: cover;
}

.song-title {
    margin-top: 5px;
    font-size: 0.9em;
    font-weight: bold;
}

.singer {
    font-size: 0.8em;
}
.selected{
    background-color: blue;
    color:white;
}

.button-container{
  display: flex;
  width:100vw;
  justify-content: flex-end;
  margin-top:20px;
}
.next{
    width:0;
    height:0;
}
.next.btt_abled{
    width:100px;
    height:auto;
    margin-right:30px;
    margin-bottom:20px;
}

@media (min-width: 768px) {
    .logo{
      width:40px;
    }
    .album {
        width: 160px;
    }
    .song-title {
        font-size: 1.3em;
    }
    .singer {
        font-size: 1em;
    }
    .title {
        font-size: 1.8em;
    }
    .next.btt_abled {
        width: 120px;
    }
    .img-container {
      grid-gap: 20px;
    }
}

@media (min-width: 1024px) {
    .img-container {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        width: auto;
        flex-grow: 1;
    }
    .album {
        width: 160px;
        height:30vh;
    }
    .title {
        font-size: 2em;
    }
    .song-title {
        margin-top:10px;
    }
    .next.btt_abled {
        width: 140px;
        margin-right:150px;
    }

}

@media (min-height: 600px) and (max-height: 700px) {
  .box{
    height: 8vh;
  }
  .container{
    height: 90vh;
  }
}


@media (min-height: 1180px) {
    .logo{
        width:50px;
    }
    .img-container {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        width: auto;
        flex-grow: 1;
    }
    .album {
        width: 180px;
        height:auto;
        padding:10px;
    }
    .title {
        font-size: 2.0em;
    }
    .song-title {
        font-size: 1.7em;
        margin-top:10px;
    }
    .singer{
      font-size: 1.2em;
    }
    .next.btt_abled {
        width: 150px;

        margin-right:150px;
    }
}
</style>
