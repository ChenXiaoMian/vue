<template>
  <div class="containerInner">
        <comHead :pageTitle="pageTitle"></comHead>
        <form id="form-stock" name="formStock">
        <div class="weui-cells weui-cells_form">
            <router-link class="weui-cell weui-cell_access js-tempChoose" :to="{path:'/chooseTemp',query:{num:1}}">
                <div class="weui-cell__hd km-line"><label class="weui-label">选择模板</label></div>
                <div class="weui-cell__bd"><p class="c-c7c7c7 getChooseTemp">默认模板</p></div>
                <div class="weui-cell__ft"></div>
            </router-link>
            <router-link class="weui-cell weui-cell_access js-itemSearch" :to="{path:'/searchItem',query:{temp:'stock',key:'market'}}" data-search="market">
                <div class="weui-cell__hd km-line"><label class="weui-label ">交易市场</label></div>
                <div class="weui-cell__bd">
                    <p class="stockText-market" v-bind:class="{'c-3dbaff':isMarket,'c-c7c7c7':!isMarket}">{{stock.Market}}</p>
                    <input type="hidden" required name="Market" class="stockVal-market" emptyTips="请选择交易市场" v-model="stock.Market"/>
                </div>
                <div class="weui-cell__ft"></div>
            </router-link>
            <router-link class="weui-cell weui-cell_access js-itemSearch" :to="{path:'/searchItem',query:{temp:'stock',key:'medicine'}}" data-search="medicine">
                <div class="weui-cell__hd km-line"><label class="weui-label ">药材名称</label></div>
                <div class="weui-cell__bd">
                    <p class="stockText-medicine" v-bind:class="{'c-3dbaff':isMedicine,'c-c7c7c7':!isMedicine}">{{stock.Medicine}}</p>
                    <input type="hidden" required name="Medicine" class="stockVal-medicine" emptyTips="请选择药材名称"/></div>
                <div class="weui-cell__ft"></div>
            </router-link>
        </div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">商户名称</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" name="MerchantName" placeholder="请填写商户名称" v-model="stock.MerchantName"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">商户地址</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" name="MerchantAddress" placeholder="请填写商户地址" v-model="stock.MerchantAddress"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label adLet">联 系 人</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" name="ContactPerson" placeholder="请填写联系人姓名" v-model="stock.ContactPerson"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">联系方式</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="tel" name="Phone" placeholder="请填写联系人电话" v-model="stock.Phone"/>
                </div>
            </div>
        </div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">年消耗量<br />(总)</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" pattern="REG_NUMBER" name="Consume" placeholder="" emptyTips="请输入年消耗量(总)" notmatchtips="请输入正确的数字格式" v-model="stock.Consume"/>
                </div>
                <div class="weui-cell__dw c-c7c7c7">公斤</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">库存数量</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" required type="text" pattern="REG_NUMBER" name="Inventory" placeholder="" emptyTips="请输入库存数量" notmatchtips="请输入正确的数字格式" v-model="stock.Inventory"/>
                </div>
                <div class="weui-cell__dw c-c7c7c7">公斤</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">存量进价<br />(平均)</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" name="InventoryCost" placeholder="" emptyTips="存量进价 (平均)" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式" v-model="stock.InventoryCost"/>
                </div>
                <div class="weui-cell__dw c-c7c7c7">元/公斤</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">库存地址</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" name="InventoryAddress" placeholder="请填写库存地址" v-model="stock.InventoryAddress"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line align-start"><label class="weui-label ">备注说明</label></div>
                <div class="weui-cell__bd">
                    <textarea class="weui-textarea" placeholder="请填写备注说明" name="Addition" rows="3" v-model="stock.Addition"></textarea>
                </div>
            </div>
        </div>
        <baseInfo :messenger="baseInfo.messenger" :location="baseInfo.location" :inputTime="baseInfo.inputTime"></baseInfo>
        <div class="km-page-button">
            <a href="javascript:;" class="weui-btn weui-btn_plain-default km-btn_default" id="open-temp-dialog">存为模板</a>
            <a href="javascript:;" class="weui-btn weui-btn_plain-primary km-btn_primary" id="form-stock-submit">上传</a>
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
      pageTitle: '市场存量信息采集',
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
      isMarket: false,
      isMedicine: false
    }
  },
  created () {
    var market = this.$store.getters.getMarket,
        medicine = this.$store.getters.getMedicine;
    this.stock.Market = market || '关键字/市场名称';
    this.stock.Medicine = medicine || '关键字/中药材名称';
    if(market!='') this.isMarket = true;
    if(medicine!='') this.isMedicine = true;
    // console.log(this.$store.getters);
    // this.messenger = store.get('userName');
    // console.log(this.$route);
    // console.log(this.$route.param);
  },
  methods: {
    getNow () {
      let now = new Date();
      return now;
    }
  },
  components: {
    comHead,
    baseInfo
  }
}
</script>

<style>
.adLet{
  letter-spacing: 0px;
}
</style>
