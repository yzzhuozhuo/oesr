<template>
  <div class="main">
    <swiper :swiperImgs="swiperImgs" />
    <div class="contet">
      <div class="content-host">
        <div class="content-host-title">
          <img src="http://static.nowcoder.com/images-nk/img/icons/ico-fire.png">
          <div>火热报名中</div>
        </div>
        <div class="img-content hot">
          <div v-for="(item, index) in hotImgs" :key="index">
            <img :src="item" class="img-container">
          </div>
        </div>
      </div>
      <div class="content-strategy">
        <div class="content-host-title">
          <i class="el-icon-s-opportunity"></i>
          <div>求职攻略</div>
        </div>
        <div class="content-explain">
          <el-divider content-position="center" class="explain">校招经验分享</el-divider>
        </div>
        <div class="img-content share">
          <div v-for="(item, index) in shareImgs" :key="index" class="no-margin-image">
            <img :src="item" class="img-container img-share">
          </div>
        </div>
        <div class="content-explain">
          <el-divider content-position="center" class="explain">求职攻略专栏</el-divider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper'

export default {
  name: 'LearnPage',
  components: {
    Swiper
  },
  data () {
    return {
      swiperImgs: [
        'https://uploadfiles.nowcoder.com/images/20191231/4107856_1577773849648_EBDA8C006A521B8F4B64E3C834ED1118',
        'https://uploadfiles.nowcoder.com/images/20190708/4107856_1562577889040_895F882A6AADA8C739DA78B2AB48B6B1'
      ],
      hotImgs: [
        'https://uploadfiles.nowcoder.com/files/20191212/59_1576134154605_3.png',
        'https://uploadfiles.nowcoder.com/files/20191212/59_1576134194565_2.png',
        'https://uploadfiles.nowcoder.com/files/20191212/59_1576134223891_1.png',
        'https://uploadfiles.nowcoder.com/files/20190515/59_1557901417732_机器.jpg',
        'https://uploadfiles.nowcoder.com/files/20190704/59_1562206905797_高级项目课.png',
        'https://uploadfiles.nowcoder.com/files/20200305/59_1583403105947_59_1576134097656_4.png'
      ],
      shareImgs: [
        'https://uploadfiles.nowcoder.com/images/20190802/59_1564751822240_A3E11644B0F36A72563D1971588638CA',
        'https://uploadfiles.nowcoder.com/images/20190802/59_1564751859605_842E238B1E65FCDB7DEBEC618981D188',
        'https://uploadfiles.nowcoder.com/images/20190802/59_1564751881039_8F344281B28AFA1A9C114350D6061063',
        'https://uploadfiles.nowcoder.com/images/20190802/59_1564751897163_2DCC6450D5B221A6031596FC2B3BB9C8',
        'https://uploadfiles.nowcoder.com/images/20190802/59_1564751917881_767EF39C8917BA287CC609B24341ADB8',
        'https://uploadfiles.nowcoder.com/images/20190802/59_1564751933287_A741812942864A153F5C82232F24E8F5',
        'https://uploadfiles.nowcoder.com/images/20190802/59_1564751952849_55C7FBFF49F35899192DA86DD4F7AE57',
        'https://uploadfiles.nowcoder.com/images/20190802/59_1564751965614_3F87637210B58521E91D6EE27F3986E9',
        'https://uploadfiles.nowcoder.com/images/20190802/59_1564751982835_2869449F66866826D4D9FD3D24427C9F',
        'https://uploadfiles.nowcoder.com/images/20190802/59_1564752001930_C3A1840F5D5715471D514B373440CFD1',
        'https://uploadfiles.nowcoder.com/images/20190802/59_1564752020829_532270391A0C6F8673FE58307D1EA829'
      ]
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
.main {
}
.contet {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content-host, .content-strategy {
  width: 1200px;
  background: #ffffff;
  margin-bottom: 20px;
}
.content-strategy {
  display: flex;
  flex-direction: column;
  // align-items: center;
}
.content-host-title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
  color: #ff8933;
}
.content-host-title img {
  margin-right: 5px;
}
.img-content {
  display: flex;
  margin: 15px 0 20px;
  padding: 0 10px;
}
.hot {
  justify-content: space-around;
}
.share {
  flex-wrap: wrap;
  padding: 0 22px;
}
.no-margin-image:nth-child(6n) {
  margin-right: 0;
}
.img-container {
  width: 180px;
  height: 130px;
}
.img-share {
  margin-right: 12px;
  margin-bottom: 8px;
}
.img-share:hover {
  transform: scale(1.1);
}
.el-icon-s-opportunity {
  margin-right: 5px;
  color: #ff8933;
}
.content-explain {
  display: flex;
  align-items: center;
  justify-content: center;
}
.explain {
  width: 30%;
}
</style>
