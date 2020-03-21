<template>
  <div class="schedule">
    <top-banner />
    <middle-banner :bannerImg="bannerImg" />
    <div class="content">
      <div class="content-btn">
        <div
          v-if="account.accountType === 'company'"
          class="btn"
          @click.stop="publish"
        >发布职位</div>
        <!-- <div
          v-if="account.accountType === 'student'"
          class="btn"
        >我关注的</div> -->
      </div>
      <div class="setting-content">
        <el-dialog
          title="发布职位"
          :visible.sync="dialogPublish"
          width="30%"
        >
          <div class="pic">上传图片</div>
          <el-upload
            class="avatar-uploader"
            :action="domain"
            :show-file-list="false"
            :http-request="handleUpload"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img
              v-if="schemaForm.coverUrl"
              :src="schemaForm.coverUrl"
              class="avatar"
            >
            <i
              v-else
              class="el-icon-plus avatar-uploader-icon"
            ></i>
          </el-upload>
          <div class="form-content">
            <el-form
              :model="schemaForm"
              status-icon
              ref="schemaForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item
                label="类型"
                prop="type"
                :rules="[
                  { required: true, message: '请选择职位类型'},
                ]"
              >
                <el-select
                  v-model="schemaForm.type"
                  placeholder="请选择职位类型"
                >
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
                    label="游戏"
                    :value="4"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="内推">
                <el-input
                  v-model="schemaForm.neitui"
                  placeholder="请输入内推时间"
                ></el-input>
              </el-form-item>
              <el-form-item label="网申">
                <el-input
                  v-model="schemaForm.wangshen"
                  placeholder="请输入网申时间"
                ></el-input>
              </el-form-item>
              <el-form-item label="笔试">
                <el-input
                  v-model="schemaForm.bishi"
                  placeholder="请输入笔试时间"
                ></el-input>
              </el-form-item>
              <el-form-item label="面试">
                <el-input
                  v-model="schemaForm.mianshi"
                  placeholder="请输入面试时间"
                ></el-input>
              </el-form-item>
              <el-form-item label="offer">
                <el-input
                  v-model="schemaForm.offer"
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
      >
        <el-tab-pane
          label="全部"
          name="first"
          class="pane"
        >
          <schedule-card
            v-for="(item, index) in campusDateList"
            :key="index"
            :campusDate="item"
          />
        </el-tab-pane>
        <el-tab-pane
          label="国企/研究所"
          name="second"
          class="pane"
        >
          <schedule-card
            v-for="(item, index) in 1"
            :key="index"
          />
        </el-tab-pane>
        <el-tab-pane
          label="外企"
          name="third"
          class="pane"
        >
          <schedule-card
            v-for="(item, index) in 0"
            :key="index"
          />
        </el-tab-pane>
        <el-tab-pane
          label="银行/证券"
          name="fourth"
          class="pane"
        >
          <schedule-card
            v-for="(item, index) in 0"
            :key="index"
          />
        </el-tab-pane>
        <el-tab-pane
          label="游戏"
          name="fivth"
          class="pane"
        >
          <schedule-card
            v-for="(item, index) in 9"
            :key="index"
          />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import TopBanner from './TopBanner'
import MiddleBanner from './MiddleBanner'
import ScheduleCard from './ScheduleCard'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'RecruitSchedule',
  components: {
    TopBanner,
    MiddleBanner,
    ScheduleCard
  },
  data () {
    return {
      domain: 'https://upload.qiniup.com',
      qiniuaddr: 'q7heq11s7.bkt.clouddn.com',
      activeName: 'first',
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
        coverUrl: '',
        neitui: '',
        wangshen: '',
        bishi: '',
        mianshi: '',
        offer: '',
        type: 1
      }
    }
  },
  computed: {
    ...mapState({
      company: state => state.company.companyList,
      account: state => state.account,
      campusDateList: state => state.campusDate.campusDateList
    })
  },
  mounted () {
    this.getCampusDate()
  },
  methods: {
    ...mapActions(['uploadImg', 'addCampusDate', 'getCampusDate']),
    handleClick (tab, event) {
      console.log(tab, event)
    },
    publish () {
      if (!this.account.token) {
        this.$message.error('请先登录！')
        return this.$router.replace({
          path: '/login'
        })
      }
      this.$router.push({
        path
      })
      this.dialogPublish = true
    },
    resetForm () {
      this.$refs['schemaForm'].resetFields()
    },
    submitForm () {
      const data = {
        companyId: this.company.companyId,
        companyName: this.company.companyName,
        companyImgUrl: this.company.companyImgUrl,
        companyType: this.schemaForm.type,
        coverImg: this.schemaForm.coverUrl,
        timeTable: {
          neitui: this.schemaForm.neitui,
          wangshen: this.schemaForm.wangshen,
          bishi: this.schemaForm.bishi,
          mianshi: this.schemaForm.mianshi,
          offer: this.schemaForm.offer
        }
      }
      console.info(data)
      this.$refs['schemaForm'].validate(async valid => {
        if (valid) {
          await this.addCampusDate(data)
          await this.$message({
            message: '发布成功',
            type: 'success'
          })
          await this.resetForm()
          this.dialogPublish = false
        } else {
          return false
        }
      })
    },
    handleAvatarSuccess (res, file) {
      this.schemaForm.coverUrl = this.cacheUrl
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
    margin: 0px auto;
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

      .btn {
        padding: 5px 8px;
        background-color: #25bb9b;
        border-radius: 5px;

        &:hover {
          cursor: pointer;
          background-color: #0fa786;
        }
      }
    }
  }

  .setting-content {
    .form-content {
      margin-left: -22px;
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
      width: 320px;
    }
    .avatar-uploader {
      width: 100px;
      height: 100px;
      margin: 0 0 20px 78px;
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
      width: 100px;
      height: 100px;
      line-height: 100px;
      text-align: center;
    }
    .avatar {
      width: 100px;
      height: 100px;
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
</style>
