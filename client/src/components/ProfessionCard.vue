<template>
  <div
    class="profession"
    @click.stop="jumpTpTestPage(professionData.jumpUrl)"
  >
    <div class="profession-name">{{professionData.name}}</div>
    <img
      class="profession-img"
      :src="professionData.img"
    />
  </div>
</template>

<script>
export default {
  props: ['professionData'],
  methods: {
    jumpTpTestPage (jumpUrl) {
      window.location.href = jumpUrl
    }
  }
}
</script>

<style scoped>
.profession {
  width: 220px;
  height: 170px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  padding: 20px 10px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
}

.profession:hover {
  color: #4dbfae;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.profession-img {
  width: 80px;
  height: 80px;
  margin-top: 20px;
}
</style>
