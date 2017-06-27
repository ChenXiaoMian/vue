<template>
	<div class="containerInner">
		<comHead :pageTitle="pageTitle"></comHead>
		<form id="form-output" name="formOutput">
        <div class="weui-cells weui-cells_form">
            <router-link class="weui-cell weui-cell_access js-tempChoose" :to="{path:'/chooseTemp',query:{num:1}}">
                <div class="weui-cell__hd km-line"><label class="weui-label">选择模板</label></div>
                <div class="weui-cell__bd"><p class="c-c7c7c7 getChooseTemp">默认模板</p></div>
                <div class="weui-cell__ft"></div>
            </router-link>
            <router-link class="weui-cell weui-cell_access js-itemSearch" :to="{path:'/searchItem',query:{temp:'output',key:'base'}}">
                <div class="weui-cell__hd km-line"><label class="weui-label">产地名称</label></div>
                <div class="weui-cell__bd"><p v-bind:class="{'c-3dbaff':isBase,'c-c7c7c7':!isBase}">{{output.BaseName}}</p></div>
                <div class="weui-cell__ft"></div>
            </router-link>
            <router-link class="weui-cell weui-cell_access js-itemSearch" :to="{path:'/searchItem',query:{temp:'output',key:'grower'}}">
                <div class="weui-cell__hd km-line"><label class="weui-label adLet">种 植 户</label></div>
                <div class="weui-cell__bd"><p v-bind:class="{'c-3dbaff':isGrower,'c-c7c7c7':!isGrower}">{{output.GrowerName}}</p></div>
                <div class="weui-cell__ft"></div>
            </router-link>
            <router-link class="weui-cell weui-cell_access js-itemSearch" :to="{path:'/searchItem',query:{temp:'output',key:'medicine'}}">
                <div class="weui-cell__hd km-line"><label class="weui-label adLet">药材名称</label></div>
                <div class="weui-cell__bd"><p v-bind:class="{'c-3dbaff':isMedicine,'c-c7c7c7':!isMedicine}">{{output.Medicine}}</p></div>
                <div class="weui-cell__ft"></div>
            </router-link>
        </div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">产新面积</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式" required name="Area" placeholder="" emptyTips="请输入产新面积" v-model="output.Area"/>
                </div>
                <div class="weui-cell__dw c-c7c7c7">亩</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">单位产量</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式" required name="UnitProduction" placeholder="" emptyTips="请输入单位产量" v-model="output.UnitProduction"/>
                </div>
                <div class="weui-cell__dw c-c7c7c7">公斤/亩</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">产量趋势</label></div>
                <div class="weui-cell__bd">
                    <select class="weui-select" name="ProdcutionTendency" v-model="output.ProdcutionTendency">
                        <option disabled value="">请选择</option>
                        <option>持平</option>
                        <option>上升</option>
                        <option>下降</option>
                    </select>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式" disabled="disabled" placeholder="0" name="ProductionRange" v-model="output.ProductionRange"/>
                </div>
                <div class="weui-cell__dw flex-20 c-c7c7c7">%</div>
            </div>
        </div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">采收价格</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式" required name="Price" placeholder="" emptyTips="请输入采收价格" v-model="output.Price"/>
                </div>
                <div class="weui-cell__dw c-c7c7c7">元/公斤</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">价格趋势</label></div>
                <div class="weui-cell__bd">
                    <select class="weui-select" name="PriceTendency">
                        <option value="">请选择</option>
                        <option value="持平">持平</option>
                        <option value="上升">上升</option>
                        <option value="下降">下降</option>
                    </select>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式" disabled="disabled" placeholder="0" name="PriceRange" v-model="output.PriceRange"/>
                </div>
                <div class="weui-cell__dw flex-20 c-c7c7c7">%</div>
            </div>
        </div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">种植意愿</label></div>
                <div class="weui-cell__bd">
                    <select class="weui-select" name="Wish">
                        <option value="">请选择</option>
                        <option value="正常">正常</option>
                        <option value="强烈">强烈</option>
                        <option value="非常强烈">非常强烈</option>
                        <option value="消极">消极</option>
                        <option value="非常消极">非常消极</option>
                    </select>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">计划面积</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式" name="PlanArea" placeholder="" emptyTips="请输入计划面积" v-model="output.ChangeArea"/>
                </div>
                <div class="weui-cell__dw c-c7c7c7">亩</div>
            </div>
        </div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell weui-cells_checkbox km-cells-checkbox">
                <div class="weui-cell__hd km-line"><label class="weui-label ">是否转产</label></div>
                <label class="weui-cell__hd weui-check__label ml-20" for="s11">
                    <input type="radio" class="weui-check" name="ChangeMode" id="s11" value="是"/>
                    <i class="weui-icon-checked"></i>是
                </label>
                <label class="weui-cell__hd weui-check__label ml-40" for="s12">
                    <input type="radio" class="weui-check" name="ChangeMode" id="s12" checked="checked" value="否"/>
                    <i class="weui-icon-checked"></i>否
                </label>
            </div>
            <a class="weui-cell weui-cell_access js-itemSearch disabled" href="javascript:;" id="sClick-cmedicine" data-search="cmedicine">
                <div class="weui-cell__hd km-line"><label class="weui-label adLet">转产药材</label></div>
                <div class="weui-cell__bd"><p class="c-c7c7c7 sText-cmedicine bg-efefef">关键字/中药材名称</p><input type="hidden" name="ChangeMedicine" class="sVal-cmedicine" emptyTips="请选择转产药材名称" v-model="output.ChangeMedicine"/></div>
                <div class="weui-cell__ft"></div>
            </a>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">转产面积</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式" name="ChangeArea" placeholder="" emptyTips="请输入转产面积" disabled="disabled" v-model="output.ChangeArea"/>
                </div>
                <div class="weui-cell__dw flex-20 c-c7c7c7">亩</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line align-start"><label class="weui-label ">备注说明</label></div>
                <div class="weui-cell__bd">
                    <textarea class="weui-textarea" name="Addition" placeholder="请填写备注说明" rows="3" v-model="output.Addition"></textarea>
                </div>
            </div>
        </div>
        <baseInfo :messenger="baseInfo.messenger" :location="baseInfo.location" :inputTime="baseInfo.inputTime"></baseInfo>
        <div class="km-page-button">
            <a href="javascript:;" class="weui-btn weui-btn_plain-default km-btn_default" id="open-temp-dialog">存为模板</a>
            <a href="javascript:;" class="weui-btn weui-btn_plain-primary km-btn_primary" id="form-output-submit">上传</a>
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
	      pageTitle: '产出信息采集',
	      regexp: this.$store.getters.getRegexp,
	      baseInfo:{
	        messenger: store.get('userName'),
	        location: this.$store.getters.getLocation,
	        inputTime: formatDate(new Date(),'yyyy-MM-dd hh:mm')
	      },
	      output: {
	        BaseName: '',
	        GrowerName: '',
            Medicine: '',
	        Area: '',
	        UnitProduction: '',
	        ProdcutionTendency: '',
	        ProductionRange: '',
	        Price: '',
	        PriceTendency: '',
	        PriceRange: '',
	        Wish: '',
	        PlanArea: '',
	        ChangeMode: '',
	        ChangeMedicine: '',
	        ChangeArea: '',
	        Addition: ''
	      },
	      isBase: false,
	      isGrower: false,
          isMedicine: false
	    }
	},
    created () {
        var baseName = this.$store.getters['output/getBaseName'],
            growerName = this.$store.getters['output/getGrowerName'],
            medicine = this.$store.getters['output/getMedicine'];
        this.output.BaseName = baseName || '关键字/产地名称';
        this.output.GrowerName = growerName || '关键字/种植户';
        this.output.Medicine = medicine || '关键字/中药材名称';
        if(baseName!='') this.isBase = true;
        if(growerName!='') this.isGrower = true;
        if(medicine!='') this.isMedicine = true;
    },
    updated () {
        weui.form.checkIfBlur('#form-output', this.regexp);    
    },
    methods: {
        init () {
            this.output.BaseName = '关键字/产地名称';
            this.output.GrowerName = '关键字/种植户';
            this.output.Medicine = '关键字/中药材名称';
            this.isBase = false;
            this.isGrower = false;
            this.isMedicine = false;
        },
        submit () {
            var _this = this;
            if(!this.isBase) weui.topTips('请选择产地名称');
            if(!this.isGrower) weui.topTips('请选择种植户');
            if(!this.isMedicine) weui.topTips('请选择中药材名称');
            
            weui.form.validate('#form-output', function(error){
                if(!error){
                    var jsonData = {};
                    jsonData.UserName = store.get('loginName');
                    Object.assign(jsonData,_this.origin); //es6
                    jsonData.Address = _this.baseInfo.location;
                    jsonData.Time = _this.baseInfo.inputTime;
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
            this.$store.dispatch('output/setbase','');
            this.$store.dispatch('output/setgrower','');
            this.$store.dispatch('output/setmedicine','');
            this.init();
            document.formOutput.reset();
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
