<template>
  <div id="app">
    <vHeader :seller="seller"></vHeader>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/sell">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import vHeader from './components/common/header.vue'
const ERR_OK = 0;

export default {
  data () {
    return {
      seller: {}
    }
  },
  created () {
    var _this = this;
    this.axios.get('/api/seller').then((response) => {
      if(response.data.error===ERR_OK){
        _this.seller = response.data.data;
      }
    });
  },
  components:{
    vHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.tab{display:-webkit-flex;width:100%;height: 40px;line-height: 40px;position: relative;}
.tab::after{position: absolute;display: block;left:0;bottom:0;border-top: 1px solid rgba(7,17,27,0.1);content:' ';width:100%;}
.tab-item{flex:1;text-align: center;font-size: 14px;color:rgb(77,85,93);}
.tab-item>a{display: block;}
.tab-item>a.router-link-active{color:rgb(240,20,20);}
</style>
