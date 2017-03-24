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
          <dt>技术栈</dt>
          <dd>
            项目基于vue2、vue-router、vuex、flex.css、ES6进行开发，使用了webpack、babel编译。
          </dd>
          <dt>完全克隆</dt>
          <dd>感谢@lzxb <a href="https://github.com/lzxb/vue-cnode"  target="_blank">https://github.com/lzxb/vue-cnode</a> ，借此项目学习和熟悉vuejs</dd>
        </dl>
      </div>
    </v-content>
  </div>
</template>
