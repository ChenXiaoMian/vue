<template>
	<div class="containerInner">
		<comHead :pageTitle="pageTitle"></comHead>
		<div class="weui-cells weui-cells_form">
            <router-link class="weui-cell weui-cell_access js-tempChoose" :to="{path:'/chooseTemp',query:{num:1}}">
                <div class="weui-cell__hd km-line"><label class="weui-label">选择模板</label></div>
                <div class="weui-cell__bd"><p class="c-c7c7c7 getChooseTemp">默认模板</p></div>
                <div class="weui-cell__ft"></div>
            </router-link>
            <router-link class="weui-cell weui-cell_access js-itemSearch" :to="{path:'/searchItem',query:{temp:'origin',key:'base'}}">
                <div class="weui-cell__hd km-line"><label class="weui-label">产地名称</label></div>
                <div class="weui-cell__bd"><p class="c-c7c7c7 sText-base" v-bind:class="{'c-3dbaff':isBase,'c-c7c7c7':!isBase}">关键字/产地名称</p></div>
                <div class="weui-cell__ft"></div>
            </router-link>
            <router-link class="weui-cell weui-cell_access js-itemSearch" :to="{path:'/searchItem',query:{temp:'origin',key:'grower'}}">
                <div class="weui-cell__hd km-line"><label class="weui-label adLet">种 植 户</label></div>
                <div class="weui-cell__bd"><p class="c-c7c7c7 sText-grower" v-bind:class="{'c-3dbaff':isBase,'c-c7c7c7':!isBase}">关键字/种植户</p></div>
                <div class="weui-cell__ft"></div>
            </router-link>
            <a class="weui-cell weui-cell_access js-itemSearch" href="javascript:;" data-search="medicine">
                <div class="weui-cell__hd km-line"><label class="weui-label adLet">药材名称</label></div>
                <div class="weui-cell__bd"><p class="c-c7c7c7 sText-medicine">关键字/药材名称</p><input type="hidden" required name="Medicine" class="sVal-medicine" emptyTips="请选择药材名称"/></div>
                <div class="weui-cell__ft"></div>
            </a>
        </div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">种植面积</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" required name="Area" placeholder="" emptyTips="请输入种植面积" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式"/>
                </div>
                <div class="weui-cell__dw c-c7c7c7">亩</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">人工成本</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" name="PersonCost" placeholder="" emptyTips="请输入人工成本" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式"/>
                </div>
                <div class="weui-cell__dw c-c7c7c7">元/亩</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">物料成本</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" name="MaterialCost" placeholder="" emptyTips="请输入物料成本" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式"/>
                </div>
                <div class="weui-cell__dw c-c7c7c7">元/亩</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">种子成本</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" name="SeedCost" placeholder="" emptyTips="请输入种子成本" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式"/>
                </div>
                <div class="weui-cell__dw c-c7c7c7">元/亩</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">预估产量</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" name="EstimateProduction" placeholder="" emptyTips="请输入预估产量" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式"/>
                </div>
                <div class="weui-cell__dw c-c7c7c7">公斤/亩</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line align-start"><label class="weui-label ">备注说明</label></div>
                <div class="weui-cell__bd">
                    <textarea class="weui-textarea" name="Addition" placeholder="请填写备注说明" rows="3"></textarea>
                </div>
            </div>
        </div>
		<form id="form-origin" name="formOrigin">
			<baseInfo :messenger="baseInfo.messenger" :location="baseInfo.location" :inputTime="baseInfo.inputTime"></baseInfo>
			<div class="km-page-button">
	            <a href="javascript:;" class="weui-btn weui-btn_plain-default km-btn_default" id="open-temp-dialog">存为模板</a>
	            <a href="javascript:;" class="weui-btn weui-btn_plain-primary km-btn_primary" id="form-origin-submit">上传</a>
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
	      baseInfo:{
	        messenger: store.get('userName'),
	        location: this.$store.getters.getLocation,
	        inputTime: formatDate(new Date(),'yyyy-MM-dd hh:mm')
	      },
	      stock: {
	        Market: '',
	        Medicine: '',
	        MerchantName: '',
	        MerchantAddress: '',
	        ContactPerson: '',
	        Phone: '',
	        Consume: '',
	        Inventory: '',
	        InventoryCost: '',
	        InventoryAddress: '',
	        Addition: ''
	      },
	      isBase: false,
	      isMedicine: false
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
