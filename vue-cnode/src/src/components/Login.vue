<style lang="less" scoped>
@import "../less/config";
.content{
  bottom: 0;
}
.form {
    width: 80%;
    padding: 0 10%;
    margin-top: -50px;
    .line {
      padding: 20px 0;
    }
    .text {
      box-sizing: border-box;
      width: 100%;
      padding: 5px 10px;
      line-height: 28px;
      border-radius: 5px;
      border: 1px solid #ddd;
      font-size: 14px;
    }
    .btn {
      width: 100%;
      line-height: 38px;
      border-radius: 5px;
      border: 1px solid darken(@main, 3%);
      font-size: 14px;
      color: #fff;
      background: @main;
    }
  }
</style>
<template>
  <div>
    <v-header title="登录">
      <div slot="left" class="item" flex="main:center cross:center" v-on:click="$router.go(-1)">
        <i class="iconfont icon-back"></i>
      </div>
    </v-header>
    <v-content flex="main:center cross:center">
      <form class="form" @submit.prevent="submit">
        <div class="line">
          <input type="text" class="text" placeholder="Access Token" v-model="form.accesstoken">
        </div>
        <div class="line">
          <button class="btn">{{ status ? '正在登录中' : '登录'}}</button>
        </div>
      </form>
    </v-content>
  </div>
</template>
<script>
  import util from 'util'
  import is from 'is'
  import { mapActions } from 'vuex'
  import { USER_SIGNIN } from 'stores/user'

  export default {
    data () {
      return {
        form: {
          accesstoken: ''
        },
        status: false
      }
    },
    methods: {
      ...mapActions([USER_SIGNIN])
    }
  }
</script>
