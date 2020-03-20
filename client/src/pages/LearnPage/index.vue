<template>
  <div class="main">
    <swiper :swiperImgs="swiperImgs" />
    <div class="contet">
      <div class="host-content">
        <div class="host-content-title">
          <img src="http://static.nowcoder.com/images-nk/img/icons/ico-fire.png">
          <div>火热报名中</div>
        </div>
        <div class="img-content hot">
          <div v-for="(item, index) in hotImgs" :key="index">
            <img :src="item" class="img-container">
          </div>
        </div>
      </div>
      <div class="strategy-content">
        <div class="host-content-title">
          <i class="el-icon-s-opportunity"></i>
          <div>校招求职攻略</div>
        </div>
        <div class="explain-content">
          <el-divider content-position="center" class="explain">校 招 经 验 分 享</el-divider>
        </div>
        <div class="share-content">
          <div v-for="(item, index) in shareImgs" :key="index" class="img-share-box">
            <img :src="item" class="img-share">
          </div>
        </div>
        <div class="explain-content">
          <el-divider content-position="center" class="explain">求 职 攻 略 专 栏</el-divider>
        </div>
        <div class="special-content">
          <div class="special-content-item" v-for="(items, index) in strategyData" :key="index" @click="toNewPage(items.mainhref)">
            <div class="pic">
              <img :src="items.imgUrl">
            </div>
            <div class="content">
              <div class="title">{{items.title}}</div>
              <div class="introduce">{{items.introduce}}</div>
              <div v-for="(item, i) in items.contenthrefs" :key="i" class="link">
                <el-button size="mini" class="btn" type="text">试读</el-button>
                <a :href="item.href" class="link-href">{{item.title}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="base-content">
        <div class="base-content-title">
          <i class="el-icon-reading"></i>
          <div>基础学习</div>
        </div>
        <div class="box">
          <div class="base-content-item" v-for="(items, index) in baseLearnData" :key="index">
            <div class="hd">
              <img :src="items.headImgUrl" class="hd-img">
              <div class="hd-title">{{items.title}}</div>
            </div>
            <div class="item" v-for="(item, i) in items.courses" :key="i">
              <img :src="item.imgUrl" @click="toNewPage(item.href)">
            </div>
          </div>
        </div>
      </div>
      <div class="courses-content">
        <div class="courses-content-title">
          <i class="el-icon-collection"></i>
          <div>更多好课</div>
        </div>
        <div class="courses-content-box">
          <div v-for="(item, index) in coursesData" :key="index" class="courses-content-item">
            <div class="pic">
              <img :src="item.imgUrl" class="img-course" @click="toNewPage(item.href)">
              <div class="classify">{{item.classify}}</div>
              <div class="title">{{item.title}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper'

export default {
  name: 'LearnPage',
  components: {
    Swiper
  },
  data () {
    return {
      swiperImgs: [
        'https://uploadfiles.nowcoder.com/images/20191231/4107856_1577773849648_EBDA8C006A521B8F4B64E3C834ED1118',
        'https://uploadfiles.nowcoder.com/images/20190708/4107856_1562577889040_895F882A6AADA8C739DA78B2AB48B6B1'
      ],
      hotImgs: [
        'https://uploadfiles.nowcoder.com/files/20191212/59_1576134154605_3.png',
        'https://uploadfiles.nowcoder.com/files/20191212/59_1576134194565_2.png',
        'https://uploadfiles.nowcoder.com/files/20191212/59_1576134223891_1.png',
        'https://uploadfiles.nowcoder.com/files/20190515/59_1557901417732_机器.jpg',
        'https://uploadfiles.nowcoder.com/files/20190704/59_1562206905797_高级项目课.png',
        'https://uploadfiles.nowcoder.com/files/20200305/59_1583403105947_59_1576134097656_4.png'
      ],
      shareImgs: [
        'https://uploadfiles.nowcoder.com/images/20190802/59_1564751822240_A3E11644B0F36A72563D1971588638CA',
        'https://uploadfiles.nowcoder.com/images/20190802/59_1564751859605_842E238B1E65FCDB7DEBEC618981D188',
        'https://uploadfiles.nowcoder.com/images/20190802/59_1564751881039_8F344281B28AFA1A9C114350D6061063',
        'https://uploadfiles.nowcoder.com/images/20190802/59_1564751897163_2DCC6450D5B221A6031596FC2B3BB9C8',
        'https://uploadfiles.nowcoder.com/images/20190802/59_1564751917881_767EF39C8917BA287CC609B24341ADB8',
        'https://uploadfiles.nowcoder.com/images/20190802/59_1564751933287_A741812942864A153F5C82232F24E8F5',
        'https://uploadfiles.nowcoder.com/images/20190802/59_1564751952849_55C7FBFF49F35899192DA86DD4F7AE57',
        'https://uploadfiles.nowcoder.com/images/20190802/59_1564751965614_3F87637210B58521E91D6EE27F3986E9',
        'https://uploadfiles.nowcoder.com/images/20190802/59_1564751982835_2869449F66866826D4D9FD3D24427C9F',
        'https://uploadfiles.nowcoder.com/images/20190802/59_1564752001930_C3A1840F5D5715471D514B373440CFD1',
        'https://uploadfiles.nowcoder.com/images/20190802/59_1564752020829_532270391A0C6F8673FE58307D1EA829'
      ],
      strategyData: [
        {
          imgUrl: 'https://uploadfiles.nowcoder.com/images/20200205/9398821_1580893418078_1EE2FC55F7C21F76C57133EB45334ADC',
          title: '校招产品求职之道30讲',
          introduce: '海神唐三，8年互联网产品和团队管理经验，曾就职于阿里、美团点评和某港股上市公司',
          mainhref: 'https://blog.nowcoder.net/zhuanlan/qmGDjv',
          contenthrefs: [
            {
              title: '开篇词：如何拿到校招产品经理的门票',
              href: 'https://blog.nowcoder.net/n/37a3f55ad99d459e9b8e45b5114ed190'
            },
            {
              title: '开篇词：如何拿到校招产品经理的门票',
              href: 'https://blog.nowcoder.net/n/37a3f55ad99d459e9b8e45b5114ed190'
            },
            {
              title: '到底去大公司还是小公司',
              href: 'https://blog.nowcoder.net/n/1f15f2b7033f4736b85e421f769dac39'
            }
          ]
        },
        {
          imgUrl: 'https://uploadfiles.nowcoder.com/images/20200205/9398821_1580893436047_2D820AB7BCAE3652B170E61EAC0629A2',
          title: 'C++开发求职攻略',
          introduce: '敲键盘的阿圆君，百度研发工程师，主要负责深度学习框架相关开发。',
          mainhref: 'https://blog.nowcoder.net/zhuanlan/wjvzjl',
          contenthrefs: [
            {
              title: '开篇词:来一份热腾腾的offer吧！',
              href: 'https://blog.nowcoder.net/n/c9f36143d3804ed39998bdf75c9a15a0'
            },
            {
              title: '战略规划-如何规划自己的秋招',
              href: 'https://blog.nowcoder.net/n/0becef2d23bf4ba5b07c2537691ad337'
            },
            {
              title: '你真的很不错-良好的心态是成功的一半',
              href: 'https://blog.nowcoder.net/n/5b7752ba117948f88c18b2e276e4fc95'
            }
          ]
        },
        {
          imgUrl: 'https://uploadfiles.nowcoder.com/images/20200205/9398821_1580893447064_A86B10DC8D814C17618F45E360E386AD',
          title: 'Python金融数据分析与量化投资',
          introduce: 'thu-blogger，清华大学博士。毕业后一直在国内外知名的对冲基金从事量化投资相关的工作，熟悉Python在金融数据分析和量化投资的应用。',
          mainhref: 'https://blog.nowcoder.net/zhuanlan/qmGDjv',
          contenthrefs: [
            {
              title: '开篇词：为什么要学Python',
              href: 'https://www.boxuegu.com/news/2153.html'
            },
            {
              title: 'Python安装与调试工具',
              href: 'https://blog.nowcoder.net/n/a0f6879d52e64b348d8b6b6fffc48449'
            },
            {
              title: 'Python语法基础（上）',
              href: 'https://blog.nowcoder.net/n/c317fae61ee4448d80c706cc6031ab65'
            }
          ]
        },
        {
          imgUrl: 'https://uploadfiles.nowcoder.com/images/20200205/9398821_1580893456075_8DD7DAD92E3F233CEDF8FA53EFD59812',
          title: 'Java开发岗高频面试题全解析',
          introduce: '我是祖国的花朵，小米服务端工程师，负责安全风控、登录取号和二次号判断等与帐号安全相关服务的开发与维护。',
          mainhref: 'https://blog.nowcoder.net/zhuanlan/qmGDjv',
          contenthrefs: [
            {
              title: '开篇词：Java开发岗高频面试题全解析',
              href: 'https://blog.nowcoder.net/n/5cf8b979eae74889ae34849858cd1e0e'
            },
            {
              title: '简历的制作与投递',
              href: 'https://blog.nowcoder.net/n/224e049c6df54915b950584da4cf56af'
            },
            {
              title: '业务逻辑面试和HR面试',
              href: 'https://blog.nowcoder.net/n/5eaecec1a09a4c1484a2fc5f7777c52d'
            }
          ]
        },
        {
          imgUrl: 'https://uploadfiles.nowcoder.com/images/20200205/9398821_1580893467989_ABE3CDE479E81493DC461EE361E20ED5',
          title: '程序员代码面试指南',
          introduce: '左程云，华中科技大学（本科），芝加哥大学（硕士），曾就职于亚马逊，担任技术专家，IBM，GrowingIo，百度等，《程序员代码面试指南》作者，从2010年起专注刷题至今，拥有10年算法刷题经验。',
          mainhref: 'https://blog.nowcoder.net/zhuanlan/qmGDjv',
          contenthrefs: [
            {
              title: '开篇词：10年算法大牛分享：到底应该如何学习算法',
              href: 'https://blog.nowcoder.net/n/81cd739fec4745cd9303dea5091b064f'
            },
            {
              title: '试读栈和队列（一）',
              href: 'https://blog.nowcoder.net/n/bc68f0d525c642789d4fe57d480b80eb'
            },
            {
              title: '试读栈和队列（二）',
              href: 'https://blog.nowcoder.net/n/d6ca94b3da464c64b7fd4bad98c12cd4'
            }
          ]
        }
      ],
      baseLearnData: [
        {
          headImgUrl: 'https://static.nowcoder.com//images-nk/res/course/head/8.png',
          title: 'Java方向',
          courses: [
            {
              imgUrl: 'https://uploadfiles.nowcoder.com/images/20200205/9398821_1580898882521_062F798501999A3D1CACBFB6DD65BFBB',
              href: 'https://www.nowcoder.com/tutorial/10001'
            },
            {
              imgUrl: 'https://uploadfiles.nowcoder.com/images/20200205/9398821_1580898893082_673DA3ED35CDEE0675D132CB0C6D6D03',
              href: 'https://www.nowcoder.com/courses/cover/vod/1002'
            },
            {
              imgUrl: 'https://uploadfiles.nowcoder.com/images/20200205/9398821_1580898901282_307DD441F9B29B2AB0E791434C1C8342',
              href: 'https://www.nowcoder.com/library/book-list/305'
            }
          ]
        },
        {
          headImgUrl: 'https://static.nowcoder.com//images-nk/res/course/head/1.png',
          title: 'C语言方向',
          courses: [
            {
              imgUrl: 'https://uploadfiles.nowcoder.com/images/20200205/9398821_1580898850806_6D36AFD86371015069A76AF4F8B43898',
              href: 'https://www.nowcoder.com/tutorial/10002'
            }
          ]
        },
        {
          headImgUrl: 'https://static.nowcoder.com//images-nk/res/course/head/1.png',
          title: 'C++方向',
          courses: [
            {
              imgUrl: 'https://uploadfiles.nowcoder.com/images/20200205/9398821_1580894107456_E62A546C2F4F333D93B64572DC47D19B',
              href: 'https://www.nowcoder.com/tutorial/10003'
            },
            {
              imgUrl: 'https://uploadfiles.nowcoder.com/images/20200205/9398821_1580894114915_8D3CD272C6E969136E543931E019F957',
              href: 'https://www.nowcoder.com/courses/cover/vod/1001'
            },
            {
              imgUrl: 'https://uploadfiles.nowcoder.com/images/20200205/9398821_1580894126069_099605855D8DE45F4B01F961F3E87E74',
              href: 'https://www.nowcoder.com/library/book-list/1275'
            }
          ]
        },
        {
          headImgUrl: 'https://static.nowcoder.com//images-nk/res/course/head/3.png',
          title: 'Python方向',
          courses: [
            {
              imgUrl: 'https://uploadfiles.nowcoder.com/images/20200205/9398821_1580898350753_70008DEA131AA48C661D7BEFEAA4BA20',
              href: 'https://www.nowcoder.com/tutorial/10005'
            },
            {
              imgUrl: 'https://uploadfiles.nowcoder.com/images/20200205/9398821_1580898359670_E306015A974BC4DA1A60C4DA81FA8882',
              href: 'https://www.nowcoder.com/courses/cover/vod/1004'
            }
          ]
        },
        {
          headImgUrl: 'https://static.nowcoder.com//images-nk/res/course/head/2.png',
          title: '前端方向',
          courses: [
            {
              imgUrl: 'https://uploadfiles.nowcoder.com/images/20200205/9398821_1580898584119_93B4107F4CCAB345664E0F2E821DFE74',
              href: 'https://www.nowcoder.com/tutorial/10007'
            },
            {
              imgUrl: 'https://uploadfiles.nowcoder.com/images/20200205/9398821_1580898646588_04D64FE7F0A0B0BC374A2A234B48011B',
              href: 'https://www.nowcoder.com/tutorial/10009'
            },
            {
              imgUrl: 'https://uploadfiles.nowcoder.com/images/20200205/9398821_1580898613733_52706DA5A521C9543BE73119C24D0F88',
              href: 'https://www.nowcoder.com/tutorial/10008'
            }
          ]
        },
        {
          headImgUrl: 'https://static.nowcoder.com//images-nk/res/course/head/4.png',
          title: '数据库方向',
          courses: [
            {
              imgUrl: 'https://uploadfiles.nowcoder.com/images/20200205/9398821_1580899325951_C8D6BA72602763C2211EE05D5EF334F9',
              href: 'https://www.nowcoder.com/tutorial/10006'
            },
            {
              imgUrl: 'https://uploadfiles.nowcoder.com/images/20200205/9398821_1580898710663_BB019401FE78AF1BD38F81B00F883FFA',
              href: 'https://www.nowcoder.com/courses/cover/vod/1006'
            }
          ]
        },
        {
          headImgUrl: 'https://static.nowcoder.com//images-nk/res/course/head/7.png',
          title: 'PHP方向',
          courses: [
            {
              imgUrl: 'https://uploadfiles.nowcoder.com/images/20200205/9398821_1580898159786_44E8BCFDAB2E80904CAECF359A502472',
              href: 'https://www.nowcoder.com/library/book-list/3484'
            },
            {
              imgUrl: 'https://uploadfiles.nowcoder.com/images/20200205/9398821_1580898171016_EDE373EAC81E8AAE7AC978C8C4F45CC5',
              href: 'https://www.nowcoder.com/courses/cover/vod/1007'
            }
          ]
        },
        {
          headImgUrl: 'https://static.nowcoder.com//images-nk/res/course/head/5.png',
          title: 'C#方向',
          courses: [
            {
              imgUrl: 'https://uploadfiles.nowcoder.com/images/20200205/9398821_1580894025345_FDEF15595FFDC3A9F94A07EDB3B10ED7',
              href: 'https://www.nowcoder.com/library/book-list/3486'
            },
            {
              imgUrl: 'https://uploadfiles.nowcoder.com/images/20200205/9398821_1580894032938_9589C614240E428EE76374A6A9FCB0D0',
              href: 'https://www.nowcoder.com/courses/cover/vod/1005'
            }
          ]
        },
        {
          headImgUrl: 'https://static.nowcoder.com//images-nk/res/course/head/6.png',
          title: '产品经理',
          courses: [
            {
              imgUrl: 'https://uploadfiles.nowcoder.com/images/20200205/9398821_1580898108457_8660FF6CC7A89DBBAF88AB5ED92CA86F',
              href: 'https://www.nowcoder.com/library/book-list/159'
            },
            {
              imgUrl: 'https://uploadfiles.nowcoder.com/images/20200205/9398821_1580898119109_B49053CB35C4D344A0BF9619D9E8FF9C',
              href: 'https://www.nowcoder.com/courses/cover/vod/1008'
            }
          ]
        }
      ],
      coursesData: [
        {
          title: '初识HTML+CSS',
          classify: 'HTML/CSS',
          href: 'https://www.imooc.com/learn/9',
          imgUrl: 'https://img3.mukewang.com/529dc3380001379906000338-240-135.jpg'
        },
        {
          title: 'Java入门第一季',
          classify: 'Java',
          href: 'https://www.imooc.com/learn/85',
          imgUrl: 'https://img1.mukewang.com/57035ff200014b8a06000338-240-135.jpg'
        },
        {
          title: 'C语言入门',
          classify: 'C',
          href: 'https://www.imooc.com/learn/249',
          imgUrl: 'https://img3.mukewang.com/574669dc0001993606000338-240-135.jpg'
        },
        {
          title: '初识Python',
          classify: 'Python',
          href: 'https://www.imooc.com/learn/177',
          imgUrl: 'https://img4.mukewang.com/540e57300001d6d906000338-240-135.jpg'
        },
        {
          title: 'JavaScript入门篇',
          classify: 'JavaScript',
          href: 'https://www.imooc.com/learn/36',
          imgUrl: 'https://img4.mukewang.com/53e1d0470001ad1e06000338-240-135.jpg'
        },
        {
          title: 'PS入门教程——新手过招',
          classify: '设计工具',
          href: 'https://www.imooc.com/learn/139',
          imgUrl: 'https://img.mukewang.com/53a28e960001311b06000338-240-135.jpg'
        },
        {
          title: '用技术打造小程序简历，让面试官耳目一新',
          classify: 'Go',
          href: 'https://www.imooc.com/course/introduction/id/1221',
          imgUrl: 'https://img2.mukewang.com/5e53996209f289a412000676-240-135.png'
        },
        {
          title: 'Go语言语法进阶指南',
          classify: 'Java',
          href: 'https://www.imooc.com/learn/1163',
          imgUrl: 'https://img2.mukewang.com/5e1d23c4080821d806000338-240-135.jpg'
        },
        {
          title: '3小时玩转正则表达式',
          classify: 'Android',
          href: 'https://www.imooc.com/course/introduction/id/1218',
          imgUrl: 'https://img.mukewang.com/5e40bf28099afe9906000338-240-135.png'
        },
        {
          title: '自己动手实现RPC框架',
          classify: 'Java',
          href: 'https://www.imooc.com/learn/1158',
          imgUrl: 'https://img.mukewang.com/5e37d120082e7c7c06000338-240-135.jpg'
        },
        {
          title: 'Android网络安全之加解密',
          classify: '深度学习 自然语言处理',
          href: 'https://www.imooc.com/learn/1214',
          imgUrl: 'https://img4.mukewang.com/5dfc2e870902f80d06000338-240-135.png'
        },
        {
          title: 'React Native开发播放器',
          classify: 'Python 自然语言处理',
          href: 'https://www.imooc.com/course/introduction/id/1207',
          imgUrl: 'https://img3.mukewang.com/5e1c0ef609ca932612000676-240-135.png'
        },
        {
          title: 'ThreadLocal',
          classify: 'Java',
          href: 'https://www.imooc.com/learn/1217',
          imgUrl: 'https://img3.mukewang.com/5e16900109631c7b06000338-240-135.png'
        },
        {
          title: 'uni-app 5小时快速入门',
          classify: '大数据',
          href: 'https://www.imooc.com/course/introduction/id/1215',
          imgUrl: 'https://img4.mukewang.com/5e12e15309ff060712000676-240-135.png'
        },
        {
          title: 'NLP基础+实战 让机器“写小说”',
          classify: 'Android',
          href: 'https://www.imooc.com/learn/1216',
          imgUrl: 'https://img3.mukewang.com/5e12e9ed09141ced06000338-240-135.png'
        }
      ]
    }
  },
  mounted () {},
  methods: {
    toNewPage (url) {
      console.log(url)
      window.location.href = url
    }
  }
}
</script>

<style lang="scss" scoped>
.contet {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.host-content, .strategy-content, .base-content, .courses-content {
  width: 1200px;
  background: #ffffff;
  margin-bottom: 20px;
}
.strategy-content {
  display: flex;
  flex-direction: column;
  // align-items: center;
}
.host-content-title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
  color: #ff8933;
}
.host-content-title img {
  margin-right: 5px;
}
.img-content {
  display: flex;
  margin: 15px 0 20px;
  padding: 0 10px;
}
.hot {
  justify-content: space-around;
}
.share-content {
  width: 1176px;
  margin: 0 auto;
}
.img-share-box {
  position: relative;
  display: inline-block;
  vertical-align: top;
  background: #7f7f7f;
  width: 180px;
  height: 130px;
  margin: 0 8px 10px 8px;
  font-size: 12px;
  cursor: pointer;
}
.img-container {
  width: 180px;
  height: 130px;
  cursor: pointer;
}
.img-share {
  width: 100%;
  vertical-align: middle;
}
.img-share:hover {
  transform: scale(1.1);
}
.el-icon-s-opportunity {
  margin-right: 5px;
  color: #ff8933;
}
.explain-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
.explain {
  width: 30%;
}
.special-content {
  width: 1172px;
  margin: 0 auto;
  .special-content-item {
    width: 570px;
    height: 180px;
    overflow: hidden;
    border: 1px solid #eee;
    box-sizing: border-box;
    padding: 10px 10px 10px 20px;
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    margin: 0 8px 15px 8px;
    cursor: pointer;
    .pic {
      width: 102px;
      float: left;
      img {
        width: 100%;
      }
    }
    .content {
      margin-left: 125px;
      .title {
        margin-top: 15px;
        margin-bottom: 10px;
      }
      .introduce {
        display: inline-block;
        vertical-align: middle;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        max-width: 100%;
        margin-bottom: 10px;
      }
      .link {
        margin-bottom: 5px;
        .link-href {
          text-decoration: none;
          color: #888;
        }
        .link-href:hover {
          color: #25bb9b;
        }
        .btn {
          font-size: 10px;
          // width: 26px;
          // height: 15px;
        }
      }
    }
  }
}
.base-content {
  .base-content-title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 18px 0 10px 0;
  }
  .el-icon-reading {
    color: blue;
    margin-right: 5px;
  }
  .box {
    width: 1172px;
    margin: 0 auto;
    .base-content-item {
      width: 570px;
      height: 270px;
      overflow: hidden;
      margin: 0 8px 15px 8px;
      border: 1px solid #eee;
      box-sizing: border-box;
      display: inline-block;
      vertical-align: top;
      font-size: 14px;
      cursor: pointer;
      .hd {
        margin-bottom: 20px;
        position: relative;
        height: 53px;
        width: 572px;
        .hd-img {
          position: absolute;
          left: 0;
          top: 0;
        }
        .hd-title {
          position: absolute;
          z-index: 2;
          padding: 0 25px;
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          line-height: 53px;
          display: inline-block;
          vertical-align: middle;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
          max-width: 80%;
        }
      }
      .item {
        display: inline-block;
        vertical-align: top;
        position: relative;
        margin: 0 28px;
        width: 130px;
        height: 177px;
      }
      .item img {
        display: block;
        width: 100%;
      }
    }
  }
}
.courses-content {
  .courses-content-title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 18px 0 10px 0;
    color: #f39f7f;
  }
  .el-icon-collection {
    margin-right: 5px;
  }
  .courses-content-box {
    width: 1150px;
    margin: 0 auto;
    .courses-content-item {
      position: relative;
      display: inline-block;
      vertical-align: top;
      // background: #7f7f7f;
      width: 210px;
      // height: 119px;
      margin: 0 10px 10px 10px;
      font-size: 12px;
      cursor: pointer;
        .pic {
          width: 100%;
          float: left;
          img {
            width: 100%;
            height: 119px;
          }
          .classify {
            display: inline-block;
            background: rgba(28,31,33,.6);
            border-radius: 4px;
            padding: 4px 8px;
            margin-right: 4px;
            margin-bottom: 2px;
            margin-right: 0;
            font-weight: 200;
            color: #fff;
            position: relative;
            top: -33px;
            left: 6px;
          }
          .title {
            text-align: center;
            font-size: 16px;
            font-weight: bold;
            margin-top: -14px;
          }
        }
    }
  }
}
</style>
