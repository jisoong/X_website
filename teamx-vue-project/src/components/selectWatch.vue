<template>
  <div class="page">
    <header>
      <img class="logo" src="../assets/img/logo.png" @click="goToMain" alt="">
    </header>

    <h2 class="title">{{ selectText }}</h2>
    <div class="container">
      <div class="album_container" @click="albumClick">
        <div class="box big-box" :class="{ 'disabled': !isSectionClicked }"></div>
        <div class="scrollable" :class="{ 'disabled': isSectionClicked }">
          <div class="album" v-for="album in albums" :key="album.id">
            <img class="coverimg" :src="album.cover" @click="selectAlbum(album);" :class="{ selected: album === selectedAlbum}">
            <p class="song-title">{{ album.song }}</p>
          </div>
        </div>
      </div>
      <div class="artist_container" @click="artistClick">
        <div class="box big-box" :class="{ 'disabled': !isSectionClicked }"></div>
        <div class="scrollable" :class="{ 'disabled': !isSectionClicked }">
          <div class="artist" v-for="singer in singers" :key="singer.id">
            <img class="singerimg" :src="singer.image" @click="selectSinger(singer)" :class="{ selected: singer === selectedSinger }">
            <p class="artist-name">{{ singer.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <button class="next_btt" @click="goToSecondPage" :class="{ 'btt_disabled': isButtonDisabled }">선택 완료</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedSinger: null,
      selectedAlbum: null,
      isSectionClicked: false, 
      albums: [
        { id: '10cm', cover: require('@/assets/img/10cm.jpeg'), alt: '10cm album cover', song: '폰서트' },
        // { id: 'plastic', cover: require('@/assets/img/plastic.jpeg'), alt: 'Shin album cover', song: 'plastic love' },
        { id: 'choi', cover: require('@/assets/img/choi.jpeg'), alt: 'Choi album cover', song: '숲' },
        { id: 'geeks', cover: require('@/assets/img/geeks.jpeg'), alt: 'Geeks album cover', song: 'officially missing you' },
        // { id: 'bluesky', cover: require('@/assets/img/bluesky.jpeg'), alt: 'Bluesky album cover', song: 'Mr. Blue Sky' },
      ],
      singers: [
      { id: 'kim', image: require('@/assets/img/kim.jpeg'), alt: 'Kim singer', name: '김광석' },
      { id: 'mujin', image: require('@/assets/img/mujin.jpeg'), alt: 'Mujin singer', name: '이무진' },
      { id: 'yerin', image: require('@/assets/img/yerin.jpeg'), alt: 'Yerin singer', name: '백예린'},
      { id: 'bibi', image: require('@/assets/img/bibi.jpeg'), alt: 'IU singer', name: '비비'}
      ]
    };
  },
  computed: {
    isButtonDisabled() {
      return this.selectedSinger === null || this.selectedAlbum === null;
    },
    selectText() {
        return this.isSectionClicked ? '원하는 아티스트를 골라주세요' : '원하는 음악을 골라주세요';
      }
  },
  methods: {
    selectSinger(singer) {
      if (this.selectedSinger === singer) {
        this.selectedSinger = null;
      } else {
        this.selectedSinger = singer;
      }
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
      // 가수 선택하기전까지 앨범으로 못넘어감
      if (this.selectedSinger !== null) {
        this.isSectionClicked = false;
      }

      // this.isSectionClicked = false;
    },
    artistClick() {
      this.isSectionClicked = true;
    },
    goToSecondPage() {
      this.$router.push({ name: 'videoPage', params: { singerId: this.selectedSinger.id, singerName: this.selectedSinger.name,albumId: this.selectedAlbum.id, albumName: this.selectedAlbum.song } });
    },
    goToMain(){
      this.$router.push('/')
    }
  }
};
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");
.page {
	font-family: 'Pretendard', sans-serif;
}

.page {
  display: flex;
  flex-direction: column;
  height: 95vh;
  justify-content: space-between;
}

header {
  flex-shrink: 0;
}

.logo {
  width: 50px;
  padding: 20px;
}

.title {
  color: #172BFF;
  text-align: center;
  font-size: 1.5em;
  margin-top: 2vh;
  padding-bottom: 1vh;
}

.container {
  display: flex;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
  flex-wrap: wrap;
}

.box {
  position: absolute;
}
.big-box.disabled {
  width: 40vw;
  height: 30vw;
  max-width: 600px;
  max-height: 400px;
  pointer-events: none;
  box-shadow: inset -20px 0px 30px 20px rgba(255, 255, 255);
  padding: 10px;
}

.scrollable {
  width: 40vw;
  height: 30vw;
  max-width: 600px;
  max-height: 400px;
  overflow: auto;
  padding: 10px;
}

.album img {
  object-fit: cover;
  border-radius: 20%;
  padding: 5px;
  transition: width 0.7s, height 0.7s;
}

.artist img {
  object-fit: cover;
  border-radius: 50%;
  padding: 5px;
  transition: width 0.7s, height 0.7s;
}

.scrollable.disabled {
  pointer-events: none;
  opacity: 0.5;
  filter: blur(4px);
  width: 30vw;
  height: 20vw;
  max-width: 500px;
  max-height: 250px;
  padding: 10px;
}

.scrollable.disabled img {
  width: 10vw;
  height: 10vw;
  max-width: 150px;
  max-height: 150px;
  padding: 5px;
}

.album {
  width: 100%;
  /* height: 80%; */
  display: flex;
  align-items: center;
  padding-bottom:10px;
}

.coverimg {
  width: 13vw;
  height: 13vw;
  max-width: 250px;
  max-height: 250px;
  padding: 5px;
}

.song-title {
  padding-left: 50px;
  font-size: 1.5em;
}

.selected {
  border: 4px solid #172BFF;
}

.artist_container .big-box {
  width: 40vw;
  height: 30vw;
  max-width: 600px;
  max-height: 400px;
  pointer-events: none;
  box-shadow: inset -20px 0px 50px 20px rgba(255, 255, 255);
  padding: 10px;
}

.artist {
  width: 100%;
  /* height: 100%; */
  display: flex;
  align-items: center;
  padding-bottom:10px;
}

.scrollable.disabled .artist {
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
}

.singerimg {
  width: 13vw;
  height: 13vw;
  max-width: 250px;
  max-height: 250px;
  padding: 5px;
}

.artist-name {
  padding-left: 50px;
  font-size: 1.5em;
}

.next_btt {
  font-size: 1em;
  padding: 15px;
  border-radius: 45px;
  color: #172BFF;
  border-color: #172BFF;
  background-color: rgba(255, 255, 255);
  display: block;
  margin: 20px auto;
  box-shadow: none;
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

@media (max-width: 768px) {
  .title {
    font-size: 1.2em;
    margin-top: 5vh;
  }

  .scrollable,
  .big-box.disabled {
    width: 70vw;
    height: 50vw;
  }

  .scrollable.disabled {
    width: 60vw;
    height: 30vw;
  }

  .coverimg,
  .singerimg {
    width: 40vw;
    height: 40vw;
  }

  .song-title,
  .artist-name {
    font-size: 1.2em;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.0em;
    margin-top: 3vh;
  }

  .scrollable,
  .big-box.disabled {
    width: 80vw;
    height: 60vw;
  }

  .scrollable.disabled {
    width: 70vw;
    height: 40vw;
  }

  .coverimg,
  .singerimg {
    width: 50vw;
    height: 50vw;
  }

  .song-title,
  .artist-name {
    font-size: 1em;
    padding-left: 20px;
  }

  .next_btt {
    font-size: 0.8em;
    padding: 10px;
  }
}
</style>
