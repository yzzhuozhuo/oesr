<template>
  <div class="selector">
    <span
      class="item"
      v-for="(item, index) in selectList"
      :key="index"
      :class="label === index ? 'active' : 'nomal'"
      @click.stop="checkout(index, item.label)"
    >{{item.name}}</span>
  </div>
</template>

<script>
export default {
  props: ['selectList', 'label'],
  data () {
    return {
      selectedCity: '',
      selectedPost: ''
    }
  },
  methods: {
    checkout (index, label) {
      this.$emit('selectedLabel', label)
    }
  }
}
</script>

<style scoped>
.item {
  height: 28px;
  padding: 0 5px;
  line-height: 28px;
  display: inline-block;
  white-space: nowrap;
  font-size: 14px;
  margin-right: 15px;
  margin-bottom: 6px;
  cursor: pointer;
  text-align: center;
}

.nomal {
  color: #333;
}

.active {
  background-color: #25bb9b;
  color: #fff;
}
</style>
