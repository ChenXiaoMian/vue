<template>
    <div class="containerInner">
        <comHead :pageTitle="pageTitle"></comHead>
        <form id="form-trading" name="formTrading" autocomplete="off">
        <div class="weui-cells weui-cells_form">
            <a class="weui-cell weui-cell_access js-tempChoose" @click="choose">
                <div class="weui-cell__hd km-line"><label class="weui-label ">选择模板</label></div>
                <div class="weui-cell__bd"><p v-bind:class="{'c-3dbaff':isTemp,'c-c7c7c7':!isTemp}">{{trading.Temp}}</p></div>
                <div class="weui-cell__ft"></div>
            </a>
            <a class="weui-cell weui-cell_access js-itemSearch" @click="search('trading','market')">
                <div class="weui-cell__hd km-line"><label class="weui-label adLet">交易市场</label></div>
                <div class="weui-cell__bd"><p v-bind:class="{'c-3dbaff':isMarket,'c-c7c7c7':!isMarket}">{{trading.Market}}</p></div>
                <div class="weui-cell__ft"></div>
            </a>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label">商户名称</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" required type="text" placeholder="请填写商户名称" name="MerchantName"  v-model="trading.MerchantName"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label">经营规模</label></div>
                <div class="weui-cell__bd">
                    <select class="weui-select" name="Scale" v-model="trading.Scale">
                        <option value="">请选择</option>
                        <option value="大户">大户</option>
                        <option value="散户">散户</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="weui-cells weui-cells_form">
            <a class="weui-cell weui-cell_access js-itemSearch" @click="search('trading','medicine')">
                <div class="weui-cell__hd km-line"><label class="weui-label adLet">药材名称</label></div>
                <div class="weui-cell__bd"><p v-bind:class="{'c-3dbaff':isMedicine,'c-c7c7c7':!isMedicine}">{{trading.Medicine}}</p></div>
                <div class="weui-cell__ft"></div>
            </a>
            <a class="weui-cell weui-cell_access js-itemSearch" @click="search('trading','base')">
                <div class="weui-cell__hd km-line"><label class="weui-label">产地名称</label></div>
                <div class="weui-cell__bd"><p v-bind:class="{'c-3dbaff':isBase,'c-c7c7c7':!isBase}">{{trading.BaseName}}</p></div>
                <div class="weui-cell__ft"></div>
            </a>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">交易类型</label></div>
                <div class="weui-cell__bd">
                    <select class="weui-select" name="MedicineType" v-model="trading.MedicineType">
                        <option value="">请选择</option>
                        <option value="原药材">原药材</option>
                        <option value="饮片">饮片</option>
                    </select>
                </div>
            </div>
        </div>
        </form>
        <standardBlock :standardList="standardList" :standardArr="standardArr"></standardBlock>
        <a href="javascript:void(0);" class="weui-cell weui-cell_link text-center" id="btnAddStandard" @click="addStandard">
            <div class="weui-cell__bd c-3dbaff"><i class="iconfont icon-add"></i> 增加规格</div>
        </a>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd km-line align-start"><label class="weui-label">备注说明</label></div>
                <div class="weui-cell__bd">
                    <textarea class="weui-textarea" name="Addition" placeholder="请填写备注说明" rows="3" v-model="trading.Addition"></textarea>
                </div>
            </div>
        </div>
        <baseInfo></baseInfo>
        <div class="km-page-button">
            <a href="javascript:;" class="weui-btn weui-btn_plain-default km-btn_default" @click="save">存为模板</a>
            <a href="javascript:;" class="weui-btn weui-btn_plain-primary km-btn_primary" @click="submit">上传</a>
        </div>        
        <searchList v-show="isSearch" :searchtemp="searchtemp" :searchkey="searchkey" v-on:searchDone="searchDone"></searchList>
        <tempList v-show="showTemp" :tempData="tempData" :temp="'trading'" :tempTitle="trading.Temp" v-on:tclose="tclose"></tempList>
    </div>
</template>

<script>
import weui from 'weui.js';
import store from 'store';
import { formatDate,uniqeByKeys,trim } from '../common/js/util';
import { localLimit } from '../common/js/localstorage';
import { mapGetters } from 'vuex';

import comHead from './common/comHead';
import baseInfo from './common/baseInfo';
import searchList from './common/searchList';
import standardBlock from './common/standardBlock';
import tempList from './common/tempList';

export default {
  data () {
    return {
      pageTitle: '贸易信息采集',
      localTemp: 'tempTrading',
      regexp: this.$store.getters.getRegexp,
      trading: {
        Temp:'',
        Market: '',
        MerchantName: '',
        Scale: '',
        Medicine: '',
        BaseName: '',
        MedicineType: '',
        Addition: ''
      },
      isMarket: false,
      isMedicine: false,
      isBase: false,
      isSearch: false,
      isTemp: false,
      showTemp: false,
      searchtemp: '',
      searchkey: '',
      standardArr: [],
      standardList: [
        {
            Standard: '',
            TradeProduction: '',
            Price: '',
            PriceTendency: '',
            PriceRange: '',
            MarketStatus: '',
            isAbled: true
        }
      ],
      tempData: []
    }
  },
  created (){
    this.getStore();
  },
  computed : {
    ...mapGetters([
        'getUrl',
        'trading/getTemp',
        'trading/getMarket',
        'trading/getMedicine',
        'trading/getBaseName',
        'trading/getStandard'
    ])
  },
  updated (){
    weui.form.checkIfBlur('#form-trading', this.regexp);
  },
  methods: {
    init () {
        this.trading.Temp = '选择模板';
    	this.trading.Market = '关键字/市场名称';
    	this.trading.Medicine = '关键字/中药材名称';
        this.trading.BaseName = '关键字/产地名称';
        this.isMarket = false;
        this.isMedicine = false;
        this.isBase = false;
        this.isTemp = false;
        this.standardArr = [];
    },
    getStore () {
        var market = this['trading/getMarket'],
            medicine = this['trading/getMedicine'],
            baseName = this['trading/getBaseName'],
            temp = this['trading/getTemp'];
        this.trading.Market = market || '关键字/市场名称';
        this.trading.Medicine = medicine || '关键字/中药材名称';
        this.trading.BaseName = baseName || '关键字/产地名称';
        this.trading.Temp = temp || '选择模板';
        if(market!='') this.isMarket = true;
        if(medicine!='') this.isMedicine = true;
        if(baseName!='') this.isBase = true;
        if(temp!='') this.isTemp = true;
        var standard = this['trading/getStandard'] ? this['trading/getStandard'] : [];
        if(standard.length!=0)  this.standardArr = standard;
    },
    search (t,k) {
        this.isSearch = true;
        this.searchtemp = t;
        this.searchkey = k;
    },
    searchDone () {
        var _this = this;
        this.isSearch = false;
        this.getStore();
    },
    submit () {
        this.validate();
        weui.form.validate('#form-trading', function(error){
            if(!error){                
                if(_this.standardList.length<=1){
                    if(_this.standardList[0].Standard==''){
                        weui.topTips('请选择药材规格');
                        return false;
                    }
                    if(_this.standardList[0].TradeProduction==''){
                        weui.topTips('请填写交易数量');
                        return false;
                    }
                    if(_this.standardList[0].Price==''){
                        weui.topTips('请填写交易价格');
                        return false;
                    }
                }
                var result = [],
                    uniArr = [],
                    errorArr = [];
                uniArr = uniqeByKeys(_this.standardList,['Standard']); //数组去重
                // 组织数据(基本+规格)
                uniArr.forEach(function(item,index){
                    if(item.Standard!='' && item.TradeProduction!='' && item.Price!=''){
                        var jsonData = {};
                        jsonData.UserName = store.get('loginName');
                        Object.assign(jsonData,_this.trading); //es6
                        jsonData.Address = _this.$store.getters.getLocation;
                        jsonData.Time = formatDate(new Date(),'yyyy-MM-dd hh:mm');
                        Object.assign(jsonData,item);
                        jsonData.PriceRange = parseFloat(item.PriceRange/100).toFixed(2);
                        result.push(jsonData);
                    }
                });
                // console.log(result);
                var loading = weui.loading('上传中...');
                result.forEach(function(item,index){
                    _this.$http.jsonp(_this.$store.getters.getUrl+'/saveTradeJSONP',{
                        params : {"parms":JSON.stringify(item)},
                        jsonp : 'jsoncallback'
                    }).then(function(res){
                        item.hid = new Date().getTime();
                        item.cUserName = store.get('userName');
                        if(store.get('histTrading') && store.get('histTrading')!=''){
                            // 更新
                            var histTrading = JSON.parse(store.get('histTrading'));
                            histTrading.data.unshift(item);
                            store.remove('histTrading');
                            store.set('histTrading',JSON.stringify(histTrading));
                        }else{
                            // 新建
                            var historyData = {data : []};
                            historyData.data.unshift(item);
                            store.set('histTrading',JSON.stringify(historyData));
                        }
                        
                    },function(err){
                        errorArr.push(err);
                    });
                });
                loading.hide();
                if(errorArr.length>0){
                    weui.alert('上传失败');
                    //console.log(errorArr);
                }else{
                    weui.toast('上传成功', 2000);
                }
                _this.reset();
            }
        },this.regexp);
    },
    reset () {
        this.$store.dispatch('trading/reset');
        document.formTrading.reset();
        this.init();
        this.$router.go({ path: 'formTrading' });
    },
    // 增加规格
    addStandard () {
        var obj = {
            Standard: '',
            TradeProduction: '',
            Price: '',
            PriceTendency: '',
            PriceRange: '',
            MarketStatus: '',
            isAbled: true
        };
        if(this.standardList.length>9){
            weui.topTips('最多可以增加10个规格');
        }else{
            this.standardList.push(obj);
        }
    },
    save () {
        if(!localLimit(this.localTemp,function(){
            weui.alert('最多可以创建10个模板');
        })){
            return false;
        }
        var _this = this;
        if(_this.validate()){       
            weui.confirm('<input class="weui-input" id="tempName" name="tempName" v-model="trading.tempTitle" type="text" placeholder="填写模板名称" emptyTips="请填写模板名称">',function(){
                var tempName = document.getElementById('tempName').value;
                if(tempName.length>0 && trim(tempName,1)!=''){
                    var jsonData = {};
                        jsonData.UserName = store.get('loginName');
                        Object.assign(jsonData,_this.trading); //es6
                        jsonData.Address = _this.$store.getters.getLocation;
                        jsonData.Time = formatDate(new Date(),'yyyy-MM-dd hh:mm');
                        jsonData.hid = new Date().getTime();
                        jsonData.standardArr = _this.standardArr;
                        jsonData.IsDefault = 0;
                        jsonData.tempTitle = tempName;

                    var loading = weui.loading('保存中...');
                    if(store.get(_this.localTemp) && store.get(_this.localTemp)!=''){
                        // 更新
                        var objUpdate = JSON.parse(store.get(_this.localTemp));
                        objUpdate.data.unshift(jsonData);
                        store.remove(_this.localTemp);
                        store.set(_this.localTemp,JSON.stringify(objUpdate));
                    }else{
                        // 新建
                        var objAdd = {data : []};
                        objAdd.data.unshift(jsonData);
                        store.set(_this.localTemp,JSON.stringify(objAdd));
                    }
                    loading.hide();
                    weui.toast('模板保存成功', 500);
                }else{
                    weui.topTips('请填写模板名称');
                    document.getElementById('tempName').focus();
                    return false;
                }
            },function(){},{
              title: '提示'
            });
        }
    },
    validate () {
        var _this = this;
        if(!this.isMarket){
            weui.topTips('请选择市场名称');
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
        return true;
    },
    choose () {
        var _this = this,
            json = JSON.parse(store.get(_this.localTemp));
        _this.tempData = json.data;
        _this.showTemp = true;
    },
    tclose() {
        this.showTemp = false;
        this.getStore();
    }
  },
  components: {
	comHead,
	baseInfo,
    searchList,
    standardBlock,
    tempList
  },
  destroyed () {
      this.$store.dispatch('trading/reset');
  }
}
</script>

<style>

</style>
