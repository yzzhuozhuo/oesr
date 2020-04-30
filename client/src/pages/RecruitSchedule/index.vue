<template>
  <div class="schedule">
    <top-banner :isCompany="accountType === 'company' ? true : false" @getInputVal="getInputVal"/>
    <!-- <middle-banner :bannerImg="bannerImg" /> -->
    <div class="content">
      <div class="content-btn">
        <div
          v-if="account.accountType === 'company' && !campusDateList.length"
          class="btn hover"
          @click.stop="publish"
        >发布日程</div>
        <div
          v-if="account.accountType === 'company' && campusDateList.length"
          class="btn hover"
          @click.stop="rePublish"
        >修改日程</div>
        <div
          v-if="account.accountType === 'student'"
          class="btn"
          :class="isFollow ? 'active' : 'nomal'"
          @click.stop="handleFollow"
        >我关注的</div>
      </div>
      <div class="setting-content">
        <el-dialog
          title="发布校招日程"
          :visible.sync="dialogPublish"
          width="40%"
        >
          <div class="form-content">
            <el-form
              :model="schemaForm"
              status-icon
              ref="schemaForm"
              label-width="80px"
              class="demo-ruleForm"
            >
              <el-form-item label="上传图片">
                <el-upload
                  class="avatar-uploader"
                  :action="domain"
                  :show-file-list="false"
                  :http-request="handleUpload"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img
                    v-if="schemaForm.coverImg"
                    :src="schemaForm.coverImg"
                    class="avatar"
                  >
                  <i
                    v-else
                    class="el-icon-plus avatar-uploader-icon"
                  ></i>
                </el-upload>
              </el-form-item>
              <el-form-item
                label="职位类型"
                prop="companyType"
                :rules="[
                  { required: true, message: '请选择职位类型'},
                ]"
              >
                <el-select
                  v-model="schemaForm.companyType"
                  placeholder="请选择职位类型"
                >
                  <el-option
                    label="全部"
                    :value="0"
                  ></el-option>
                  <el-option
                    label="国企/研究所"
                    :value="1"
                  ></el-option>
                  <el-option
                    label="外企"
                    :value="2"
                  ></el-option>
                  <el-option
                    label="银行/证券"
                    :value="3"
                  ></el-option>
                  <el-option
                    label="人工智能"
                    :value="4"
                  ></el-option>
                  <el-option
                    label="游戏"
                    :value="5"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item
                label="内推时间"
                prop="timeTable.neitui"
              >
                <el-input
                  v-model="schemaForm.timeTable.neitui"
                  placeholder="请输入内推时间"
                ></el-input>
              </el-form-item>
              <el-form-item
                label="网申时间"
                prop="timeTable.wangshen"
              >
                <el-input
                  v-model="schemaForm.timeTable.wangshen"
                  placeholder="请输入网申时间"
                ></el-input>
              </el-form-item>
              <el-form-item
                label="笔试时间"
                prop="timeTable.bishi"
              >
                <el-input
                  v-model="schemaForm.timeTable.bishi"
                  placeholder="请输入笔试时间"
                ></el-input>
              </el-form-item>
              <el-form-item
                label="面试时间"
                prop="timeTable.mianshi"
              >
                <el-input
                  v-model="schemaForm.timeTable.mianshi"
                  placeholder="请输入面试时间"
                ></el-input>
              </el-form-item>
              <el-form-item
                label="offer时间"
                prop="timeTable.offer"
              >
                <el-input
                  v-model="schemaForm.timeTable.offer"
                  placeholder="请输入offer发放时间"
                ></el-input>
              </el-form-item>
            </el-form>
            <div class="form-btn">
              <el-button
                type="primary"
                @click="submitForm"
              >提交</el-button>
              <el-button @click="resetForm">重置</el-button>
            </div>
          </div>
        </el-dialog>
      </div>
      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
        v-if="accountType === 'student' || !hasLogin"
      >
        <el-tab-pane
          label="全部"
          name="first"
          class="pane"
        >
          <schedule-card
            v-for="(item, index) in campusDateList"
            :key="index + Math.random()"
            :campusDate="item"
            :followCampus="followCampus"
            @followItem="followItem"
            @unfollowItem="unfollowItem"
          />
          <div class="no-data" v-if="!campusDateList.length">
            <img src="@/assets/no-data.png" class="no-data-img">
            <div class="no-data-title">暂无数据哦~</div>
          </div>
        </el-tab-pane>
        <el-tab-pane
          label="国企/研究所"
          name="second"
          class="pane"
        >
          <schedule-card
            v-for="(item, index) in campusDateListFilter(1)"
            :key="index + Math.random()"
            :campusDate="item"
            :followCampus="followCampus"
            @followItem="followItem"
            @unfollowItem="unfollowItem"
          />
          <div class="no-data" v-if="!campusDateListFilter(1).length">
            <img src="@/assets/no-data.png" class="no-data-img">
            <div class="no-data-title">暂无数据哦~</div>
          </div>
        </el-tab-pane>
        <el-tab-pane
          label="外企"
          name="third"
          class="pane"
        >
          <schedule-card
            v-for="(item, index) in campusDateListFilter(2)"
            :key="index + Math.random()"
            :campusDate="item"
            :followCampus="followCampus"
            @followItem="followItem"
            @unfollowItem="unfollowItem"
          />
          <div class="no-data" v-if="!campusDateListFilter(2).length">
            <img src="@/assets/no-data.png" class="no-data-img">
            <div class="no-data-title">暂无数据哦~</div>
          </div>
        </el-tab-pane>
        <el-tab-pane
          label="银行/证券"
          name="fourth"
          class="pane"
        >
          <schedule-card
            v-for="(item, index) in campusDateListFilter(3)"
            :key="index + Math.random()"
            :campusDate="item"
            :followCampus="followCampus"
            @followItem="followItem"
            @unfollowItem="unfollowItem"
          />
          <div class="no-data" v-if="!campusDateListFilter(3).length">
            <img src="@/assets/no-data.png" class="no-data-img">
            <div class="no-data-title">暂无数据哦~</div>
          </div>
        </el-tab-pane>
        <el-tab-pane
          label="人工智能"
          name="fifth"
          class="pane"
        >
          <schedule-card
            v-for="(item, index) in campusDateListFilter(4)"
            :key="index + Math.random()"
            :campusDate="item"
            :followCampus="followCampus"
            @followItem="followItem"
            @unfollowItem="unfollowItem"
          />
          <div class="no-data" v-if="!campusDateListFilter(4).length">
            <img src="@/assets/no-data.png" class="no-data-img">
            <div class="no-data-title">暂无数据哦~</div>
          </div>
        </el-tab-pane>
        <el-tab-pane
          label="游戏"
          name="sixth"
          class="pane"
        >
          <schedule-card
            v-for="(item, index) in campusDateListFilter(5)"
            :key="index + Math.random()"
            :campusDate="item"
            :followCampus="followCampus"
            @followItem="followItem"
            @unfollowItem="unfollowItem"
          />
          <div class="no-data" v-if="!campusDateListFilter(5).length">
            <img src="@/assets/no-data.png" class="no-data-img">
            <div class="no-data-title">暂无数据哦~</div>
          </div>
        </el-tab-pane>
      </el-tabs>
      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
        v-if="accountType === 'company'"
      >
        <el-tab-pane
          label="我的发布"
          name="first"
          class="pane"
        >
          <schedule-card
            v-for="(item, index) in campusDateList"
            :key="index + Math.random()"
            :campusDate="item"
            :followCampus="followCampus"
            @followItem="followItem"
            @unfollowItem="unfollowItem"
          />
          <div class="no-data" v-if="!campusDateList.length">
            <img src="@/assets/no-data.png" class="no-data-img">
            <div class="no-data-title">暂无数据哦~</div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import TopBanner from './TopBanner'
// import MiddleBanner from './MiddleBanner'
import ScheduleCard from './ScheduleCard'
import { mapState, mapActions, mapGetters } from 'vuex'
import _ from 'lodash'

export default {
  name: 'RecruitSchedule',
  components: {
    TopBanner,
    // MiddleBanner,
    ScheduleCard
  },
  data () {
    return {
      searchVal: '',
      domain: 'https://upload.qiniup.com',
      qiniuaddr: 'cdn.zouhaohao.xyz',
      activeName: 'first',
      isFollow: false,
      bannerImg:
        'https://static.nowcoder.com/images-nk/img/campusRecruitment/tip-bg.png',
      dialogPublish: false,
      fileList: [
        {
          name: 'food.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ],
      cacheUrl: '',
      schemaForm: {
        coverImg: '',
        companyType: 0,
        timeTable: {
          neitui: '',
          wangshen: '',
          bishi: '',
          mianshi: '',
          offer: ''
        }
      }
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.student.studentList,
      company: state => state.company.companyList,
      account: state => state.account,
      campusDateList: state => state.campusDate.campusDateList
    }),
    ...mapGetters(['followCampus', 'accountType', 'hasLogin'])
  },
  watch: {
    searchVal () {
      this.fetchCampusLastData()
    }
  },
  mounted () {
    setTimeout(() => {
      this.fetchCampusLastData()
    }, 1000)
  },
  methods: {
    ...mapActions([
      'uploadImg',
      'addCampusDate',
      'getCampusDate',
      'followCampusItem',
      'unFollowCampusItem',
      'filterCampusList'
    ]),
    fetchCampusLastData () {
      let params = {
        // companyId: '123',
        companyId: this.accountType === 'company' ? this.company.companyId : '',
        searchVal: this.searchVal
      }
      this.getCampusDate(params)
    },
    campusDateListFilter (index) {
      return this.campusDateList.filter(item => item.companyType === index)
    },
    handleClick (tab, event) {
      console.log(this.userInfo)
    },
    publish () {
      if (!this.account.token) {
        this.$message.error('请先登录！')
        return this.$router.replace({
          path: '/login'
        })
      }
      this.dialogPublish = true
    },
    rePublish () {
      console.log(9999, this.company)
      console.log(33, this.campusDateList[0])
      this.schemaForm = _.cloneDeep(this.campusDateList[0])
      console.log(44, this.schemaForm)
      if (!this.account.token) {
        this.$message.error('请先登录！')
        return this.$router.replace({
          path: '/login'
        })
      }
      this.dialogPublish = true
    },
    resetForm () {
      this.$refs['schemaForm'].resetFields()
    },
    submitForm () {
      const data = {
        companyId: this.company.companyId,
        companyName: this.company.companyName,
        campusUrl: this.company.companyCampusUrl,
        companyImgUrl: this.company.companyImgUrl,
        companyType: this.schemaForm.companyType,
        coverImg: this.schemaForm.coverImg,
        timeTable: {
          neitui: this.schemaForm.timeTable.neitui,
          wangshen: this.schemaForm.timeTable.wangshen,
          bishi: this.schemaForm.timeTable.bishi,
          mianshi: this.schemaForm.timeTable.mianshi,
          offer: this.schemaForm.timeTable.offer
        }
      }
      console.info(323232, data)
      this.$refs['schemaForm'].validate(async valid => {
        if (valid) {
          if (!this.schemaForm.coverImg) return this.$message.error('请上传图片')
          await this.addCampusDate(data).then(data => {
            if (data.update) {
              this.$message({
                message: '更新成功',
                type: 'success'
              })
            } else {
              this.$message({
                message: '发布成功',
                type: 'success'
              })
            }
          })
          await this.resetForm()
          this.dialogPublish = false
        } else {
          return false
        }
      })
    },
    handleAvatarSuccess (res, file) {
      this.schemaForm.coverImg = this.cacheUrl
    },
    beforeAvatarUpload (file) {
      const isPNG = file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isPNG) {
        this.$message.error('上传头像图片只能是 PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isPNG && isLt2M
    },
    async handleUpload (req) {
      const result = await this.uploadImg({
        file: req.file,
        domain: this.domain,
        qiniuaddr: this.qiniuaddr
      })
      this.cacheUrl = result
    },
    handleFollow () {
      this.isFollow = !this.isFollow
      const data = {
        followCampus: this.followCampus,
        isFollow: this.isFollow
      }
      if (this.isFollow) {
        this.filterCampusList(data)
      } else {
        this.getCampusDate()
      }
    },
    followItem (id) {
      this.followCampusItem({
        campusDateId: id,
        userInfo: this.userInfo
      })
    },
    unfollowItem (id) {
      this.unFollowCampusItem({
        campusDateId: id,
        userInfo: this.userInfo
      })
    },
    getInputVal (searchVal) {
      this.searchVal = searchVal
    }
  }
}
</script>

<style lang="scss" scoped>
.schedule {
  min-width: 1200px;
  margin: 60px auto 0;

  .content {
    width: 1170px;
    padding: 25px 20px;
    margin: 20px auto;
    border: 1px solid #d6d6d6;
    border-radius: 4px;
    background: #fff;
    margin-bottom: 20px;
    position: relative;

    .content-btn {
      position: absolute;
      z-index: 100;
      right: 30px;
      color: #fff;
      cursor: pointer;

      .btn {
        padding: 5px 8px;
        background-color: #25bb9b;
        border-radius: 5px;
      }

      .hover:hover {
        background-color: #0fa786;
      }

      .nomal {
        background-color: #fff;
        color: #333;
      }

      .active {
        background-color: #25bb9b;
        color: #fff;
      }
    }
  }

  .setting-content {
    .form-content {
      // margin-left: -22px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .form-btn {
        display: flex;
        justify-content: center;
      }
      .el-form {
        .el-form-item {
          margin-bottom: 25px;
        }
      }
    }
    .pic {
      position: absolute;
      top: 120px;
      left: 28px;
    }
    >>> .el-input__inner {
      width: 300px;
    }
    .avatar-uploader {
      width: 200px;
      height: 100px;
      border: 1px solid #d9d9d9;
    }
    .avatar-uploader .el-upload {
      border-radius: 6px;
      cursor: pointer;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409eff;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 200px;
      height: 100px;
      line-height: 100px;
      text-align: center;
    }
    .avatar {
      width: 100%;
      height: 110px;
      display: block;
    }
  }

  .pane {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    width: 1165px;
    margin: 0 auto;
  }
}

.no-data {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 130px 0;
  .no-data-img {
    width: 150px;
    margin-bottom: 15px;
  }
  .no-data-title {
    color: #999;
  }
}
</style>
