<template>
    <div class="containerInner">
        <comHead :pageTitle="pageTitle"></comHead>
        <form id="form-trading" name="formTrading" autocomplete="off">
        <div class="weui-cells weui-cells_form">
            <router-link class="weui-cell weui-cell_access js-tempChoose" :to="{path:'/chooseTemp',query:{num:1}}">
                <div class="weui-cell__hd km-line"><label class="weui-label ">选择模板</label></div>
                <div class="weui-cell__bd"><p class="c-3dbaff getChooseTemp">默认模板</p></div>
                <div class="weui-cell__ft"></div>
            </router-link>
            <a class="weui-cell weui-cell_access js-itemSearch" @click="search('trading','market')">
                <div class="weui-cell__hd km-line"><label class="weui-label adLet">交易市场</label></div>
                <div class="weui-cell__bd"><p v-bind:class="{'c-3dbaff':isMarket,'c-c7c7c7':!isMarket}">{{pro.Market}}</p></div>
                <div class="weui-cell__ft"></div>
            </a>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">商户名称</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" required type="text" placeholder="请填写商户名称" name="MerchantName"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">经营规模</label></div>
                <div class="weui-cell__bd">
                    <select class="weui-select" name="Scale">
                        <option value="">请选择</option>
                        <option value="大户">大户</option>
                        <option value="散户">散户</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="weui-cells weui-cells_form">
            <a class="weui-cell weui-cell_access js-itemSearch" @click="search('pro','medicine')">
                <div class="weui-cell__hd km-line"><label class="weui-label adLet">药材名称</label></div>
                <div class="weui-cell__bd"><p v-bind:class="{'c-3dbaff':isMedicine,'c-c7c7c7':!isMedicine}">{{pro.MedicineName}}</p></div>
                <div class="weui-cell__ft"></div>
            </a>
            <a class="weui-cell weui-cell_access js-itemSearch" @click="search('pro','base')">
                <div class="weui-cell__hd km-line"><label class="weui-label">产地名称</label></div>
                <div class="weui-cell__bd"><p v-bind:class="{'c-3dbaff':isBase,'c-c7c7c7':!isBase}">{{pro.BaseName}}</p></div>
                <div class="weui-cell__ft"></div>
            </a>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">交易类型</label></div>
                <div class="weui-cell__bd">
                    <select class="weui-select" name="MedicineType">
                        <option value="">请选择</option>
                        <option value="原药材">原药材</option>
                        <option value="饮片">饮片</option>
                    </select>
                </div>
            </div>
        </div>
        </form>
        <div class="innerType">
        <form id="innerType1" name="innerType1" autocomplete="off">
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label adLet">规 格 1</label></div>
                <div class="weui-cell__bd">
                    <select class="weui-select" name="Standard">
                    </select>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">交易数量<br />(日平均)</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式" placeholder="" name="TradeProduction"/>
                </div>
                <div class="weui-cell__dw c-c7c7c7">公斤</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">交易价格<br />(日平均)</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式" required placeholder="" name="Price" emptyTips="请输入交易价格"/>
                </div>
                <div class="weui-cell__dw c-c7c7c7">元/公斤</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label">价格趋势</label></div>
                <div class="weui-cell__bd">
                    <select class="weui-select" name="PriceTendency">
                        <option value="">请选择</option>
                        <option value="持平">持平</option>
                        <option value="上升">上升</option>
                        <option value="下降">下降</option>
                    </select>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式" disabled="disabled" placeholder="0" name="PriceRange"/>
                </div>
                <div class="weui-cell__dw flex-20 c-c7c7c7">%</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label">市场表现</label></div>
                <div class="weui-cell__bd">
                    <select class="weui-select" name="MarketStatus">
                        <option value="">请选择</option>
                        <option value="正常">正常</option>
                        <option value="活跃">活跃</option>
                        <option value="不活跃">不活跃</option>
                    </select>
                </div>
            </div>
        </div>
        </form>
        </div>
        <a href="javascript:void(0);" class="weui-cell weui-cell_link text-center" id="btnAddStandard">
            <div class="weui-cell__bd c-3dbaff"><i class="iconfont icon-add"></i> 增加规格</div>
        </a>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd km-line align-start"><label class="weui-label ">备注说明</label></div>
                <div class="weui-cell__bd">
                    <textarea class="weui-textarea" name="Addition" placeholder="请填写备注说明" rows="3"></textarea>
                </div>
            </div>
        </div>
        <baseInfo></baseInfo>
        <div class="km-page-button">
            <a href="javascript:;" class="weui-btn weui-btn_plain-default km-btn_default" @click="reset">存为模板</a>
            <a href="javascript:;" class="weui-btn weui-btn_plain-primary km-btn_primary" @click="submit">上传</a>
        </div>
        <!-- 保存弹出框 -->
        <div class="js_dialog" style="display: none;">
            <div class="weui-mask"></div>
            <div class="weui-dialog">
                <div class="weui-dialog__hd pt-15"><strong class="weui-dialog__title c-000000">提示</strong></div>
                <div class="weui-dialog__bd"><input class="weui-input" name="tempName" type="text" placeholder="填写模板名称" emptyTips="请填写模板名称"></div>
                <div class="weui-dialog__ft">
                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default">取消</a>
                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary c-3dbaff" id="save-for-temp">保存</a>
                </div>
            </div>
        </div>
        
        <searchList v-show="isSearch" :searchtemp="searchtemp" :searchkey="searchkey" v-on:searchDone="searchDone"></searchList>
    </div>
</template>

<script>
import weui from 'weui.js';
import store from 'store';
import { formatDate } from '../common/js/util';
import { mapGetters } from 'vuex';

import comHead from './common/comHead';
import baseInfo from './common/baseInfo';
import searchList from './common/searchList';
export default {
  data () {
    return {
      pageTitle: '贸易信息采集',
      regexp: this.$store.getters.getRegexp,
      pro: {
        Product: '',
        ProductName: '',
        Standard: '',
        ManufacturerName: '',
        MedicineName: '',
        BaseName: '',
        Ratio: '',
        MedicineStandard: '',
        Supplier: '',
        QualityRequire: '',
        Sale:'',
        ProductTendency: '',
        Addition: ''
      },
      isManu: false,
      isMedicine: false,
      isBase: false,
      isSearch: false,
      searchtemp: '',
      searchkey: '',
      standard: []
    }
  },
  created (){
    this.getStore();
  },
  computed : {
    ...mapGetters([
        'getUrl',
        'pro/getManu',
        'pro/getMedicine',
        'pro/getBaseName',
        'pro/getStandard'
    ])
  },
  updated (){
    weui.form.checkIfBlur('#form-pro', this.regexp);
  },
  methods: {
    init () {
    	this.pro.ManufacturerName = '关键字/生产商名称';
    	this.pro.MedicineName = '关键字/中药材名称';
        this.pro.BaseName = '关键字/产地名称';
        this.isManu = false;
        this.isMedicine = false;
        this.isBase = false;
        this.standard = [];
    },
    getStore () {
        var manu = this['pro/getManu'],
            medicine = this['pro/getMedicine'],
            baseName = this['pro/getBaseName'];
        this.pro.ManufacturerName = manu || '关键字/生产商名称';
        this.pro.MedicineName = medicine || '关键字/中药材名称';
        this.pro.BaseName = baseName || '关键字/产地名称';
        if(manu!='') this.isManu = true;
        if(medicine!='') this.isMedicine = true;
        if(baseName!='') this.isBase = true;
        var standard = this['pro/getStandard'] ? this['pro/getStandard'] : '';
        if(standard!='')  this.standard = standard.split(',');
    },
    search (t,k) {
        this.isSearch = true;
        this.searchtemp = t;
        this.searchkey = k;
    },
    searchDone () {
        this.isSearch = false;
        this.getStore();
    },
    submit () {
        var _this = this;
        var getUrl = function(val){
            var url = '';
            switch(val){
                case '成药':
                    return url = '/saveManufactureMedicineJSONP';
                    break;
                case '食品':
                    return url = '/saveManufactureFoodJSONP';
                    break;
                case '保健品':
                    return url = '/saveManufactureHealthProductsJSONP';
                    break;
            }
        };
        if(!this.isManu){
            weui.topTips('请选择生产商名称');
            return false;
        }
        if(!this.isMedicine){
            weui.topTips('请选择中药材名称');
            return false;
        }
        if(!this.isBase){
            weui.topTips('请选择产地名称');
            return false;
        }
        weui.form.validate('#form-pro', function(error){
            if(!error){
                var jsonData = {};
                jsonData.UserName = store.get('loginName');
                Object.assign(jsonData,_this.pro); //es6
                jsonData.Address = _this.$store.getters.getLocation;
                jsonData.Time = formatDate(new Date(),'yyyy-MM-dd hh:mm');
                //过滤选择设置内容
                if(_this.isBase == false) jsonData.BaseName = '';
                // console.log(jsonData);
                var loading = weui.loading('上传中...');
                _this.$http.jsonp(_this.$store.getters.getUrl+getUrl(_this.pro.Product),{
                  params : {"parms":JSON.stringify(jsonData)},
                  jsonp : 'jsoncallback'
                }).then(function(res){
                    loading.hide();
                    weui.toast('上传成功', 2000);
                    jsonData.hid = new Date().getTime();
                    jsonData.cUserName = store.get('userName');
                    if(store.get('histPro') && store.get('histPro')!=''){
                        // 更新
                        var histPro = JSON.parse(store.get('histPro'));
                        histPro.data.unshift(jsonData);
                        store.remove('histPro');
                        store.set('histPro',JSON.stringify(histPro));
                    }else{
                        // 新建
                        var historyData = {data : []};
                        historyData.data.unshift(jsonData);
                        store.set('histPro',JSON.stringify(historyData));
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
        this.$store.dispatch('pro/setmanufacturer','');
        this.$store.dispatch('pro/setmedicine','');
        this.$store.dispatch('pro/setbase','');
        document.formPro.reset();
        this.init();
    }
  },
  components: {
	comHead,
	baseInfo,
    searchList
  }
}
</script>

<style>

</style>
