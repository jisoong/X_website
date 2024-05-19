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
    margin-top:-120px;
    margin-bottom:30px;
    color:#172BFF;
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