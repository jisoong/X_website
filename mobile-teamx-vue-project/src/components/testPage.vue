<template>
    <header>
      <img class="logo" src="@/assets/img/logo.png" @click="goToMain" alt="">
    </header>
    <div class="boss">
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
    </div>
</template>

<script>
export default {
  data() {
    return {
      selectedAlbum: null,
      albums: [
        { id: '10cm', cover: require('../assets/img/10cm.jpeg'), alt: '10cm album cover', song: '폰서트', singer:'10cm' },
        { id: 'plastic', cover: require('../assets/img/plastic.jpeg'), alt: 'Plastic album cover', song: 'plastic love', singer: '타케우치 마리야' },
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
    .boss{
        height:100vh;
    }
    .box{
        width:100vw;
        height: 10%;
        pointer-events: none;
        z-index: 1;
    }
    .container{
        /* display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        height: 100%;
        overflow-x: hidden;
        justify-content: space-evenly;
        align-content: center; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; /* Center vertically */
        width: 100vw;
        height: 90%; /* Make the container take up the full viewport height */
        align-content: center;
        box-sizing: border-box;
    }
    .title{
        margin-bottom:30px;
        color:#172BFF;
        font-size: 1.0em;
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
    width: 110px;
    height:auto;

    width: 16vh;
    height:22vh;

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
    margin-top: 10px;
    /* font-size: 0.9em; */
    font-size: 1.8vh;
    font-weight: bold;
}

.singer {
    margin-top:3px;
    /* font-size: 0.7em; */
    font-size: 1.3vh;
}
.selected{
    background-color: blue;
    color:white;
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
</style>