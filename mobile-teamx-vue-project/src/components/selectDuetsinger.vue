<template>
  <header>
    <img class="logo" src="@/assets/img/logo.png" @click="goToMain" alt="">
  </header>
  <img class="box" src="@/assets/img/top-ellipse.png" alt="">
  <div class="container">
      <div class="title">원하는 아티스트를 각각 한명 골라주세요</div>
      <div class="singer-list">
        <div class="man-list">
          <div class="select-text">{{ selectText_man }}</div>
          <hr>
          <img class="blureffect" src="@/assets/img/blureffect.png" alt="">
          <div class="singer-container">
            <div class="artist" v-for="singer in filteredMaleSingers" :key="singer.id">
              <img class="singerimg" :src="singer.image" :alt="singer.alt" @click="selectMaleSinger(singer);" :class="{ selected: singer === selectedMalesinger}">
              <p class="artist-name">{{ singer.name }}</p>
            </div>
          </div>
        </div>
        <div class="woman-list">
          <div class="select-text">{{ selectText_woman }}</div>
          <hr>
          <img class="blureffect" src="@/assets/img/blureffect.png" alt="">
          <div class="singer-container">
            <div class="artist" v-for="singer in filteredFemaleSingers" :key="singer.id">
              <img class="singerimg" :src="singer.image" :alt="singer.alt" @click="selectFemaleSinger(singer);" :class="{ selected: singer === selectedFemalesinger}">
              <p class="artist-name">{{ singer.name }}</p>
            </div>
          </div>
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
  props: {
    albumId: {
      type: String,
      required: true
    },
    albumName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
        selectedMalesinger: null,
        selectedFemalesinger: null,
        selectedSingers: [],
        maleSingers: {
          cocktail: [
            { id: 'jannabi', image: require('@/assets/img/jannabi.jpeg'), alt: 'Jannabi singer', name: '최정훈' },
            { id: 'mujin', image: require('@/assets/img/mujin.jpeg'), alt: 'Mujin singer', name: '이무진' },
            { id: 'dean', image: require('@/assets/img/dean.jpeg'), alt: 'Dean singer', name: '딘' }
          ],
          akmu: [
            { id: 'kim', image: require('@/assets/img/kim.jpeg'), alt: 'Kim singer', name: '김광석' },
            { id: 'park', image: require('@/assets/img/park.jpeg'), alt: 'Park singer', name: '박효신' },
            { id: 'naul', image: require('@/assets/img/naul.jpeg'), alt: 'Naul singer', name: '나얼' }
          ],
          bubble: [
            { id: 'bibi', image: require('@/assets/img/bibi.jpeg'), alt: 'Bibi singer', name: '비비' },
            { id: 'ariana', image: require('@/assets/img/ariana.jpeg'), alt: 'Ariana singer', name: '아리아나 그란데' },
            { id: 'jennie', image: require('@/assets/img/jennie.jpeg'), alt: 'Jennie singer', name: '제니' },
            { id: 'dean', image: require('@/assets/img/dean.jpeg'), alt: 'Dean singer', name: '딘' },
            { id: 'bruno', image: require('@/assets/img/bruno.jpeg'), alt: 'Bruno singer', name: '브루노마스' }
          ]
        },
        femaleSingers: {
          cocktail: [
            { id: 'yerin', image: require('@/assets/img/yerin.jpeg'), alt: 'Yerin singer', name: '백예린' },
            { id: 'IU', image: require('@/assets/img/IU.jpeg'), alt: 'IU singer', name: 'IU' },
            { id: 'suhyun', image: require('@/assets/img/suhyun.jpeg'), alt: 'suhyun singer', name: '이수현' }
          ],
          akmu: [
            { id: 'yerin', image: require('@/assets/img/yerin.jpeg'), alt: 'Yerin singer', name: '백예린' },
            { id: 'taeyeon', image: require('@/assets/img/taeyeon.jpeg'), alt: 'Taeyeon singer', name: '태연' },
            { id: 'billie', image: require('@/assets/img/billie.jpeg'), alt: 'billie singer', name: '빌리아일리시' }
          ],
          bubble: [
            { id: 'bibi', image: require('@/assets/img/bibi.jpeg'), alt: 'Bibi singer', name: '비비' },
            { id: 'ariana', image: require('@/assets/img/ariana.jpeg'), alt: 'Ariana singer', name: '아리아나 그란데' },
            { id: 'jennie', image: require('@/assets/img/jennie.jpeg'), alt: 'Jennie singer', name: '제니' },
            { id: 'dean', image: require('@/assets/img/dean.jpeg'), alt: 'Dean singer', name: '딘' },
            { id: 'bruno', image: require('@/assets/img/bruno.jpeg'), alt: 'Bruno singer', name: '브루노마스' }
          ]
        }
      };
  },
  computed: {
    isButtonDisabled() {
        return this.selectedSingers.length == 2
    },
    selectText_man() {
      switch (this.albumId) {
        case 'cocktail':
        case 'akmu':
          return 'MAN';
        case 'bubble':
          return 'Part 01';
        default:
          return 'Part 01';
      }
    },
    selectText_woman() {
      switch (this.albumId) {
        case 'cocktail':
        case 'akmu':
          return 'WOMAN';
        case 'bubble':
          return 'Part 02';
        default:
          return 'Part 02';
      }
    },
    isAlbumSelected() {
      return this.selectedAlbum !== null;
    },
    filteredMaleSingers() {
      return this.albumId ? this.maleSingers[this.albumId] : [];
    },
    filteredFemaleSingers() {
      return this.albumId ? this.femaleSingers[this.albumId] : [];
    }
  },
  methods: {
    selectMaleSinger(singer) {
      if (this.isSelectedSinger(singer)) {
        return;
      }
      if (this.selectedMalesinger === singer) {
        this.selectedMalesinger = null;
        this.removeSelectedSinger(singer);
      } else {
        this.selectedMalesinger = singer;
        this.updateSelectedSingers();
      }
    },
    selectFemaleSinger(singer) {
      if (this.isSelectedSinger(singer)) {
        return;
      }
      if (this.selectedFemalesinger === singer) {
        this.selectedFemalesinger = null;
        this.removeSelectedSinger(singer);
      } else {
        this.selectedFemalesinger = singer;
        this.updateSelectedSingers();
      }
    },
    updateSelectedSingers() {
      this.selectedSingers = [];
      if (this.selectedMalesinger) {
        this.selectedSingers.push(this.selectedMalesinger);
      }
      if (this.selectedFemalesinger) {
        this.selectedSingers.push(this.selectedFemalesinger);
      }
    },
    removeSelectedSinger(singer) {
      const index = this.selectedSingers.findIndex(item => item.id === singer.id);
      if (index !== -1) {
        this.selectedSingers.splice(index, 1);
      }
    },
    isSelectedSinger(singer) {
      return this.selectedSingers.some(selectedSinger => selectedSinger.id === singer.id);
    },
    goToPrevPage() {
      this.$router.push({ name: 'selectListen'});
    },
    goToNextPage() {
        // this.$router.push({ name: 'listenMusic', params: { singerId: this.selectedSinger.id, singerName: this.selectedSinger.name,albumId: this.selectedAlbum.id, albumName: this.selectedAlbum.song } });
        // const sortedSingers = [...this.selectedSingers].sort();
        // 아래 방법 대신 v-model을 쓰면 위의 코드를 쓸 수 있음.
        const sortedSingers = [...this.selectedSingers].sort((a, b) => a.id.localeCompare(b.id));
        const selectedSingerIds = sortedSingers.map(singer => singer.id);
        const selectedSingerNames = sortedSingers.map(singer => singer.name);
        // 다음 페이지로 데이터를 전달
        this.$router.push({ 
          name: 'listenMusic', 
          params: { 
            singerIds: selectedSingerIds.join(','), // 배열을 문자열로 변환하여 전달
            singerNames: selectedSingerNames.join(',') // 배열을 문자열로 변환하여 전달
          } 
        });
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
    font-size: 1.1em;
}

.man-list,
.woman-list {
  white-space: nowrap;
  /* min-width:100%; */
}

 .singer-list{
  display: flex;
  flex-direction: column;
  align-items: center;
 }
.select-text{
  color:#172BFF;
}
.selected {
  border: 4px solid #172BFF;
}

.singer-container{
  width: 80vw;
  display: flex;
  justify-content: space-evenly;
  height: auto;
  overflow-y: hidden;
  overflow-x: scroll;
}
.artist{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5px;
}
.singerimg{
  width: 18vw;
  height: 18vw;
  max-width: 250px;
  max-height: 250px;
  padding: 5px;
  border-radius: 50%;
  object-fit: cover;
}

.artist-name{
  font-size: 0.9em;
  margin-top: 8px;
  margin-bottom: 8px;
}

hr{
  margin: 0;
  padding: 0;
}

.blureffect{
  width:100%;
  height:30px;
}

.woman-list{
  margin-top:50px;
}


.btt-container{
  display: flex;
  width:100vw;
  justify-content: space-between;
  margin-top:60px;
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
    .back{
      margin-left:70px;
    }
    .next.btt_abled{
      margin-right:70px;
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