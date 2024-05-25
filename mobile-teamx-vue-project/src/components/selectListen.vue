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
          { id: 'cocktail', cover: require('../assets/img/cocktail.jpeg'), alt: 'cocktail album cover', song: '칵테일 사랑', singer: '마로니에'},
          { id: 'akmu', cover: require('../assets/img/akmu.jpeg'), alt: 'akmu album cover', song: '어떻게 이별까지 사랑하겠어, 널 사랑하는 거지', singer: 'akmu'},
          { id: 3, cover: require('../assets/img/Y.jpeg'), alt: 'Y album cover', song: 'Y', singer: '프리스타일' },
          { id: 4, cover: require('../assets/img/hot.jpeg'), alt: 'hot album cover', song: 'candy', singer: 'H.O.T.' },
          { id: 5, cover: require('../assets/img/pretty.jpeg'), alt: 'pretty album cover', song: '예뻤어', singer: 'DAY6' },
          { id: 6, cover: require('../assets/img/idle.jpeg'), alt: 'idle album cover', song: '나는 아픈 건 딱 질색이니까', singer: '(여자)아이들' }

        ],
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
.img-container{
  display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    justify-items: center;
    /* width: 100%; */
    padding: 10px;
    box-sizing: border-box;
}
.album{
    padding: 8px;
    border: 1px solid #172BFF;
    border-radius: 10px;
    width: 30vw;
    height:auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    cursor: pointer;
}
.coverimg{
    width: 100%;
    border-radius: 5px;
    object-fit: cover;
}

.song-title{
    margin-top:5px;
    font-size:0.9em;
    font-weight: bold;
}
.singer{
    font-size:0.8em;
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
    .next.btt_abled {
        width: 120px;
        margin-right: 50px;
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
    .next.btt_abled {
        width: 140px;
        margin-right:150px;
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
    .next.btt_abled {
        width: 160px;
        margin-right:150px;
    }

}
</style>