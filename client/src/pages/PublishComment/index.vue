<template>
  <div class="main">
    <div class="main-content">
      <div class="import">
        <el-input
          class="inp"
          placeholder="文章标题：一句话说明你遇到的问题或想分享的经验"
          v-model="comment.title"
          clearable>
        </el-input>
        <el-button @click="publish" type="info" class="btn">取消</el-button>
        <el-button @click="publish" type="primary" class="btn">发表</el-button>
      </div>
      <div class="editor-content">
        <vue-editor class="editor-b" v-model="comment.main" useCustomImageHandler @imageAdded="handleImageAdded"></vue-editor>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
  name: 'NewPage',
  components: {
    VueEditor
  },
  data () {
    return {
      comment: {},
      inputVal: ''
    }
  },
  mounted () {
  },
  methods: {
    async handleImageAdded (file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData()
      formData.append('file', file)
      const res = await this.$http.post('upload', formData)
      Editor.insertEmbed(cursorLocation, 'image', res.data.url)
      resetUploader()
    },
    publish () {
      console.log(66666, this.comment)
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
      .editor-b {
      }
    }
  }
}
</style>
