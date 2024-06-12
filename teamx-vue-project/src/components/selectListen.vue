<template>
    <header>
      <img class="logo" src="@/assets/img/logo.png" @click="goToMain" alt="">
    </header>
    <div class="container">
      <img class="box" src="@/assets/img/Ellipse_top.png" alt="" :class="{ellipse_h: isAlbumSelected}">
      <h2 class="title">{{ selectTitleText }}</h2>
        <div class="album-container" v-if="!isAlbumSelected">
          <div class="album" v-for="album in albums" :key="album.id">
            <img class="coverimg" :src="album.cover" @click="selectAlbum(album);" :class="{ selected: album === selectedAlbum}">
            <p class="song-title">{{ album.song }}</p>
            <p class="singer"> -{{ album.singer }} </p>
          </div>
        </div>
        <div class="select-container" v-if="isAlbumSelected">
          <div class="album  animated">
              <img class="coverimg" :src="selectedAlbum.cover" >
              <p class="song-title">{{ selectedAlbum.song }}</p>
              <p class="singer"> -{{ selectedAlbum.singer }} </p>
          </div>
          <div class="singer-list">
            <div class="man-list">
              <div>{{ selectText_man }}</div>
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
              <div>{{ selectText_woman }}</div>
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
        </div>

      
      <button v-if="isAlbumSelected" class="next_btt" @click="goToSecondPage" :class="{ 'btt_disabled': isButtonDisabled }">선택 완료</button>
    </div>

</template>
  
<script>
  export default {
    data() {
      return {
        selectedMalesinger: null,
        selectedFemalesinger: null,
        selectedAlbum: null,
        isSectionClicked: false, 
        selectedSingers: [],
        albums: [
          { id: 'cocktail', cover: require('@/assets/img/cocktail.jpeg'), alt: 'cocktail album cover', song: '칵테일 사랑', singer: '마로니에' },
          { id: 'akmu', cover: require('@/assets/img/akmu.jpg'), alt: 'akmu album cover', song: `어떻게 이별까지 사랑하겠어, 널 사랑하는 거지`, singer: 'AKMU' },
          //{ id: 'bubble', cover: require('@/assets/img/bubble.jpeg'), alt: 'Bubble album cover', song: 'Bubble Gum', singer: 'NewJeans' },
        ],
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
        return this.selectedSingers.length != 2 || this.selectedAlbum === null;
      },
      selectTitleText() {
          return this.isSectionClicked ? '원하는 아티스트를 2명 골라주세요' : '원하는 음악을 골라주세요';
      },
      selectText_man() {
        switch (this.selectedAlbum.id) {
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
        switch (this.selectedAlbum.id) {
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
        return this.selectedAlbum ? this.maleSingers[this.selectedAlbum.id] : [];
      },
      filteredFemaleSingers() {
        return this.selectedAlbum ? this.femaleSingers[this.selectedAlbum.id] : [];
      }
    },
    methods: {
      selectMaleSinger(singer) {
        if (this.selectedMalesinger === singer) {
          this.selectedMalesinger = null;
          this.removeSelectedSinger(singer);
        } else {
          this.selectedMalesinger = singer;
          this.updateSelectedSingers();
        }
      },
      selectFemaleSinger(singer) {
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
      selectAlbum(album) {
        if (this.selectedAlbum === album) {
          this.selectedAlbum = null;
          this.isSectionClicked = false;
        } else {
          this.selectedAlbum = album;
          this.isSectionClicked = true;
        }
      },
      albumClick() {
        if (this.selectedSingers.length === 2) {
          this.isSectionClicked = false;
        }
        // this.isSectionClicked = false;
      },
      artistClick() {
        this.isSectionClicked = true;
      },
      goToSecondPage() {
        const sortedSingers = [...this.selectedSingers].sort((a, b) => a.id.localeCompare(b.id));
        const selectedSingerIds = sortedSingers.map(singer => singer.id);
        const selectedSingerNames = sortedSingers.map(singer => singer.name);
        const albumId = this.selectedAlbum.id;
        const albumName = this.selectedAlbum.song;
        this.$router.push({ 
          name: 'listenMusic', 
          params: { 
            singerIds: selectedSingerIds.join(','),
            albumId: albumId,
            albumName: albumName,
            singerNames: selectedSingerNames.join(',')
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
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");
header, .container {
	font-family: 'Pretendard', sans-serif;
}

header{
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000; /* Keep the header on top */
}

.logo{
    width: 50px;
    padding: 20px;
}

.box{
  width: 100%;
  height:  180px;
  pointer-events: none;

}

.ellipse_h{
  height:  13vh;
}

.end-ellipse {
  width: 100%;
  height:  180px;
  pointer-events: none;

}
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.title {
  color: #172BFF;
  text-align: center;
  font-size: 1.2em;
  /* margin-top: 2vh; */
  padding-bottom: 1vh;

}

.album-container{
  display: flex;
  width: 60%;
  margin-top:60px;
}

.album{
  width: 100%;
  /* height: 80%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom:10px;
  margin-right:60px;
  
}

.singer-list{
  margin-left:60px;
  
}

.man-list{
  width: 30vw;
  min-width:100%;
}

.coverimg{
  width: 13vw;
  height: 13vw;
  max-width: 250px;
  max-height: 250px;
  padding: 5px;
  object-fit: cover;
}

.album img {
  object-fit: cover;
  border-radius: 20%;
  padding: 5px;
  transition: width 0.7s, height 0.7s;
}

.song-title{
  font-size: 1em;
  width: 190px;
  text-align: center;
  font-weight: bold;
  margin-top:10px;
}
.singer{
  font-size: 0.9em;
  margin-top:10px;
}

.selected {
  border: 4px solid #172BFF;
}

.select-container{
  display: flex;
  align-items: center;
  margin-top: 50px;
}

.singer-container{
  display: flex;
  justify-content: space-evenly;
}
.artist{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.singerimg{
  width: 6vw;
  height: 6vw;
  max-width: 250px;
  max-height: 250px;
  padding: 5px;
  border-radius: 50%;
  object-fit: cover;
}

.artist-name{
  font-size: 0.9em;
  margin-top: 8px;
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

.next_btt {
  font-size: 0.8em;
  padding: 10px;
  border-radius: 45px;
  color: #172BFF;
  border-color: #172BFF;
  background-color: rgba(255, 255, 255);
  display: block;
  margin: 20px auto;
  box-shadow: none;
  margin-top: 50px;
}

.next_btt:hover {
  background-color: #172BFF;
  color: white;
  border-color: white;
}

.next_btt.btt_disabled {
  background-color: #ccc;
  color: #888;
  pointer-events: none;
  border-color: rgba(0, 0, 0, 0.7);
}

@keyframes slight-move {
  0% {
    transform: translate(60px, -60px);
    opacity: 0.5;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}

.animated {
  animation: slight-move 0.5s ease-in-out;
}
  </style>