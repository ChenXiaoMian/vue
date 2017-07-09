<template>
    <div class="containerInner">
        <comHead :pageTitle="pageTitle"></comHead>
        <form id="form-pro" name="formPro" autocomplete="off">
        <div class="weui-cells weui-cells_form">
            <router-link class="weui-cell weui-cell_access js-tempChoose" :to="{path:'/chooseTemp',query:{num:1}}">
                <div class="weui-cell__hd km-line"><label class="weui-label ">选择模板</label></div>
                <div class="weui-cell__bd"><p class="c-3dbaff getChooseTemp">默认模板</p></div>
                <div class="weui-cell__ft"></div>
            </router-link>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label">产品类型</label></div>
                <div class="weui-cell__bd">
                    <select class="weui-select" required name="Product" v-model="pro.Product">
                        <option value="">请选择</option>
                        <option>成药</option>
                        <option>食品</option>
                        <option>保健品</option>
                    </select>
                </div>
                <div class="weui-cell__ft"></div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">产品名称</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请填写产品名称" name="ProductName" v-model="pro.ProductName">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">产品规格</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请填写产品规格" name="Standard" v-model="pro.Standard">
                </div>
            </div>
        </div>
        <div class="weui-cells weui-cells_form">
            <router-link class="weui-cell weui-cell_access js-itemSearch" :to="{path:'/searchItem',query:{temp:'pro',key:'manufacturer'}}">
                <div class="weui-cell__hd km-line"><label class="weui-label adLet">生 产 商</label></div>
                <div class="weui-cell__bd"><p v-bind:class="{'c-3dbaff':isManu,'c-c7c7c7':!isManu}">{{pro.Manufacturer}}</p></div>
                <div class="weui-cell__ft"></div>
            </router-link>
            <!--<router-link class="weui-cell weui-cell_access js-itemSearch" :to="{path:'/searchItem',query:{temp:'pro',key:'medicine'}}">
                <div class="weui-cell__hd km-line"><label class="weui-label adLet">药材名称</label></div>
                <div class="weui-cell__bd"><p v-bind:class="{'c-3dbaff':isMedicine,'c-c7c7c7':!isMedicine}">{{pro.MedicineName}}</p></div>
                <div class="weui-cell__ft"></div>
            </router-link>-->
            <a class="weui-cell weui-cell_access js-itemSearch" @click="search('pro','medicine')">
                <div class="weui-cell__hd km-line"><label class="weui-label adLet">药材名称</label></div>
                <div class="weui-cell__bd"><p v-bind:class="{'c-3dbaff':isMedicine,'c-c7c7c7':!isMedicine}">{{pro.MedicineName}}</p></div>
                <div class="weui-cell__ft"></div>
            </a>
            <router-link class="weui-cell weui-cell_access js-itemSearch" :to="{path:'/searchItem',query:{temp:'pro',key:'base'}}">
                <div class="weui-cell__hd km-line"><label class="weui-label">产地名称</label></div>
                <div class="weui-cell__bd"><p v-bind:class="{'c-3dbaff':isBase,'c-c7c7c7':!isBase}">{{pro.BaseName}}</p></div>
                <div class="weui-cell__ft"></div>
            </router-link>
        </div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">原药比重</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式" placeholder="" name="Ratio" v-model="pro.Ratio">
                </div>
                <div class="weui-cell__dw c-c7c7c7">%</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">药材规格</label></div>
                <div class="weui-cell__bd">
                    <select class="weui-select" name="MedicineStandard" v-model="pro.MedicineStandard">
                    </select>
                </div>
                <div class="weui-cell__ft"></div>
            </div>
        </div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label adLet">供 应 商<br>(原药材)</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请填写原药材供应商名称" name="Supplier" v-model="pro.Supplier">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">质量要求<br>(原药材)</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请填写原药材质量要求" name="QualityRequire" v-model="pro.QualityRequire">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">年销售额<br>(产品)</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式" placeholder="" name="Sale" v-model="pro.Sale">
                </div>
                <div class="weui-cell__dw c-c7c7c7">元</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">需求趋势<br>(产品)</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请填写产品需求趋势" name="ProductTendency" v-model="pro.ProductTendency">
                </div>
                <div class="weui-cell__ft"></div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line align-start"><label class="weui-label ">备注说明</label></div>
                <div class="weui-cell__bd">
                    <textarea class="weui-textarea" name="Addition" placeholder="请填写备注说明" rows="3" v-model="pro.Addition"></textarea>
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
        </form>
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
      pageTitle: '产品信息采集',
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
      searchkey: ''
    }
  },
  created (){
    this.getStore();
    // console.log(this['pro/getMedicine']);
  },
  computed : {
    ...mapGetters([
        'getUrl',
        'pro/getManu',
        'pro/getMedicine',
        'pro/getBaseName'
    ])
  },
  updated (){
    weui.form.checkIfBlur('#form-pro', this.regexp);
  },
  activated () {
        
  },
  deactivated () {
    
  },
  methods: {
    init () {
    	this.pro.Manufacturer = '关键字/生产商名称';
    	this.pro.MedicineName = '关键字/中药材名称';
        this.pro.BaseName = '关键字/产地名称';
        this.isManu = false;
        this.isMedicine = false;
        this.isBase = false;
    },
    getStore () {
        var manu = this['pro/getManu'],
            medicine = this['pro/getMedicine'],
            baseName = this['pro/getBaseName'];
        this.pro.Manufacturer = manu || '关键字/生产商名称';
        this.pro.MedicineName = medicine || '关键字/中药材名称';
        this.pro.BaseName = baseName || '关键字/产地名称';
        if(manu!='') this.isManu = true;
        if(medicine!='') this.isMedicine = true;
        if(baseName!='') this.isBase = true;
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
                console.log(jsonData);
                // var loading = weui.loading('上传中...');
                // _this.$http.jsonp(_this.$store.getters.getUrl+'/saveManufactureSliceJSONP',{
                //   params : {"parms":JSON.stringify(jsonData)},
                //   jsonp : 'jsoncallback'
                // }).then(function(res){
                //     loading.hide();
                //     weui.toast('上传成功', 2000);
                //     jsonData.hid = new Date().getTime();
                //     jsonData.cUserName = store.get('userName');
                //     if(store.get('histPieces') && store.get('histPieces')!=''){
                //         // 更新
                //         var histPieces = JSON.parse(store.get('histPieces'));
                //         histPieces.data.unshift(jsonData);
                //         store.remove('histPieces');
                //         store.set('histPieces',JSON.stringify(histPieces));
                //     }else{
                //         // 新建
                //         var historyData = {data : []};
                //         historyData.data.unshift(jsonData);
                //         store.set('histPieces',JSON.stringify(historyData));
                //     }
                //     _this.reset();
                // },function(err){
                //   loading.hide();
                //   weui.alert('上传失败');
                // });
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
