<template>
  <div class="main">
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
      cacheUrl: ''
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
    async publish () {
      const data = {
        title: this.comment.title || '',
        content: this.comment.main || '',
        hot: Math.random() * 200,
        mark: '求职',
        classify: {
          label: 2,
          name: '笔经面经'
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
</style>
