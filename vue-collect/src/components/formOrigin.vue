<template>
	<div class="containerInner">
		<comHead :pageTitle="pageTitle"></comHead>
        <form id="form-origin" name="formOrigin">
		<div class="weui-cells weui-cells_form">
            <router-link class="weui-cell weui-cell_access js-tempChoose" :to="{path:'/chooseTemp',query:{num:1}}">
                <div class="weui-cell__hd km-line"><label class="weui-label">选择模板</label></div>
                <div class="weui-cell__bd"><p class="c-c7c7c7 getChooseTemp">默认模板</p></div>
                <div class="weui-cell__ft"></div>
            </router-link>
            <router-link class="weui-cell weui-cell_access js-itemSearch" :to="{path:'/searchItem',query:{temp:'origin',key:'base'}}">
                <div class="weui-cell__hd km-line"><label class="weui-label">产地名称</label></div>
                <div class="weui-cell__bd"><p v-bind:class="{'c-3dbaff':isBase,'c-c7c7c7':!isBase}">{{origin.BaseName}}</p></div>
                <div class="weui-cell__ft"></div>
            </router-link>
            <router-link class="weui-cell weui-cell_access js-itemSearch" :to="{path:'/searchItem',query:{temp:'origin',key:'grower'}}">
                <div class="weui-cell__hd km-line"><label class="weui-label adLet">种 植 户</label></div>
                <div class="weui-cell__bd"><p v-bind:class="{'c-3dbaff':isGrower,'c-c7c7c7':!isGrower}">{{origin.GrowerName}}</p></div>
                <div class="weui-cell__ft"></div>
            </router-link>
            <router-link class="weui-cell weui-cell_access js-itemSearch" :to="{path:'/searchItem',query:{temp:'origin',key:'medicine'}}">
                <div class="weui-cell__hd km-line"><label class="weui-label adLet">药材名称</label></div>
                <div class="weui-cell__bd"><p v-bind:class="{'c-3dbaff':isMedicine,'c-c7c7c7':!isMedicine}">{{origin.Medicine}}</p></div>
                <div class="weui-cell__ft"></div>
            </router-link>
        </div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">种植面积</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" required name="Area" placeholder="" emptyTips="请输入种植面积" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式" v-model="origin.Area"/>
                </div>
                <div class="weui-cell__dw c-c7c7c7">亩</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">人工成本</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" name="PersonCost" placeholder="" emptyTips="请输入人工成本" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式" v-model="origin.PersonCost"/>
                </div>
                <div class="weui-cell__dw c-c7c7c7">元/亩</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">物料成本</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" name="MaterialCost" placeholder="" emptyTips="请输入物料成本" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式" v-model="origin.MaterialCost"/>
                </div>
                <div class="weui-cell__dw c-c7c7c7">元/亩</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">种子成本</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" name="SeedCost" placeholder="" emptyTips="请输入种子成本" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式" v-model="origin.SeedCost"/>
                </div>
                <div class="weui-cell__dw c-c7c7c7">元/亩</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">预估产量</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" name="EstimateProduction" placeholder="" emptyTips="请输入预估产量" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式" v-model="origin.EstimateProduction"/>
                </div>
                <div class="weui-cell__dw c-c7c7c7">公斤/亩</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line align-start"><label class="weui-label ">备注说明</label></div>
                <div class="weui-cell__bd">
                    <textarea class="weui-textarea" name="Addition" placeholder="请填写备注说明" rows="3" v-model="origin.Addition"></textarea>
                </div>
            </div>
        </div>
		<baseInfo></baseInfo>
		<div class="km-page-button">
            <a href="javascript:;" class="weui-btn weui-btn_plain-default km-btn_default" id="open-temp-dialog">存为模板</a>
            <a href="javascript:;" class="weui-btn weui-btn_plain-primary km-btn_primary" @click="submit">上传</a>
        </div>
        <!-- 保存弹出框 -->
        <div class="js_dialog" style="display: none;">
            <div class="weui-mask"></div>
            <div class="weui-dialog">
                <div class="weui-dialog__hd pt-15"><strong class="weui-dialog__title c-000000">提示</strong></div>
                <div class="weui-dialog__bd"><input class="weui-input" name="tempName" type="text" placeholder="填写模板名称" emptyTips="请填写模板名称"/></div>
                <div class="weui-dialog__ft">
                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default">取消</a>
                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary c-3dbaff" id="save-for-temp">保存</a>
                </div>
            </div>
        </div>
		</form>
	</div>
</template>

<script>
import weui from 'weui.js';
import store from 'store';
import { formatDate } from '../common/js/util';

import comHead from './common/comHead';
import baseInfo from './common/baseInfo';

export default {
	data () {
	    return {
	      pageTitle: '产地信息采集',
	      regexp: this.$store.getters.getRegexp,
	      origin: {
	        BaseName: '',
	        GrowerName: '',
            Medicine: '',
	        Area: '',
	        PersonCost: '',
	        MaterialCost: '',
	        SeedCost: '',
	        EstimateProduction: '',
	        Addition: ''
	      },
	      isBase: false,
	      isGrower: false,
          isMedicine: false
	    }
	},
    created () {
        var baseName = this.$store.getters['origin/getBaseName'],
            growerName = this.$store.getters['origin/getGrowerName'],
            medicine = this.$store.getters['origin/getMedicine'];
        this.origin.BaseName = baseName || '关键字/产地名称';
        this.origin.GrowerName = growerName || '关键字/种植户';
        this.origin.Medicine = medicine || '关键字/中药材名称';
        if(baseName!='') this.isBase = true;
        if(growerName!='') this.isGrower = true;
        if(medicine!='') this.isMedicine = true;
    },
    updated () {
        weui.form.checkIfBlur('#form-origin', this.regexp);    
    },
    methods: {
        init () {
            this.origin.BaseName = '关键字/产地名称';
            this.origin.GrowerName = '关键字/种植户';
            this.origin.Medicine = '关键字/中药材名称';
            this.isBase = false;
            this.isGrower = false;
            this.isMedicine = false;
        },
        submit () {
            var _this = this;
            if(!this.isBase) weui.topTips('请选择产地名称');
            if(!this.isGrower) weui.topTips('请选择种植户');
            if(!this.isMedicine) weui.topTips('请选择中药材名称');
            
            weui.form.validate('#form-origin', function(error){
                if(!error){
                    var jsonData = {};
                    jsonData.UserName = store.get('loginName');
                    Object.assign(jsonData,_this.origin); //es6
                    jsonData.Address = _this.$store.getters.getLocation;
                    jsonData.Time = formatDate(new Date(),'yyyy-MM-dd hh:mm');
                    // console.log(jsonData);
                    var loading = weui.loading('上传中...');
                    _this.$http.jsonp(_this.$store.getters.getUrl+'/saveGrowBaseJSONP',{
                      params : {"parms":JSON.stringify(jsonData)},
                      jsonp : 'jsoncallback'
                    }).then(function(res){
                        loading.hide();
                        weui.toast('上传成功', 2000);
                        jsonData.hid = new Date().getTime();
                        jsonData.cUserName = store.get('userName');
                        if(store.get('histOrigin') && store.get('histOrigin')!=''){
                            // 更新
                            var histOrigin = JSON.parse(store.get('histOrigin'));
                            histOrigin.data.unshift(jsonData);
                            store.remove('histOrigin');
                            store.set('histOrigin',JSON.stringify(histOrigin));
                        }else{
                            // 新建
                            var historyData = {data : []};
                            historyData.data.unshift(jsonData);
                            store.set('histOrigin',JSON.stringify(historyData));
                        }
                        _this.reset();
                    },function(err){
                      loading.hide();
                      weui.alert('上传失败');
                    });
                }
            },this.regexp);
        },
        reset () {
            this.$store.dispatch('origin/setbase','');
            this.$store.dispatch('origin/setgrower','');
            this.$store.dispatch('origin/setmedicine','');
            this.init();
            document.formOrigin.reset();
        }
    },
	components: {
    	comHead,
    	baseInfo
	}
}
</script>

<style>

</style>
