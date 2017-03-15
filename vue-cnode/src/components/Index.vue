<template>
  <div>
    <nav class="nav">
      <ul flex="box:mean">
        <li :class="{ active: !this.$route.query.tab }">
          <router-link to="/">全部</router-link>
        </li>
        <li :class="{ active: this.$route.query.tab == 'good' }">
          <router-link to="/?tab=good">精华</router-link>
        </li>
        <li :class="{ active: this.$route.query.tab == 'share' }">
          <router-link to="/?tab=share">分享</router-link>
        </li>
        <li :class="{ active: this.$route.query.tab == 'ask' }">
          <router-link to="/?tab=ask">问答</router-link>
        </li>
        <li :class="{ active: this.$route.query.tab == 'job' }">
          <router-link to="/?tab=job">招聘</router-link>
        </li>
      </ul>
    </nav>
    <v-content>
      <ul class="list">
        <li v-for="item in list" key="item.id">
          <router-link :to="'/topic/' + item.id">
            <div class="top" flex="box:first">
              <div class="headimg" :style="{ backgroundImage: 'url('+ item.author.avatar_url +')' }"></div>
              <div class="box" flex="dir:top">
                <strong>{{ item.author.loginname }}</strong>
                <div flex>
                  <time>{{ item.create_at | formatDate }}</time>
                  <span class="tag">#分享#</span>
                </div>
              </div>
            </div>
            <div class="common-typeicon" flex v-if="item.top || item.good">
              <div class="icon" v-if="item.good">
                <i class="iconfont icon-topic-good"></i>
              </div>
              <div class="icon" v-if="item.top">
                <i class="iconfont icon-topic-top"></i>
              </div>
            </div>
            <div class="tit">{{ item.title }}</div>
            <div class="expand" flex="box:mean">
              
            </div>
          </router-link>
        </li>
      </ul>
    </v-content>
    <v-footer></v-footer>
  </div>
</template>
<script>
import vFooter from './common/footer'
import vContent from './common/content'
export default {
  components : {
    vFooter,
    vContent
  },
  data () {
    return {
      list : [
        {
           "id" : "58ad76db7872ea0864fedfcc",
           "author_id" : "51f0f267f4963ade0e08f503",
           "tab" : "share",
           "title": "饿了么大前端 Node.js 进阶教程",
           "last_reply_at": "2017-03-15T07:03:34.557Z",
           "good": true,
           "top": true,
           "reply_count": 55,
           "visit_count": 7013,
           "create_at": "2017-02-22T11:32:43.547Z",
           "author": {
               "loginname": "lellansin",
               "avatar_url": "https://avatars.githubusercontent.com/u/2081487?v=3&s=120"
           }
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
@import "../less/config";
.nav{
  position: absolute;
  top:0;
  left:0;
  right:0;
  z-index: 10;
  border-bottom: 1px solid #ddd;
  ul{
    overflow: hidden;
    padding:0;
    margin:0;
    li{
      position: relative;
      list-style:none;
      line-height: 49px;
      text-align: center;
    }
    a{
      display: block;
      text-decoration: none;
      font-size: 14px;
      color: lighten(@text,50%);
    }
    .active{
      &:after {
        content:"";
        position: absolute;
        right:0;
        left:0;
        bottom:1px;
        height:3px;
        background: @main;
      }
      a{
        color: @text;
      }
    }
  }
}
</style>
