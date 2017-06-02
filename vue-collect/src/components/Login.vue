<template>
  <div>
    <header class="comHead bg-eaeff3">
        <div class="headTitle">登录</div>
    </header>
    <div class="container">
        <form id="form-login">
        <div class="login-panel weui-cells mt-80">
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label w30"><i class="iconfont icon-account c-3dbaff"></i></label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input c-666666" type="text" required placeholder="账号" id="txtusername" emptyTips="请输入账号"/>
                </div>
            </div>
        </div>
        <div class="login-panel weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label w30"><i class="iconfont icon-password c-3dbaff"></i></label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input c-666666" type="password" required placeholder="密码" id="txtuserpass" emptyTips="请输入密码"/>
                </div>
            </div>
        </div>
        <div class="km-page-button">
            <a href="javascript:;" class="weui-btn weui-btn_plain-primary km-btn_primary" @click="actLogin()">登录</a>
        </div>
        </form>
    </div>
  </div>
</template>

<script>
import 'weui';
import weui from 'weui.js';
export default {
  created () {
    weui.form.checkIfBlur('#form-login', this.$store.state.regexp);
  },
  methods: {
    actLogin () {
        weui.form.validate('#form-login', function(error){
          if(error){
            error.ele.focus();
          }else{
            
          }
        }, this.$store.state.regexp);
        // weui.alert('alert');
        // console.log(this.$store.getters.getUserName);


        // this.$router.push('/');
    }
  }
}
</script>

<style>

</style>
