<template>
<div>
	<header class="comHead">
        <div class="weui-search-bar km-search-bar" v-bind:class="{'weui-search-bar_focusing':isActive}">
        <button type="button" class="backTo" @click="backTo"><i class="iconfont icon-back"></i></button>
        <form class="weui-search-bar__form" onsubmit="return false;">
            <div class="weui-search-bar__box">
                <i class="weui-icon-search"></i>
                <input type="input" class="weui-search-bar__input" placeholder="请输入关键词搜索" @keyup="search()" v-model="keyword"/>
                <a href="javascript:" class="weui-icon-clear" @click="clean" v-show="isActive"></a>
            </div>
        </form>
        <a href="javascript:" class="weui-search-bar__cancel-btn" @click="clean" v-show="isActive">取消</a>
        </div>
    </header>
    <div class="weui-cells searchbar-result">
    	<!-- <li v-for="item in result">
		    {{ item.market_name }}
		</li> -->
        <a class="weui-cell weui-cell_access searchbar-item" href="javascript:;" v-for="item in result">
        	<div class="weui-cell__bd weui-cell_primary" v-bind:id="item.market_id"><p>{{item.market_name}}</p></div><div class="weui-cell__ft"></div>
        </a>
    </div>
    <div class="emptyContent" v-show="nothing">
        <i class="ic_none_reminder"></i>
        <p class="emptyTip">对不起，没有与“{{keyword}}”相关的内容</p>
    </div>
</div>
</template>

<script>
import store from 'store';

export default {
	data () {
		return {
			keyword:'',
			isActive: false,
			nothing: false,
			result:[{
				market_id:7,
				market_name:'广州市清平中药材专业市场'
			}],
			query: this.$route.query,
			url:{
				market: '/likeMarket',
				medicine: '/likeMedicine',
				cmedicine: '/likeMedicine',
				base: '/likeBase',
				grower: '/likeGrower',
				manufacturer: '/likeManufacturer'
			}
		}
	},
	created () {
		// console.log(this.query.key);
	},
	methods: {
		backTo: function(){
			this.$router.go(-1);
		},
		clean: function(){
			this.isActive = false;
			this.nothing = false;
			this.keyword = '';
			this.result = [];
		},
		search:function(ev){
			var timer,
				_this = this,
				jsonData = {},
				key = _this.url[_this.query.key];

			jsonData.userName = 'hch';
	        jsonData.password = 'e10adc3949ba59abbe56e057f20f883e';
	        // jsonData.userName = store.get('loginName');
	        // jsonData.password = store.get('password');
	        jsonData[_this.query.key] = _this.keyword;

			if(timer || jsonData[_this.query.key]==''){
				_this.nothing = false;
				_this.result = [];
				return;
			};

			timer = setTimeout(function(){
				_this.result = [];
				_this.post(key,jsonData);
				clearTimeout(timer);
                timer = null;
			},500);
		},
		post:function(key,jsonData){
			var _this = this;

			this.$http.jsonp(this.$store.state.kmUrl+key,{
              params : {"parms":JSON.stringify(jsonData)},
              jsonp : 'jsoncallback'
            }).then(function(res){
              // console.log(JSON.parse(res.body.message));
              var arr = JSON.parse(res.body.message);
              if(arr&&arr!=''){
              	_this.result = JSON.parse(res.body.message);
              	_this.nothing = false;
              }else{
              	_this.nothing = true;
              }
            },function(err){
              // console.log(err);
            });
		}
	},
	watch: {
		keyword:function(val){
			if(val===''){
				this.isActive = false;
			}else{
				this.isActive = true;				
			}
		}
	}
}
</script>

<style>

</style>
