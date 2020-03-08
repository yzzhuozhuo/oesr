<template>
  <div class="post-card">
    <div class="post-content">
      <img
        class="post-img"
        src="https://images.nowcoder.com/images/20200131/307348_1580440936669_8D28A95D40F7885A11AD11F2AC43D4EC?x-oss-process=image/resize,m_mfit,h_60,w_60"
        alt=""
      >
      <div class="post-name">
        <div class="top">前端工程师</div>
        <div class="bottom">清远墨墨教育科技有限公司</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['postCardData'],
  data () {
    return {}
  },
  mounted () {}
}
</script>

<style scoped>
.post-card {
  padding: 10px;
  margin: 0 5px 10px 5px;
  width: 261px;
  height: 60px;
  display: inline-block;
  overflow: hidden;
  border: 1px solid #eee;
  cursor: pointer;
  border-radius: 2px;
}

.post-card:hover {
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
  color: #4dbfae;
}

.post-content {
  display: flex;
}

.post-name {
  margin-left: 5px;
  padding: 5px 0;
}

.post-name > .bottom {
  font-size: 14px;
  color: #aaa;
  margin-top: 8px;
}
</style>
