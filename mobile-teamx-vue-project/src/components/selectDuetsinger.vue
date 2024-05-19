<template>
    <img class="logo" src="@/assets/img/logo.png" @click="goToMain" alt="">
    <div class="container">
        <div class="title">원하는 아티스트를 골라주세요</div>
        <div class="img-container">
            <div class="artist" v-for="singer in singers" :key="singer.id" @click="selectSinger(singer)" :class="{ selected: isSelectedSinger(singer) }">
                <img class="singerimg" :src="singer.image">

                <p class="artist-name">{{ singer.name }}</p>
            </div>
        </div>
    </div>
    <div class="btt-container">
      <img class="back" src="@/assets/img/back.png" alt="" @click="goToPrevPage">
      <img class="next" src="@/assets/img/next.png" alt="" @click="goToNextPage" :class="{ 'btt_abled': isButtonDisabled }">
    </div>
</template>

<script>
export default {
  data() {
    return {
        selectedSingers: [],
        singers: [
            { id: 'kim', image: require('../assets/img/kim.jpeg'), alt: 'Kim singer', name: '김광석' },
            { id: 'mujin', image: require('../assets/img/mujin.jpeg'), alt: 'Mujin singer', name: '이무진' },
            { id: 'yerin', image: require('../assets/img/yerin.jpeg'), alt: 'Yerin singer', name: '백예린'},
            { id: 4, image: require('../assets/img/bibi.jpeg'), alt: 'Bibi singer', name: '비비'}
            ]
        };
  },
  computed: {
    isButtonDisabled() {
        return this.selectedSingers.length == 2
    }
  },
  methods: {
    selectSinger(singer) {
        // 이미 선택된 가수인지 확인
        const index = this.selectedSingers.findIndex(item => item.id === singer.id);
        if (index === -1) {
          // 선택된 가수 배열에 추가
          this.selectedSingers.push(singer);
        } else {
          // 이미 선택된 가수이면 선택 해제
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
.logo{
    width:30px;
    margin-top:25px;
    margin-left:25px;
}
.title{
    margin-top:60px;
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
.artist{
    padding: 8px;
    border: 1px solid #172BFF;
    border-radius: 10px;
    width:110px;
    margin-right:20px;
    margin-top:20px;
}
.singerimg{
    width:110px;
    height:160px;
    border-radius: 5px;
    object-fit: cover;
}
.img-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}
.artist-name{
    margin-top:10px;
    margin-bottom:10px;
    font-size:13px;
    font-weight: bold;
}
.selected{
    background-color: blue;
    color:white;
}
.btt-container{
  display: flex;
  width:100vw;
  justify-content: space-between;
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
.back{
  width:100px;
  margin-left:20px;
}
</style>