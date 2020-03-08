<template>
  <div class="main">
    <div class="header">
      <div class="search-title-top">宣讲会查询系统</div>
      <div class="search-title-bottom">第一时间获得宣讲信息</div>
      <div class="input-content">
        <el-input
          class="input-p"
          placeholder="请输入宣讲学校/宣讲城市/宣讲公司查询"
          v-model="searchVal">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
    <div class="main-content">
      <div class="content">
        <div class="title">
          <div class="point"></div>
          <span class="preach">近期宣讲会</span>
          <span class="totle">共100条信息</span>
          <el-button type="text" class="btn" @click="addMsg">+我要添加</el-button>
        </div>
        <div class="select">
          <el-select v-model="selectCity" placeholder="请选择宣讲城市">
            <el-option
              v-for="item in cityOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="selectSchool" placeholder="请选择宣讲学校" class="select-school">
            <el-option
              v-for="item in schoolOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-date-picker
            v-model="pickDateValue"
            type="datetimerange"
            value-format="timestamp"
            :picker-options="pickerOptions"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            align="right"
            :default-time="defaultTime">
          </el-date-picker>
        </div>
        <div class="preach-content" v-for="(item, index) in preachData" :key="index">
          <div class="title">{{item.preachTitle}}</div>
          <div class="preach-info">
            <div class="city">
              <i class="el-icon-map-location"></i>
              <span>宣讲城市：{{item.preachCity}}</span>
            </div>
            <div class="school">
              <i class="el-icon-school"></i>
              <span>宣讲高校：{{item.preachSchool}}</span>
            </div>
            <div class="time">
              <i class="el-icon-time"></i>
              <span>宣讲时间：{{item.preachTime}}</span>
            </div>
          </div>
        </div>
        <div class="pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NewPage',
  data () {
    return {
      searchVal: '',
      selectCity: '宣讲城市',
      selectSchool: '宣讲学校',
      pickDateValue: '',
      currentPage: 1,
      defaultTime: ['00:00:00', '23:59:59'],
      pickerOptions: {
        shortcuts: [{
          text: '今日',
          onClick (picker) {
            const start = new Date(new Date(new Date().toLocaleDateString()).getTime())
            const end = new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '昨日',
          onClick (picker) {
            const start = new Date(new Date(new Date().toLocaleDateString()).getTime() - 3600 * 1000 * 24 * 1)
            const end = new Date(new Date(new Date().toLocaleDateString()).getTime() - 3600 * 1000 * 24 * 1 + 24 * 60 * 60 * 1000 - 1)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      cityOptions: [{
        value: '北京',
        label: '北京'
      }, {
        value: '厦门',
        label: '厦门'
      }, {
        value: '深圳',
        label: '深圳'
      }, {
        value: '成都',
        label: '成都'
      }, {
        value: '陕西',
        label: '陕西'
      }],
      schoolOptions: [
        {
          value: '西安科技大学',
          label: '西安科技大学'
        },
        {
          value: '陕西科技大学',
          label: '陕西科技大学'
        },
        {
          value: '西安电子科技大学',
          label: '西安电子科技大学'
        },
        {
          value: '北京大学',
          label: '北京大学'
        }
      ],
      preachData: [
        {
          preachTitle: '2020年春季在汉直属高校研究生双选会',
          preachSchool: '华中科技大学',
          preachTime: '2020-03-07 08:30:00',
          preachAddress: ' 华中师范大学佑铭体育场',
          preachCity: '湖北'
        },
        {
          preachTitle: '2020年春季在汉直属高校研究生双选会',
          preachSchool: '华中科技大学',
          preachTime: '2020-03-07 08:30:00',
          preachAddress: ' 华中师范大学佑铭体育场',
          preachCity: '湖北'
        },
        {
          preachTitle: '2020年春季在汉直属高校研究生双选会',
          preachSchool: '华中科技大学',
          preachTime: '2020-03-07 08:30:00',
          preachAddress: ' 华中师范大学佑铭体育场',
          preachCity: '湖北'
        },
        {
          preachTitle: '2020年春季在汉直属高校研究生双选会',
          preachSchool: '华中科技大学',
          preachTime: '2020-03-07 08:30:00',
          preachAddress: ' 华中师范大学佑铭体育场',
          preachCity: '湖北'
        },
        {
          preachTitle: '2020年春季在汉直属高校研究生双选会',
          preachSchool: '华中科技大学',
          preachTime: '2020-03-07 08:30:00',
          preachAddress: ' 华中师范大学佑铭体育场',
          preachCity: '湖北'
        },
        {
          preachTitle: '2020年春季在汉直属高校研究生双选会',
          preachSchool: '华中科技大学',
          preachTime: '2020-03-07 08:30:00',
          preachAddress: ' 华中师范大学佑铭体育场',
          preachCity: '湖北'
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
    addMsg () {
      console.log('增加信息')
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 61px;
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('http://static.nowcoder.com/images/res/careerTalk/banner.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
      .search-title-top {
        font-size: 42px;
        color: #fff;
        font-weight: 400;
        margin: 35px 0 5px;
      }
      .search-title-bottom {
        font-size: 20px;
        color: #fff;
      }
    .input-content {
      width: 420px;
      height: 34px;
      margin: 40px 0 105px;
    }
  }
  .main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0 20px;
    .content {
      border: 1px solid #e0e0e0;
      width: 1000px;
      background: #fff;
      padding: 15px;
      display: flex;
      // justify-content: center;
      // align-items: center;
      flex-direction: column;
      .title {
        font-size: 16px;
        line-height: 16px;
        float: left;
        .preach {
          font-weight: 700;
        }
        .point {
          background: #ff6547;
          content: "";
          display: inline-block;
          width: 7px;
          height: 7px;
          margin-right: 5px;
          margin-bottom: 2px;
          vertical-align: middle;
        }
        .totle {
          color: #888;
          font-size: 14px;
          padding-left: 10px;
        }
        .btn {
          position: relative;
          right: -730px;
        }
      }
      .select {
        margin: 15px 0;
        .select-school {
          padding: 0 5px;
        }
      }
      .preach-content {
        width: 960px;
        border: 1px solid #d4d4d4;
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        padding: 15px;
        cursor: pointer;
        .title {
          margin-bottom: 10px;
          font-size: 16px;
        }
        .preach-info {
          display: flex;
          align-items: center;
          font-size: 14px;
          .school {
            margin: 0 30px;
          }
          .city i {
            color: #909090;
            font-weight: bold;
          }
          .school i {
            color: #909090;
            font-weight: bold;
          }
          .time i {
            color: #909090;
            font-weight: bold;
          }
        }
      }
      .preach-content:hover {
        background: #eeeeee;
      }
      .pagination {
        text-align: center;
      }
    }
  }
}
</style>
