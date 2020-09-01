<template>
  <div class="img-box">
    <div class="img-item" v-for="(item, index) in 10" :key="index">
      <div class="top">
        <img v-fuzzy="original" alt="" :src="compress" >
      </div>
      <div class="bottom">
        这是一段文字，哈哈哈哈
      </div>
    </div>
  </div>
</template>

<script>
import original from '../assets/example.png'
import compress from '../assets/example_fuzzy.png'
export default {
  name: "ImgBox",
  data() {
    return {
      original,
      compress
    };
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-box {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding-top: 20px;
}
.img-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  border-radius: 6px;
  background: #ffffff;
  box-shadow: 0px 0px 3px 3px #eeeeee;
  overflow: hidden;
  margin-bottom: 20px;
}
.img-item .top{
  width: 100%;
  overflow: hidden;
}
.img-item .top img{
  display: block;
  width: 100%;
  filter: blur(20px);
  transition: all 0.3s ease-in-out;
}
.img-item .bottom{
  width: 100%;
  min-height: 150px;
  padding: 15px;
  text-align: left;
}
</style>
