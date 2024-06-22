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
          { id: 'cocktail', cover: require('../assets/img/cocktail.jpeg'), alt: 'cocktail album cover', song: '칵테일 사랑', singer: '마로니에'},
          { id: 'bubble', cover: require('@/assets/img/bubble.jpeg'), alt: 'Bubble album cover', song: 'Bubble Gum', singer: 'NewJeans' },
          { id: 'akmu', cover: require('../assets/img/akmu.jpeg'), alt: 'akmu album cover', song: `어떻게 이별까지 사랑하겠어, 널 사랑하는 거지`, singer: 'AKMU'},
        ],
    };
  },
  mounted() {
    this.showContent = true;
  },
  beforeUnmount() {
    this.showContent = false;
  },
  methods: {
    selectAlbum(album) {
      this.selectedAlbum = album;
      this.goToNextPage();
    },
    goToNextPage() {
      this.$router.push({ name: 'selectDuetsinger', params: { albumId: this.selectedAlbum.id, albumName: this.selectedAlbum.song } });
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
  height: 18vh;
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
}
.title{
    /* margin-top:0px; */
    margin-bottom:30px;
    color:#172BFF;
    font-size: 1.0em;
}
.img-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top:50px;
  /* width: 100%; */
  padding: 10px;
  box-sizing: border-box;
}
.album{
    padding: 10px;
    width: 40vw;
    min-width:150px;
    height:auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    align-items: center;
}
.album:nth-child(3) {
    margin-top:20px;
}
.coverimg{
    width: 100%;
    border-radius: 5px;
    object-fit: cover;
}

.song-title{
  margin-top:5px;
  font-size:0.75em;
  font-weight: bold;
  text-align: center;
}
.singer{
    font-size:0.8em;
    margin-top:5px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
@media (min-height: 600px) and (max-height: 750px) {
  .box{
    height: 8vh;
  }
  .container{
    height: 90vh;
  }
  .title {
    font-size: 1.3em;
    margin-bottom:20px;
  }
  .album{
    width:90px;
  }
  .song-title {
    margin-top: 5px;
    font-size: 0.7em;
    font-weight: bold;
  }
  .singer {
      font-size: 0.6em;
  }
}

@media (min-width: 768px){
    .logo{
      width:40px;
    }
    .album {
        width: 150px;
    }
    .song-title {
        font-size: 1.3em;
    }
    .singer {
        font-size: 0.7em;
    }
    .title {
        font-size: 1.8em;
    }
    .img-container {
      grid-gap: 20px;
    }
}
@media (min-width: 1024px) {
    .img-container {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 15px;
        width: auto;
    }
    .album {
        width: 150px;
        height:auto;
    }
    .title {
        font-size: 1.8em;
    }
    .song-title {
        margin-top:10px;
    }

}

@media (min-height: 1366px) {
    .img-container {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 15px;
        width: auto;
    }
    .album {
        width: 200px;
        height:auto;
    }
    .title {
        font-size: 2em;
    }
    .song-title {
        margin-top:10px;
    }

}
</style>