<template>
<div class="searchWrap">
	<header class="comHead">
        <div class="weui-search-bar km-search-bar" v-bind:class="{'weui-search-bar_focusing':isActive}">
        <button type="button" class="backTo" @click="backTo"><i class="iconfont icon-back"></i></button>
        <form class="weui-search-bar__form" onsubmit="return false;">
            <div class="weui-search-bar__box">
                <i class="weui-icon-search"></i>
                <input type="input" class="weui-search-bar__input" placeholder="请输入关键词搜索" @keyup="search()" v-model="keyword">
                <a href="javascript:" class="weui-icon-clear" @click="clean" v-show="isActive"></a>
            </div>
        </form>
        <a href="javascript:" class="weui-search-bar__cancel-btn" @click="clean" v-show="isActive">取消</a>
        </div>
    </header>
	<div class="searchContent" ref="resultWrap">
		<div class="weui-cells searchbar-result">
			<a class="weui-cell weui-cell_access searchbar-item" href="javascript:;" v-for="item in result.market" @click="select(item.market_name)" v-bind:id="item.market_id">
				<div class="weui-cell__bd weui-cell_primary"><p>{{item.market_name}}</p></div><div class="weui-cell__ft"></div>
			</a>
			<a class="weui-cell weui-cell_access searchbar-item" href="javascript:;" v-for="item in result.medicine" @click="select(item.medicine_name)" v-bind:id="item.medicine_id">
				<div class="weui-cell__bd weui-cell_primary"><p>{{item.medicine_name}}</p></div><div class="weui-cell__ft"></div>
			</a>
			<a class="weui-cell weui-cell_access searchbar-item" href="javascript:;" v-for="item in result.base" @click="select(item.base_name)" v-bind:id="item.base_id">
				<div class="weui-cell__bd weui-cell_primary"><p>{{item.base_name}}</p></div><div class="weui-cell__ft"></div>
			</a>
			<a class="weui-cell weui-cell_access searchbar-item" href="javascript:;" v-for="item in result.grower" @click="select(item.grower_name)" v-bind:id="item.grower_id">
				<div class="weui-cell__bd weui-cell_primary"><p>{{item.grower_name}}</p></div><div class="weui-cell__ft"></div>
			</a>
			<a class="weui-cell weui-cell_access searchbar-item" href="javascript:;" v-for="item in result.cmedicine" @click="select(item.medicine_name)" v-bind:id="item.medicine_id">
				<div class="weui-cell__bd weui-cell_primary"><p>{{item.medicine_name}}</p></div><div class="weui-cell__ft"></div>
			</a>
			<a class="weui-cell weui-cell_access searchbar-item" href="javascript:;" v-for="item in result.manufacturer" @click="select(item.manufacturer_name)" v-bind:id="item.manufacturer_id">
				<div class="weui-cell__bd weui-cell_primary"><p>{{item.manufacturer_name}}</p></div><div class="weui-cell__ft"></div>
			</a>
		</div>
		<div class="emptyContent" v-show="nothing">
			<i class="ic_none_reminder"></i>
			<p class="emptyTip">对不起，没有与“{{keyword}}”相关的内容</p>
		</div>
	</div>
</div>
</template>

<script>
import store from 'store';
import BScroll from 'better-scroll';

export default {
	data () {
		return {
			keyword:'',
			isActive: false,
			nothing: false,
			temp: this.$route.query.temp,
			key: this.$route.query.key,
			url:{
				market: '/likeMarket',
				medicine: '/likeMedicine',
				cmedicine: '/likeMedicine',
				base: '/likeBase',
				grower: '/likeGrower',
				manufacturer: '/likeManufacturer'
			},
			result:{
				market:[],
				medicine:[],
				base:[],
				grower:[],
				manufacturer:[],
				cmedicine:[]
			}
		}
	},
	created () {
		// console.log(this.query.key);
	},
	methods: {
		_initScroll () {
			if(!this.resultScroll){
				this.resultScroll = new BScroll(this.$refs.resultWrap,{
					click:true
				});
			}else{
				this.resultScroll.refresh();
			}
		},
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
				key = _this.url[_this.key];

			jsonData.userName = 'hch';
	        jsonData.password = 'e10adc3949ba59abbe56e057f20f883e';
	        // jsonData.userName = store.get('loginName');
	        // jsonData.password = store.get('password');
	        if(_this.key=='cmedicine'){
	        	jsonData['medicine'] = _this.keyword;	
	        }else{
	        	jsonData[_this.key] = _this.keyword;	
	        }
	        

			if(timer || jsonData[_this.key]==''){
				_this.nothing = false;
				_this.result[_this.key] = [];
				return;
			};

			timer = setTimeout(function(){
				_this.result[_this.key] = [];
				_this.post(key,jsonData);
				clearTimeout(timer);
                timer = null;
			},500);
		},
		post:function(key,jsonData){
			var _this = this;
			this.$http.jsonp(_this.$store.getters.getUrl+key,{
              params : {"parms":JSON.stringify(jsonData)},
              jsonp : 'jsoncallback'
            }).then(function(res){
              var arr = JSON.parse(res.body.message);
              if(arr&&arr!=''){
              	_this.result[_this.key] = JSON.parse(res.body.message);
              	_this.nothing = false;
				_this.$nextTick(() => {
					_this._initScroll();
				});
              }else{
              	_this.nothing = true;
              }
            },function(err){
              // console.log(err);
            });
		},
		select:function(val){
			this.$store.dispatch(`${this.temp}/set${this.key}`,val);
			this.backTo();
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
