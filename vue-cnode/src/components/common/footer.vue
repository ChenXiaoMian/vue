<style lang="less" scoped>
@import "../../less/config";
.footer{
  position: absolute;
  right: 0;
  bottom:0;
  left:0;
  z-index: 50;
  height: 49px;
  text-align: center;
  border-top: 1px solid #ddd;
  ul{
    padding: 5px 0;
    margin:0;
    li{
      list-style: none;
      a{
        position: relative;
        display: block;
        text-decoration: none;
        color:@text;
        i{
          display: block;
          line-height: 24px;
        }
        em{
          line-height: 16px;
          font-size: 13px;
          font-style: normal;
        }
        .count{
          position: absolute;
          top:0;
          left:50%;
          z-index: 2;
          padding: 1px 4px;
          line-height: 12px;
          border-radius: 50%;
          font-size: 12px;
          opacity: 0.9;
          color: #fff;
          background: red;
        }
      }
    }
    .active{
      i,em{color: @main;}
    }
  }
}
</style>
<template>
  <footer class="footer">
    <ul flex="box:mean">
      <li :class="{ active: item.path == $route.path }" v-for="item in list">
        <router-link :to="item.path">
          <i class="iconfont" :class="item.icon"></i>
          <em>{{item.title}}</em>
          <div class="count" v-if="item.path == '/my/messages' && count> 0">{{count}}</div>
        </router-link>
      </li>
    </ul>
  </footer>
</template>
<script>
  export default {
    data () {
      return {
        count : 0,
        list : [
          {
            title:'首页',
            path:'/',
            icon:'icon-index'
          },
          {
            title:'发表',
            path:'/topic/create',
            icon:'icon-edit'
          },
          {
            title:'消息',
            path:'/my/message',
            icon:'icon-msg'
          },
          {
            title:'我的',
            path:'/my/home',
            icon:'icon-user'
          }
        ]
      }
    }
  }
</script>
