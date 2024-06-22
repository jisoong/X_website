<template>
  <transition name="fade" mode="out-in">
    <div v-if="showContent" class="about">
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
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      selectedAlbum: null,
      showContent: false,
      albums: [
        { id: '10cm', cover: require('../assets/img/10cm.jpeg'), alt: '10cm album cover', song: '폰서트', singer:'10cm' },
        { id: 'plastic', cover: require('../assets/img/plastic.jpeg'), alt: 'Plastic album cover', song: 'plastic love', singer: '타케우치 마리야' },
        { id: 'choi', cover: require('../assets/img/choi.jpeg'), alt: 'Choi album cover', song: '숲', singer: '최유리' },
        { id: 'geeks', cover: require('../assets/img/geeks.jpeg'), alt: 'Geeks album cover', song: 'officially missing you', singer: '긱스' },
        // { id: 'bluesky', cover: require('../assets/img/bluesky.jpeg'), alt: 'Bluesky album cover', song: 'Mr. Blue Sky', singer: 'Electric Light Orchestra' },
      ]
    };
  },
  mounted() {
    this.showContent = true;
  },
  beforeUnmount() {
    this.showContent = false;
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
.box{
  width:100vw;
  height: 12vh;
  pointer-events: none;
  position: absolute;
  z-index: 1;
  /* object-fit: cover; */
}
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    /* height: 88vh; */
    overflow-x: hidden;
    justify-content: center;
    align-content: center;
    z-index: 2;
}

.title{
    margin-bottom:30px;
    color:#172BFF;
    font-size: 1.0em;
    font-weight: 200;
}

.img-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    justify-items: center;
    padding: 10px;
    box-sizing: border-box;
}

.album {
    padding: 8px;
    border: 1px solid #172BFF;
    border-radius: 10px;
    width: 14vh;
    height:22vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    overflow-y: hidden;
    transition: background-color 0.5s ease, color 0.5s ease;
}

.coverimg {
    width: 100%;
    border-radius: 5px;
    object-fit: cover;
}

.song-title {
    margin-top: 10px;
    font-size: 1.9vh;
    font-weight: bold;
}

.singer {
    margin-top:3px;
    font-size: 1.4vh;
    align-items: center;
}
.selected{
    background-color: #172BFF;
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
    object-fit: contain;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
@media (min-width: 768px) {
    .logo{
      width:40px;
    }
    .title {
        font-size: 1.5em;
    }
    .album {
        width: 160px;
    }
    .song-title {
        font-size: 1.2em;
    }
    .singer {
        font-size: 0.9em;
    }
    .next.btt_abled {
        width: 140px;
        margin-right:70px;
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
        /* flex-grow: 1; */
    }
    .album {
        width: 160px;
        height:260px;
    }
    .title {
        font-size: 1.4em;
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
  .title{
    margin-bottom:20px;
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
        /* flex-grow: 1; */
    }
    .album {
        width: 180px;
        height:260px;
        padding:10px;
    }
    .title {
        font-size: 1.6em;
    }
    .song-title {
        font-size: 1.5em;
        margin-top:10px;
    }
    .singer{
      font-size: 1.0em;
    }
    .next.btt_abled {
        width: 150px;
        margin-right:150px;
    }
}
</style>
