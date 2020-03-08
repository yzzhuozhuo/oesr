<template>
  <div class="main">
    <div class="header-title">求职 > 校招日历</div>
    <div class="calendar">
      <el-calendar class="calendar-content">
        <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
        <template
          slot="dateCell"
          slot-scope="{date, data}">
          <p :class="data.isSelected ? 'is-selected' : ''">
            {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
          </p>
        </template>
      </el-calendar>
    </div>
  </div>
</template>

<script>

export default {
  name: 'WriteCalendar',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 61px;
  .header-title {
    margin-left: 154px;
    padding: 15px 0;
  }
  .calendar {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    .calendar-content {
      width: 1000px;
      padding: 20px;
    }
  }
}

.is-selected {
  color: #1989FA;
}
</style>
