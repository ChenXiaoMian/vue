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
                    <input class="weui-input c-666666" type="text" required placeholder="账号" id="txtusername" v-model="userName" emptyTips="请输入账号"/>
                </div>
            </div>
        </div>
        <div class="login-panel weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label w30"><i class="iconfont icon-password c-3dbaff"></i></label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input c-666666" type="password" required placeholder="密码" id="txtuserpass" v-model="password" emptyTips="请输入密码"/>
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
import md5 from 'js-md5';
// import jsonp from 'jsonp';
export default {
  data () {
    return {
      userName : '',
      password : ''
    }
  },
  created () {
    weui.form.checkIfBlur('#form-login', this.$store.state.regexp);
  },
  methods: {
    actLogin () {
        var _this = this;
        weui.form.validate('#form-login', function(error){
          if(error){
            error.ele.focus();
          }else{
            var jsonData = {};
            jsonData.userName = _this.userName.trim();
            jsonData.password = md5(_this.password.trim());
            // console.log(jsonData);
            _this.$http.jsonp(_this.$store.state.kmUrl+'/loginJSONP',{
              params : {"parms":JSON.stringify(jsonData)},
              jsonp : 'jsoncallback'
            }).then(function(res){
              console.log(JSON.parse(res.bodyText).s);
              this.myData = JSON.parse(res.bodyText).s;
              console.log(this.myData);
            },function(err){
              console.log(err);
            });
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
