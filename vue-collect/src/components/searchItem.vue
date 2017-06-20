<template>
<div>
	<header class="comHead">
        <div class="weui-search-bar km-search-bar" v-bind:class="{'weui-search-bar_focusing':isActive}">
        <button type="button" class="backTo" @click="backTo"><i class="iconfont icon-back"></i></button>
        <form class="weui-search-bar__form" onsubmit="return false;">
            <div class="weui-search-bar__box">
                <i class="weui-icon-search"></i>
                <input type="input" class="weui-search-bar__input" placeholder="请输入关键词搜索" autocomplete="off" v-model="searchKey" lazy/>
                <a href="javascript:" class="weui-icon-clear" @click="cancelSearch" v-show="isActive"></a>
            </div>
        </form>
        <a href="javascript:" class="weui-search-bar__cancel-btn" @click="cancelSearch" v-show="isActive">取消</a>
        </div>
    </header>
    <div class="weui-cells searchbar-result">
        <a class="weui-cell weui-cell_access searchbar-item" href="javascript:;" v-for="item in result">
        	<div class="weui-cell__bd weui-cell_primary"><p>{{item.market_name}}{{item.market_id}}</p></div><div class="weui-cell__ft"></div>
        </a>
    </div>
    <div class="emptyContent" v-show="nothing">
        <i class="ic_none_reminder"></i>
        <p class="emptyTip">对不起，没有与“{{searchKey}}”相关的内容</p>
    </div>
</div>
</template>

<script>
import store from 'store';

export default {
	data () {
		return {
			searchKey:'',
			isActive: false,
			nothing: false,
			result:{},
			query: this.$route.query
		}
	},
	created () {
		console.log(this.query.key);
	},
	methods: {
		backTo: function(){
			this.$router.go(-1);
		},
		tranUrl: function(val){
			var url = '';
	        switch(val){
	            case 'market':
	                url = '/likeMarket';
	                break;
	            case 'medicine':
	                url = '/likeMedicine';
	                break;
	            case 'cmedicine':
	                url = '/likeMedicine';
	                break;
	            case 'base':
	                url = '/likeBase';
	                break;
	            case 'grower':
	                url = '/likeGrower';
	                break;
	            case 'manufacturer':
	                url = '/likeManufacturer';
	                break;
	            default:
	                ;
	        }
	        return url;
		},
		cancelSearch: function(){
			this.isActive = false;
			this.searchKey = '';
		},
		SearchInterface:function(val){
			var _this = this,
				jsonData = {},
				key = this.tranUrl(this.query.key);
	        jsonData.userName = store.get('loginName');
	        jsonData.password = store.get('password');
	        jsonData[this.query.key] = val;
			this.$http.jsonp(this.$store.state.kmUrl+key,{
              params : {"parms":JSON.stringify(jsonData)},
              jsonp : 'jsoncallback'
            }).then(function(res){
              _this.result = res.body;
            },function(err){
              console.log(err);
            });
		}
	},
	watch: {
		searchKey:function(val){
			if(val===''){
				this.isActive = false;
			}else{
				this.isActive = true;
				// this.SearchInterface(val);
			}
		}
	}
}
</script>

<style>

</style>
