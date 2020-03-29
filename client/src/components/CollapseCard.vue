<template>
  <div class="collapse-card">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item name="1">
        <template slot="title">
          <span class="collapse-title">公司</span>
          <i class="header-icon el-icon-office-building"></i>
        </template>
        <div class="company">
          <div v-for="(item, index) in collapseCardData" :key="index">
            <img v-if="item.companyImageUrl" :src="item.companyImageUrl" class="companyImage" @click="selectedCompanyVal(item.companyName)">
            <div v-else class="no-img" @click="selectedCompanyVal(item.companyName)">
              <span>{{item.companyName}}</span>
            </div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <span class="collapse-title">职位</span>
          <i class="header-icon el-icon-s-custom"></i>
        </template>
        <!-- <el-tag
          class="post-tag"
          style="font-size: 12px"
          v-for="(item, index) in tagPostVal"
          :key="index"
          type="info"
          @click="selectedVal(item, key='post')">
          {{item}}
        </el-tag> -->
        <div class="flex-content">
          <div
            v-for="(item, postIndex) in tagPostVal"
            :key="postIndex"
            class="post-flex"
            @click="selectedPostVal(item, postIndex)">
            <span class="post-title" :class="activePostIndex === postIndex ? 'active' : 'nomal'">{{item}}</span>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <span class="collapse-title">年份</span>
          <i class="header-icon el-icon-time"></i>
        </template>
        <!-- <el-tag
          class="time-tag"
          style="font-size: 14px"
          v-for="(item, index) in tagTimeVal"
          :key="index"
          type="info"
          @click="selectedVal(item, key='years')">
          {{item}}
        </el-tag> -->
        <div class="flex-content">
          <div v-for="(item, yearIndex) in tagTimeVal" :key="yearIndex" class="post-flex" @click="selectedYearVal(item, yearIndex)">
            <span class="post-title" :class="activeYearIndex === yearIndex ? 'active' : 'nomal'">{{item}}</span>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  props: ['collapseCardData'],
  data () {
    return {
      activePostIndex: '',
      activeYearIndex: '',
      hasSelectedPost: false,
      hasSelectedYear: false,
      activeNames: ['1'],
      selectedCompany: '',
      selectedJob: '',
      selectedTime: '',
      selected: {
        companyName: '',
        post: '',
        years: ''
      },
      selectedValList: {}
    }
  },
  computed: {
    tagTimeVal () {
      return this.handleTimeTagVal(this.collapseCardData)
    },
    tagPostVal () {
      return this.handlePostTagVal(this.collapseCardData)
    }
  },
  watch: {},
  mounted () {},
  methods: {
    handleChange (val) {
      console.log(1, val)
    },
    selectedCompanyVal (val) {
      this.selectedValList.companyName = val
      this.$emit('selectedValList', this.selectedValList)
    },
    selectedPostVal (val, postIndex) {
      if (!this.hasSelectedPost) {
        this.activePostIndex = postIndex
        this.selectedValList.post = val
        this.$emit('selectedValList', this.selectedValList)
        this.hasSelectedPost = true
      } else {
        this.activePostIndex = ''
        this.selectedValList.post = ''
        this.$emit('selectedValList', this.selectedValList)
        this.hasSelectedPost = false
      }
    },
    selectedYearVal (val, yearIndex) {
      if (!this.hasSelectedYear) {
        this.activeYearIndex = yearIndex
        this.selectedValList.years = val
        this.$emit('selectedValList', this.selectedValList)
        this.hasSelectedYear = true
      } else {
        this.activeYearIndex = ''
        this.selectedValList.years = ''
        this.$emit('selectedValList', this.selectedValList)
        this.hasSelectedYear = false
      }
    },
    handleTimeTagVal (data) {
      let repeatTime = data.map(item => {
        return item.years
      })
      return [...new Set(repeatTime)]
    },
    handlePostTagVal (data) {
      let repeatPost = data.map(item => {
        return item.post
      })
      return [...new Set(repeatPost)]
    }
  }
}
</script>

<style scoped>
.el-collapse {
  border: none;
}
.el-tag {
  margin: 0 20px 10px 0;
  font-size: 16px;
  cursor: pointer;
}
.collapse-title {
  font-size: 18px;
  padding-right: 5px;
  font-weight: bold;
  color: cornflowerblue;
}
.header-icon {
  font-size: 18px;
  color: #003ecc;
  font-weight: bold;
}
.company {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.companyImage {
  width: 90px;
  height: 30px;
  margin: 0 20px 10px 0;
  cursor: pointer;
}

.user-selected {
  font-size: 15px;
  margin-left: 10px;
  color: #909090;
}

.post-tag:hover {
  /* transform: scale(1.1); */
  background: #eee;
}

.time-tag:hover {
  transform: scale(1.1);
  color: #F56C6A;
  /* background: #eee; */
}

.no-img {
  width: 60px;
  height: 30px;
  margin-bottom: 14px;
  text-align: center;
  padding-top: 5px;
}

.no-img:hover {
  background: #eee;
}

.flex-content {
  display: flex;
  flex-wrap: wrap;
}

.post-flex {
  font-size: 15px;
  margin: 10px 5px;
}

.post-title {
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;
}

.active {
  /* border-radius: 5px; */
  color: #25bb9b;
  background: #eee;
}

.nomal {
  color: #000;
}

.post-title:hover {
  background: #eee;
  color: #25bb9b;
}

</style>
