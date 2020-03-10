<template>
  <div class="main">
    <div class="header-title">求职 > 校招日历</div>
    <div class="calendar">
      <el-calendar v-model="value" class="calendar-content">
        <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
        <template
          slot="dateCell"
          slot-scope="{date, data}">
          <!--自定义内容-->
          <div>
            <div class="calendar-day">{{ data.day.split('-').slice(2).join('-') }}</div>
            <div v-for="(item, index) in calendarData" :key="index">
              <div v-if="(item.months).indexOf(data.day.split('-').slice(1)[0])!=-1">
                <div v-if="(item.days).indexOf(data.day.split('-').slice(2).join('-'))!=-1">
                  <el-tooltip class="item" effect="dark" :content="item.things" placement="right">
                    <div class="is-selected">{{item.things}}</div>
                  </el-tooltip>
                </div>
                <div v-else></div>
              </div>
              <div v-else></div>
            </div>
          </div>
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
      calendarData: [
        { months: ['03'], days: ['10', '11', '12'], things: '14:00 美团笔试' },
        { months: ['03'], days: ['10', '11', '12'], things: '14:00 字节跳动笔试' }
      ],
      value: new Date()
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
    margin-left: 204px;
    padding: 15px 0;
  }
  .calendar {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    .calendar-content {
      width: 900px;
      padding: 20px;
      .calendar-day {
      }
    }
  }
}

.is-selected {
  font-size: 13px;
  color: #909090;
}

.is-selected:hover {
  background: #eee;
}

</style>
