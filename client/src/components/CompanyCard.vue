<template>
  <div
    class="company"
    @click.stop="jumpToCompany(companyData.url)"
  >
    <img
      :src="companyData.img"
      alt=""
    >
    <div class="company-name">{{companyData.name}}</div>
  </div>
</template>

<script>
export default {
  props: ['companyData'],
  methods: {
    jumpToCompany (url) {
      window.location.href = url
    }
  }
}
</script>

<style lang="scss" scoped>
.company {
  width: 210px;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  border: 1px solid #eee;
  box-sizing: border-box;
  margin: 0 10px 10px;

  img {
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }

  &:hover {
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
    color: #4dbfae;
  }
}
</style>
