
  <template>
  <div class="list">
    <img
      :src="listInfo.img"
      class="img"
    >
    <div class="type">{{listInfo.type}}</div>
    <div class="date">{{listInfo.date}}</div>
  </div>
</template>

<script>
export default {
  props: ['listInfo'],
  data () {
    return {}
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
@mixin flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.list {
  @include flex-row;
  font-size: 12px;
  margin: 6px 0;

  .img {
    width: 12px;
    height: 12px;
    margin-right: 6px;
  }

  .type {
    flex: 1;
    color: #1abc9c;
  }

  .date {
    color: #5e5d5d;
  }
}
</style>
