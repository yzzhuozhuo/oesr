<template>
  <div class="main">
    <div class="setting-content">
      <el-dialog
        title="发布帖子"
        :visible.sync="dialogCommentMark"
        width="420px"
      >
        <div class="form-content">
          <el-form
            :model="publishForm"
            status-icon
            ref="publishForm"
            label-width="80px"
            class="demo-ruleForm"
          >
            <el-form-item
              label="发布类别"
              prop="classify"
              :rules="[
                { required: true, message: '请选择类别'},
              ]"
            >
              <el-select
                v-model="publishForm.classify"
                placeholder="请选择发布类别"
              >
                <el-option
                  v-for="item in classifyList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              label="标签"
              prop="mark"
              :rules="[
                { required: true, message: '请选择标签'},
              ]"
            >
              <el-select
                v-model="publishForm.mark"
                multiple
                placeholder="请选择标签"
              >
                <el-option
                  v-for="item in markList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
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
    <div class="main-content">
      <div class="import">
        <el-input
          class="inp"
          placeholder="文章标题：一句话说明你遇到的问题或想分享的经验"
          v-model="comment.title"
          clearable
        >
        </el-input>
        <el-button
          @click="publish"
          type="info"
          class="btn"
        >取消</el-button>
        <el-button
          @click="publish"
          type="primary"
          class="btn"
        >发表</el-button>
      </div>
      <div class="editor-content">
        <vue-editor
          class="editor-b"
          v-model="comment.main"
          useCustomImageHandler
          @image-added="handleImageAdded"
        ></vue-editor>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'NewPage',
  components: {
    VueEditor
  },
  data () {
    return {
      comment: {},
      inputVal: '',
      domain: 'https://upload.qiniup.com',
      qiniuaddr: 'q7heq11s7.bkt.clouddn.com',
      cacheUrl: '',
      dialogCommentMark: false,
      publishForm: {
        mark: [],
        classify: ''
      },
      markList: [
        {
          label: '春招',
          value: '春招'
        },
        {
          label: '秋招',
          value: '秋招'
        },
        {
          label: '校招',
          value: '校招'
        },
        {
          label: '实习',
          value: '实习'
        },
        {
          label: '面试',
          value: '笔试'
        },
        {
          label: '内推',
          value: '内推'
        },
        {
          label: '心得',
          value: '心得'
        },
        {
          label: '分享',
          value: '分享'
        }
      ],
      classifyList: [
        { value: 1, label: '站内公告' },
        { value: 2, label: '笔经面经' },
        { value: 3, label: '我要提问' },
        { value: 4, label: '技术交流' },
        { value: 5, label: '产品运营' },
        { value: 6, label: '留学生' },
        { value: 7, label: '职业发展' },
        { value: 8, label: '招聘信息' },
        { value: 9, label: '资源分享' },
        { value: 10, label: '猿生活' },
        { value: 11, label: '工作以后' }
      ]
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.student.studentList
    })
  },
  methods: {
    ...mapActions(['uploadImg', 'addDiscuss']),
    async handleImageAdded (file, Editor, cursorLocation, resetUploader) {
      const result = await this.uploadImg({
        file: file,
        domain: this.domain,
        qiniuaddr: this.qiniuaddr
      })
      this.cacheUrl = result
      Editor.insertEmbed(cursorLocation, 'image', result)
      resetUploader()
    },
    publish () {
      if (!this.comment.title || !this.comment.main) {
        return this.$message.error('请完善标题和正文')
      }
      this.dialogCommentMark = true
    },
    submitForm () {
      this.$refs['publishForm'].validate(async valid => {
        if (valid) {
          const { mark, classify } = this.publishForm
          const classifyObj = this.classifyList.filter(
            item => item.value === classify
          )
          const data = {
            title: this.comment.title || '',
            content: this.comment.main || '',
            hot: Math.random() * 200,
            mark,
            classify: {
              label: classifyObj[0].value,
              name: classifyObj[0].label
            },
            user: {
              id: this.userInfo.studentId,
              name: this.userInfo.studentName,
              avatar: this.userInfo.studentImgUrl
            }
          }
          const res = await this.addDiscuss(data)
          if (res) {
            await this.$message({ message: '发表成功', type: 'success' })
            await this.$router.replace({ path: 'discussPage' })
          }
        } else {
          return false
        }
      })
    },
    resetForm () {
      this.$refs['publishForm'].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 61px;
  display: flex;
  justify-content: center;
  .main-content {
    width: 1000px;
    margin-bottom: 20px;
    .import {
      display: flex;
      margin: 15px 0;
      .inp {
        background: #ffffff;
        margin-right: 35px;
      }
    }
    .editor-content {
      background: #fff;
    }
  }
}

.setting-content {
  .form-content {
    text-align: center;
    margin-left: -20px;
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
  >>> .el-input__inner {
    width: 300px;
  }
  .avatar-uploader {
    width: 100px;
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
</style>
