<style lang="less" scoped>
  .content {
    bottom: 0
  }

  .about {
    padding: 10px;
    line-height: 22px;
    dt {
      line-height: 28px;
      font-weight: bold;
    }
  }
</style>
<template>
  <div>
    <v-header title="关于">
      <div slot="left" class="item" flex="main:center cross:center" v-on:click="$router.go(-1)">
        <i class="iconfont icon-back"></i>
      </div>
    </v-header>
    <v-content class="content">
      <div class="about">
        <dl>
          <dt>前言</dt>
          <dd>
            项目灵感的最初来源是来自<a>@shinygang</a>的Vue-cnodejs，感谢cnodejs社区提供的API。
          </dd>
          <dt>技术栈</dt>
          <dd>
            项目基于vue2、vue-router、vuex、flex.css、ES6进行开发，使用了webpack、babel编译。
          </dd>
        </dl>
      </div>
    </v-content>
  </div>
</template>
