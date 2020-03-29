<template>
  <div
    class="profession"
    @click.stop="jump(theme._id)"
  >
    <div class="profession-name">{{professionCardData.name}}</div>
    <img
      class="profession-img"
      :src="professionCardData.img"
    />
  </div>
</template>

<script>
export default {
  props: ['professionCardData', 'theme'],
  methods: {
    jump (themeDetailId) {
      this.$router.push({
        path: '/questionList',
        query: {
          themeDetailId
        }
      })
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
  display: inline-block;
  margin: 5px 18px 13px 0;
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
