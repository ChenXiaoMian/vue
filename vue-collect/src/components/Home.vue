<template>
  <div class="indexBg posAll">
      <h1 class="logo"></h1>
      <div class="navIconPos">
          <div class="navIcon">
              <router-link to="formStock" class="stock js_item"><div class="icon"></div><span>存量采集</span></router-link>
              <router-link to="formOrigin" class="origin js_item"><div class="icon"></div><span>产地采集</span></router-link>
              <router-link to="formOutput" class="output js_item"><div class="icon"></div><span>产出采集</span></router-link>
          </div>
          <div class="navIcon">
              <router-link to="formEnvi" class="envi js_item"><div class="icon"></div><span>环境采集</span></router-link>
              <router-link to="formPieces" class="pieces js_item"><div class="icon"></div><span>饮片采集</span></router-link>
              <router-link to="formPro" class="pro js_item"><div class="icon"></div><span>产品采集</span></router-link>
          </div>
          <div class="navIcon">
              <router-link to="formTrading" class="trading js_item"><div class="icon"></div><span>贸易采集</span></router-link>
              <router-link to="historyData" class="history js_item"><div class="icon"></div><span>历史记录</span></router-link>
              <router-link to="tempData" class="temp js_item"><div class="icon"></div><span>模板管理</span></router-link>
          </div>
          <div class="km-btn-signout">
              <router-link to="login" class="weui-btn weui-btn_default">退出登录</router-link>
          </div>
      </div>
  </div>
</template>
<script>
import Store from 'store'
import Vue from 'vue'
import { getPosition } from '../common/js/util';

export default {
  created () {
    var _this = this,
        BMap = window.BMap;
    this.isLogin();
    Vue.nextTick(function(){
      getPosition(BMap,_this);
    });
  },
  methods : {
    isLogin () {
      if(!Store.get("loginName")){
          this.$router.push('/login');
      }
    }
  }
}
</script>

<style>

</style>
